export const filterFlights = (flightsArr, searchString) => {
  if (searchString.length > 0) {
    let flights = flightsArr.filter(
      (flight) =>
        flight.Carrier.toLowerCase().includes(searchString) ||
        flight.Flight.toLowerCase().includes(searchString) ||
        flight.Cities.toLowerCase().includes(searchString)
    );
    return flights;
  }
  return [];
};
