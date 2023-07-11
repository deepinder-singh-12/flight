import { Typography, Box, CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../store/searchContext";
import FlightTable from "../Feature/FlightTable";
import { XMLParser } from "fast-xml-parser";
import { filterFlights } from "../../helpers/fiterFlights";
const CustomTabPanel = (props) => {
  const { value, index, ...other } = props;
  const { searchString } = useContext(SearchContext);
  const url = `https://cors-anywhere.herokuapp.com/https://yxy.terminalsystems.com/export${
    index === 0 ? "/arrivals_new1.xml" : "/departures_new1.xml"
  }`;

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [flights, setFlights] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      mode: "cors",
      method: "GET",
    })
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        const parser = new XMLParser();
        let jObj = parser.parse(text);
        setFlights(index === 0 ? jObj.flights.Arrival : jObj.flights.Departure);
        setDate(jObj.flights.date);
        setTime(jObj.flights.time);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  const flightsArr = filterFlights(flights, searchString);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {loading ? (
        <Box marginY={10} sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography
            variant="caption"
            display="block"
            marginY={2}
            color={"GrayText"}
          >
            {date} at {time}
          </Typography>
          {value === index && (
            <FlightTable flightsArr={flightsArr ? flightsArr : flights} />
          )}
        </>
      )}
    </div>
  );
};

export default CustomTabPanel;
