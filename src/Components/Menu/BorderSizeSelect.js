import React from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";

function BorderSizeSelect(props) {
  const { borderSize, handleChange } = props;
  return (
    <React.Fragment>
      <InputLabel id="borderSize-label">Spacing Size</InputLabel>
      <Select
        sx={{ width: 150 }}
        name="borderSize"
        id="borderSize"
        labelId="borderSize-label"
        value={borderSize}
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value="0">0px</MenuItem>
        <MenuItem value="1">1px</MenuItem>
        <MenuItem value="2">2px</MenuItem>
        <MenuItem value="3">3px</MenuItem>
        <MenuItem value="4">4px</MenuItem>
      </Select>
    </React.Fragment>
  );
}

export default BorderSizeSelect;
