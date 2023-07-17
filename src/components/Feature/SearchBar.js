import React, { useContext, useState } from "react";
import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import SearchContext from "../../store/searchContext";
import { APP_CONSTS } from "../../enums/enums";

const btnStyle = {
  borderRadius: "25px",
  padding: "10px",
  fontWeight: "bold",
};

const iconStyle = {
  fontSize: "3rem",
  color: "#000",
};

const inputStyle = {
  background: "#fff",
  borderStartEndRadius: "50px",
  borderEndEndRadius: "50px",
  paddingX: "30px",
  paddingY: "15px",
  maxWidth: "60vw",
};

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [searching, setSearching] = useState(true);
  const { setSearchString } = useContext(SearchContext);

  const handleSearch = () => {
    setSearchString(input.toLowerCase());
    setSearching(false);
  };

  const handleEnterSearch = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const closeSearch = () => {
    setInput("");
    setSearchString("");
    setSearching(true);
  };
  return (
    <>
      <OutlinedInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={inputStyle}
        fullWidth={true}
        placeholder={APP_CONSTS.SEARCH_PLACE_HOLDER}
        id="input-with-icon-adornment"
        onKeyDown={handleEnterSearch}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined sx={iconStyle} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {searching ? (
              <Button
                type="button"
                sx={btnStyle}
                onClick={handleSearch}
                disabled={input.length === 0}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Search Flights
              </Button>
            ) : (
              <Button
                type="button"
                sx={btnStyle}
                onClick={closeSearch}
                variant="contained"
                endIcon={<CloseIcon />}
              >
                Close
              </Button>
            )}
          </InputAdornment>
        }
      />
    </>
  );
};

export default SearchBar;
