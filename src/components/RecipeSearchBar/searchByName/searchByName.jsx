import React from "react";

const SearchByNameForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmitByName}>
				<div className="theBar">
					<div className="barHeader">
						<h1>Let's find your desired recipe by name</h1>
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

export default SearchByNameForm;
