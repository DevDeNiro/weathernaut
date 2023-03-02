import data from "../data2.json";

export const formatDate = (date) => new Intl.DateTimeFormat("fr").format(date);

export const formatTemp = (temp) => ((temp - 32) * (5/ 9)).toFixed(1);
