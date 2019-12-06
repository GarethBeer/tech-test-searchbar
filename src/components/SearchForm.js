import React from "react";
import SearchOutput from "./SearchOutput";
import "../searchForm.css";

const SearchForm = props => {
	const { onInput, details } = props;
	return (
		<div>
			<div className="searchContainer">
				<header>
					<h1>Where would you like to go?</h1>
				</header>
				<form action="POST">
					<label>Pick up location:</label>
					<input
						type="text"
						placeholder="city, airport, station, region and district"
						onChange={onInput}
					/>
				</form>

				<div className="locations">
					{details && details.length > 0
						? details.map(singleLocation => (
								<SearchOutput details={singleLocation} />
						  ))
						: " "}
				</div>
			</div>
		</div>
	);
};

export default SearchForm;
