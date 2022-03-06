import React, { useState, useRef, useEffect } from "react";
import Grid from "./Components/Grid/Grid";
import Footer from "./Components/Footer/Footer";
import RunButton from "./Components/Menu/RunButton";
import ClearGridButton from "./Components/Menu/ClearGridButton";
import RandomGridButton from "./Components/Menu/RandomGridButton";
import IterationSpeedSelect from "./Components/Menu/IterationSpeedSelect";
import CellSizeSelect from "./Components/Menu/CellSizeSelect";
import BorderSizeSelect from "./Components/Menu/BorderSizeSelect";
import { grey, blue } from "@mui/material/colors";
import { Drawer, IconButton } from "@mui/material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import "./App.css";

const HORIZONTAL_ADJUSTMENT = 20;
const VERTICAL_ADJUSTMENT = 50;

const generateEmptyGrid = (rows, cols) => {
  return Array.from({ length: rows }).map(() =>
    Array.from({ length: cols }).fill(0)
  );
};

const generateRandomGrid = (rows, cols) => {
  return Array.from({ length: rows }).map(() =>
    Array.from({ length: cols }).map(() => (Math.random() > 0.7 ? 1 : 0))
  );
};

const checkGridNeighbours = (i, y, rows, cols, grid) => {
  let neighbours = 0;
  if (i - 1 >= 0 && y - 1 >= 0 && grid[i - 1][y - 1]) neighbours++;
  if (y - 1 >= 0 && grid[i][y - 1]) neighbours++;
  if (i - 1 >= 0 && grid[i - 1][y]) neighbours++;
  if (i + 1 < rows && y + 1 < cols && grid[i + 1][y + 1]) neighbours++;
  if (y + 1 < cols && grid[i][y + 1]) neighbours++;
  if (i + 1 < rows && grid[i + 1][y]) neighbours++;
  if (i + 1 < rows && y - 1 >= 0 && grid[i + 1][y - 1]) neighbours++;
  if (i - 1 >= 0 && y + 1 < cols && grid[i - 1][y + 1]) neighbours++;
  return neighbours;
};

