import React, { useState } from "react";
import "./reciepeSearchBar.css";
import { useHistory } from "react-router-dom";
//Component
import SearchByAreaForm from "./searchByArea/searchByArea.jsx";
import SearchByCategoryForm from "./searchByCategory/searchByCategoryForm";
import SearchByNameForm from "./searchByName/searchByName";

const RecipeSearchBar = () => {
	const [search, setSearch] = useState("");
	const [searchByCategory, setSearchByCategory] = useState(false);
	const [searchByName, setSearchByName] = useState(true);
	const [searchByArea, setSearchByArea] = useState(false);
	const history = useHistory();

	const handleSubmitByName = (e) => {
		e.preventDefault();
		history.push(`/recipes/recipeid/${search}`);
	};

	const handleSubmitByAreaOrCategory = (e) => {
		e.preventDefault();
		console.log(searchByArea);
		history.push(`/areaorcategoryrecipes/${e.target.name}/${search}`);
	};

	const handleChangeForm = (e) => {
		const { name } = e.target;
		switch (name) {
			case "searchName":
				setSearchByName(true);
				setSearchByCategory(false);
				setSearchByArea(false);
				break;
			case "searchCategory":
				setSearchByName(false);
				setSearchByCategory(true);
				setSearchByArea(false);
				break;
			case "searchArea":
				setSearchByName(false);
				setSearchByCategory(false);
				setSearchByArea(true);
				break;
			default:
				setSearchByName(true);
				setSearchByCategory(false);
				setSearchByArea(false);
				break;
		}
	};

	const handleQuery = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="RecipeSearchBarMainContainer">
			<div className="RecipeSearchBarMiddleContainer">
				{searchByName ? (
					<SearchByNameForm
						handleQuery={handleQuery}
						handleSubmitByName={handleSubmitByName}
					/>
				) : searchByCategory ? (
					<SearchByCategoryForm
						handleQuery={handleQuery}
						handleSubmitByAreaOrCategory={handleSubmitByAreaOrCategory}
					/>
				) : (
					<SearchByAreaForm
						handleQuery={handleQuery}
						handleSubmitByAreaOrCategory={handleSubmitByAreaOrCategory}
					/>
				)}

				<div className="buttonContainer">
					<button
						className="searchButtons effect"
						name="searchName"
						onClick={handleChangeForm}
					>
						Search By Name
					</button>
					<button
						className="searchButtons effect"
						name="searchCategory"
						onClick={handleChangeForm}
					>
						Search By Category
					</button>
					<button
						className="searchButtons effect"
						name="searchArea"
						onClick={handleChangeForm}
					>
						Search By Area
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeSearchBar;
