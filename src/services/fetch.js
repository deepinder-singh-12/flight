export const getData = async (url) => {
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "GET",
    });
    return response;
  } catch (error) {
    return error;
  }
};
