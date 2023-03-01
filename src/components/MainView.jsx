import CityName from "./CityName.jsx";
import cloudy from "../animated/cloudy.svg";
import thermometerGrid from "../static/thermometer-outline.svg"
import sunGrid from "../static/sunny-outline.svg"

export default function MainView() {
	return (
		<main className="w-full p-4">
			<CityName city="London" country="UK" />

			<section className="w-full bg-blue-500 rounded-lg my-4 overflow-hidden">
				<div className="w-full flex items-center justify-center flex-col p-4">
					<img src={cloudy} alt="oy luffy" className="" />
					<div className="flex items-center flex-col gap-2">
						<h2 className="text-white text-2xl">Heavy Rain</h2>
						<p className="text-slate-300 text-xs">Sunday, 02 oct.</p>
					</div>
					<h1 className="text-8xl text-white font-bold my-6">24°</h1>
				</div>

				<div className="grid grid-cols-2 grid-rows-2 h-[200px] border-collapse">
					<div className="w-full h-full border-y-[1px] border-t-white p-3 flex items-center gap-2">
						<img src={cloudy} alt="oy luffy" className="h-[40px]" />
						<aside>
							<p className="text-slate-300 text-xs uppercase">Wind</p>
							<p className="text-white text-xs">19.2km/j</p>
						</aside>
					</div>
					<div className="w-full h-full border-[1px] border-r-0 border-white p-3 flex items-center gap-2">
						<img src={thermometerGrid} alt="" className="h-[40px]" />
						<aside>
							<p className="text-slate-300 text-xs uppercase">Feel like</p>
							<p className="text-white text-xs">25°</p>
						</aside>
					</div>
					<div className="w-full h-full p-3 flex items-center gap-2">
						<img src={sunGrid} alt="" className="h-[40px]" />
						<aside>
							<p className="text-slate-300 text-xs uppercase">Index uv</p>
							<p className="text-white text-xs">2</p>
						</aside>
					</div>
					<div className="w-full h-full border-l-[1px] border-l-white p-3 flex items-center gap-2">
						<img src={sunGrid} alt="" className="h-[40px]" />
						<aside>
							<p className="text-slate-300 text-xs uppercase">Pressure</p>
							<p className="text-white text-xs">1014 mbar</p>
						</aside>
					</div>
				</div>
			</section>
		</main>
	)
}
