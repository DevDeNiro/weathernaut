import axios from "axios";

export const getCurrentWeather = (lon, lat) => {
  return axios
    .get(
      `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${lat.toString()}/${lon.toString()}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "d0d3471d3emsh609102a98bc5935p166061jsn914205307d89",
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCityCoordinates = (query) => {
  return axios
    .get(
      `http://api.positionstack.com/v1/forward?access_key=2a2350cab5b2aa914b143d6a71735e59&query=${query}`,
      {}
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
