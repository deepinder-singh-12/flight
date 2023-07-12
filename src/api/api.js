export const getUrl = (index) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(
    `${process.env.REACT_APP_API_ENDPOINT}${
      index === 0 ? "/arrivals_new1.xml" : "/departures_new1.xml"
    }`
  )}`;
};
