import { Typography, Box, CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../store/searchContext";
import FlightTable from "../Feature/FlightTable";
import { XMLParser } from "fast-xml-parser";
import { filterFlights } from "../../helpers/fiterFlights";
import { getData } from "../../services/fetch";
import { getUrl } from "../../api/api";

const CustomTabPanel = (props) => {
  const { value, index, ...other } = props;
  const { searchString } = useContext(SearchContext);
  const url = getUrl(index);

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const convertData = async () => {
    setLoading(true);
    try {
      const response = await getData(url);
      const text = await response.text();
      const parser = new XMLParser();
      const tempObject = parser.parse(text);
      setFlights(
        index === 0 ? tempObject.flights.Arrival : tempObject.flights.Departure
      );
      setDate(tempObject.flights.date);
      setTime(tempObject.flights.time);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    convertData();
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
            <FlightTable
              flightsArr={flightsArr.length > 0 ? flightsArr : flights}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CustomTabPanel;
