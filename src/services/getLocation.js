import React from "react";
import Axios from "axios";

const GetLocation = query => {
	if (!query) {
		return Promise.resolve([]);
	}
	return Axios.get(
		`https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={number_of_results_required}&solrTerm=${query}`
	)
		.then(data => data.data.results.docs)
		.catch(err => console.error(err));
};

export default GetLocation;
