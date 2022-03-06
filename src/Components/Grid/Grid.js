import Cell from "../Cell/Cell"; 
import "./Grid.css";

function Grid(props) {
  const {
    rows,
    cols,
    cellSize,
    borderSize,
    grid,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
  } = props;
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize + borderSize * 2}px)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((cell, y) => {
          return (
            <Cell
              key={`${i}-${y}`}
              cellSize={cellSize}
              borderSize={borderSize}
              grid={grid}
              row={i}
              col={y}
              handleMouseDown={handleMouseDown}
              handleMouseEnter={handleMouseEnter}
              handleMouseUp={handleMouseUp}
            />
          );
        })
      )}
    </div>
  );
}

export default Grid;