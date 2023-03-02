import data from "../data2.json";

export const formatDate = (date) => new Intl.DateTimeFormat("fr").format(date);

export const formatTemp = (temp) => (temp - 273.15).toFixed(1);
