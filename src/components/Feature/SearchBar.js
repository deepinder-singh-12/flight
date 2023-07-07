import React from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SearchBar = () => {
  return (
    <FormControl variant="standard">
      <OutlinedInput
        sx={{
          minWidth: "800px",
          background: "#fff",
          borderStartEndRadius: "50px",
          borderEndEndRadius: "50px",
          paddingX: "30px",
          paddingY: "20px",
        }}
        disableUnderline={true}
        fullWidth={true}
        placeholder="Search arrivals by flight number, airline, city"
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined
              sx={{
                fontSize: "3rem",
                color: "#000",
              }}
            />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Button
              sx={{
                borderRadius: "25px",
              }}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Search Flights
            </Button>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