function App() {
  //States
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showSidebar, setShowSidebar] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  const [iterationSpeed, setIterationSpeed] = useState(1000);
  const [cellSize, setCellSize] = useState(16);
  const [borderSize, setBorderSize] = useState(2);
  const [rows, setRows] = useState(
    Math.floor(
      (windowDimensions.height - VERTICAL_ADJUSTMENT) /
        (cellSize + borderSize * 2)
    )
  );
  const [cols, setCols] = useState(
    Math.floor(
      (windowDimensions.width - HORIZONTAL_ADJUSTMENT) /
        (cellSize + borderSize * 2)
    )
  );
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid(rows, cols);
  });

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  //Mouse Events
  const handleMouseDown = (i, y) => {
    const tempGrid = JSON.parse(JSON.stringify(grid));
    tempGrid[i][y] = grid[i][y] ? 0 : 1;
    setGrid(tempGrid);
    setMouseDown(true);
  };
  const handleMouseEnter = (i, y) => {
    if (!mouseDown) return;
    const tempGrid = JSON.parse(JSON.stringify(grid));
    tempGrid[i][y] = grid[i][y] ? 0 : 1;
    setGrid(tempGrid);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  //Simulate CGOL
  const runSimulation = () => {
    if (!runningRef.current) return;
    setGrid((prevGrid) => {
      let tempGrid = JSON.parse(JSON.stringify(prevGrid));
      for (let i = 0; i < rows; ++i) {
        for (let y = 0; y < cols; ++y) {
          let neighbours = checkGridNeighbours(i, y, rows, cols, prevGrid);
          if (neighbours < 2 || neighbours > 3) {
            tempGrid[i][y] = 0;
          } else if (prevGrid[i][y] === 0 && neighbours === 3) {
            tempGrid[i][y] = 1;
          }
        }
      }
      return tempGrid;
    });
    setTimeout(runSimulation, iterationSpeed);
  };

  const endSimulation = () => {
    if (runningRef.current) {
      runningRef.current = false;
      setRunning(false);
    }
  };

  //Btn Stuff
  const handleToggleSimulation = () => {
    runningRef.current = !runningRef.current;
    if (runningRef.current) {
      setRunning(true);
      runSimulation();
    } else {
      setRunning(false);
    }
  };

  const handleClearSimulation = () => {
    endSimulation();
    setGrid(generateEmptyGrid(rows, cols));
  };

  const handleRandomSimulation = () => {
    endSimulation();
    setGrid(generateRandomGrid(rows, cols));
  };

  const handleInterationSpeed = (e) => {
    endSimulation();
    setIterationSpeed(Number(e.target.value));
  };

  const handleCellSize = (e) => {
    endSimulation();
    const tempCellSize = Number(e.target.value);
    const tempRows = Math.floor(
      (windowDimensions.height - VERTICAL_ADJUSTMENT) /
        (tempCellSize + borderSize * 2)
    );
    const tempCols = Math.floor(
      (windowDimensions.width - HORIZONTAL_ADJUSTMENT) /
        (tempCellSize + borderSize * 2)
    );
    setCellSize(tempCellSize);
    setRows(tempRows);
    setCols(tempCols);
    setGrid(generateEmptyGrid(tempRows, tempCols));
  };

  const handleBorderSize = (e) => {
    endSimulation();
    const tempBorderSize = Number(e.target.value);
    const tempRows = Math.floor(
      (windowDimensions.height - VERTICAL_ADJUSTMENT) /
        (cellSize + tempBorderSize * 2)
    );
    const tempCols = Math.floor(
      (windowDimensions.width - HORIZONTAL_ADJUSTMENT) /
        (cellSize + tempBorderSize * 2)
    );
    setBorderSize(tempBorderSize);
    setRows(tempRows);
    setCols(tempCols);
    setGrid(generateEmptyGrid(tempRows, tempCols));
  };

  //Window adjustments
  useEffect(() => {
    function handleResize() {
      endSimulation();
      const tempRows = Math.floor(
        (window.innerHeight - VERTICAL_ADJUSTMENT) / (cellSize + borderSize * 2)
      );
      const tempCols = Math.floor(
        (window.innerWidth - HORIZONTAL_ADJUSTMENT) /
          (cellSize + borderSize * 2)
      );
      setRows(tempRows);
      setCols(tempCols);
      setGrid(generateEmptyGrid(tempRows, tempCols));
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="App">
      <header className="settings-header">
        <IconButton aria-label="settings" onClick={toggleSidebar}>
          <SettingsApplicationsIcon
            sx={{ fontSize: 40, color: blue[500], backgroundColor: grey[100] }}
          />
        </IconButton>
        <Drawer anchor="left" open={showSidebar} onClose={toggleSidebar}>
          <RunButton
            running={runningRef.current}
            handleClick={handleToggleSimulation}
          />
          <ClearGridButton handleClick={handleClearSimulation} />
          <RandomGridButton handleClick={handleRandomSimulation} />

          <div className="menu-item">
            <IterationSpeedSelect
              iterationSpeed={iterationSpeed}
              handleChange={handleInterationSpeed}
            />
          </div>
          <div className="menu-item">
            <CellSizeSelect cellSize={cellSize} handleChange={handleCellSize} />
          </div>
          <div className="menu-item">
            <BorderSizeSelect
              borderSize={borderSize}
              handleChange={handleBorderSize}
            />
          </div>
        </Drawer>
      </header>

      <div className="grid-container">
        <Grid
          cellSize={cellSize}
          borderSize={borderSize}
          grid={grid}
          rows={rows}
          cols={cols}
          handleMouseDown={handleMouseDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseUp={handleMouseUp}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
