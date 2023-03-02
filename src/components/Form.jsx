export default function Form({cityName, setter, onSubmit}) {
	return (
		<form className="w-full flex gap-3" onSubmit={onSubmit}>
			<input type="text" className="outline-none border-[1px] border-blue-500 rounded p-2 flex-1"
				   placeholder="Cherchez parmi les villes européennes"
				   value={cityName}
				   onChange={(e) => setter(e.target.value)}
			 />
			<input type="submit" value="Search" className="bg-blue-500 text-white p-2 rounded cursor-pointer" />
		</form>
	)
}
