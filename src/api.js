import axios from "axios";

export const getCurrentWeather = () => axios.get("https://open-weather13.p.rapidapi.com/city/Paris", {
	headers: {
		'X-RapidAPI-Key': 'd0d3471d3emsh609102a98bc5935p166061jsn914205307d89',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}.then(res => {
		console.log(res.data)
		return res.data
	})
});
