import React from "react";

const SearchOutput = props => {
	const { details } = props;
	return (
		<h1>
			{details.name}, {details.country}
		</h1>
	);
};

export default SearchOutput;
