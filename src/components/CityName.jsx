export default function CityName({city, country}) {
	return (
		<h1 className="text-2xl">
			<span className="font-bold">{city}, </span>
			{" "}
			<span className="font-light text-xl">{country}</span>
		</h1>
	)

}
