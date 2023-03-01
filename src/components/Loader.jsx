import {Triangle} from "react-loader-spinner";

const Loader = () => (
	<div className="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2">
		<Triangle
			height="80"
			width="80"
			color="#000"
			ariaLabel="triangle-loading"
			wrapperStyle={{}}
			wrapperClassName=""
			visible={true}
		/>
	</div>
);

export default Loader;
