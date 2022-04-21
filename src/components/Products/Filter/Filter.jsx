import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";

const Filter = ({
  type,
  setType,
  setPage,
  slider,
  setSlider,
  maxSliderValue,
  minSliderValue,
  handleReset,
}) => {
  const [filter, setFilter] = useState(false);

  const btnFilter = () => {
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={btnFilter}>
        <h2 style={{ color: "black" }}>Filter</h2>
      </Button>
      <div style={{ display: filter ? "block" : "none" }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Type: </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            style={{ display: "flex", flexDirection: "row" }}
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="KIDS" control={<Radio />} label="Kids" />
            <FormControlLabel
              value="ADULTS"
              control={<Radio />}
              label="Adults"
            />
            <FormControlLabel value="EXAM" control={<Radio />} label="Exam" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Typography color="text.secondary">Price</Typography>
        <Slider
          sx={{ maxWidth: "350px" }}
          value={slider}
          onChange={(e, newValue) => {
            setSlider(newValue);
            setPage(1);
          }}
          valueLabelDisplay="auto"
          max={maxSliderValue}
          min={minSliderValue}
        />
        <br />
        <Button varianr="outlined" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Filter;
