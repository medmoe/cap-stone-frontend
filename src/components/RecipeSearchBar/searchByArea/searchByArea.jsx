import React from "react";

const SearchByAreaForm = (props) => {
	return (
		<div>
			<form name="area" onSubmit={props.handleSubmitByAreaOrCategory}>
				<div className="theBar">
					<div className="barHeader">
						<h1>Let's find your desired recipe by Area</h1>
					</div>

					<input
						className="searchBar"
						placeholder="Enter a recipe name"
						type="text"
						onChange={props.handleQuery}
					></input>

					<button>Search</button>
				</div>
			</form>
		</div>
	);
};

export default SearchByAreaForm;
