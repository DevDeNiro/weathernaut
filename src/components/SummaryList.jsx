import CityName from "./CityName";

export default function SummuryList() {
  return (
    <div className="bg-color-blue">
      <CityName></CityName>
      <div className="">Next 7 Days</div>
      <div className="flex">
        <div>icon</div>
        <div>date</div>
        <div>degrees</div>
      </div>
    </div>
  );
}
