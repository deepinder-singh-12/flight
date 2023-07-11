import React, { useContext, useState } from "react";
import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchContext from "../../store/searchContext";
import { APP_CONSTS } from "../../enums/enums";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { setSearchString } = useContext(SearchContext);

  const handleSearch = () => {
    setSearchString(input.toLowerCase());
  };
  return (
    <>
      <OutlinedInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          background: "#fff",
          borderStartEndRadius: "50px",
          borderEndEndRadius: "50px",
          paddingX: "30px",
          paddingY: "15px",
          maxWidth: "60vw",
        }}
        fullWidth={true}
        placeholder={APP_CONSTS.SEARCH_PLACE_HOLDER}
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
              type="button"
              sx={{
                borderRadius: "25px",
                padding: "10px",
                fontWeight: "bold",
              }}
              onClick={handleSearch}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Search Flights
            </Button>
          </InputAdornment>
        }
      />
    </>
  );
};

export default SearchBar;
