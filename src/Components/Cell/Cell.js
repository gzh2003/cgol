import { grey, blue} from "@mui/material/colors";

function Cell(props) {
  const { cellSize, borderSize, grid, row:i, col:y, handleMouseDown, handleMouseEnter, handleMouseUp } = props;
  return (
    <div
      key={`${i}-${y}`}
      className="cell"
      style={{
        width: cellSize + "px",
        height: cellSize + "px",
        border: `${borderSize}px solid ${grey[50]}`,
        backgroundColor: grid[i][y] ? blue[400] : grey[200],
      }}
      onMouseDown={()=>handleMouseDown(i,y)}
      onMouseEnter={()=>handleMouseEnter(i,y)}
      onMouseUp={()=>handleMouseUp()}
    ></div>
  );
}

export default Cell;
