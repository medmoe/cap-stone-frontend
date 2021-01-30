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

	const HandleSubmit = (e) => {
		e.preventDefault();
		history.push(`/recipes/recipeid/${search}`);
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
					<SearchByNameForm handleQuery={handleQuery} />
				) : searchByCategory ? (
					<SearchByCategoryForm handleQuery={handleQuery} />
				) : (
					<SearchByAreaForm handleQuery={handleQuery} />
				)}

				<div className="buttonContainer">
					<button name="searchName" onClick={handleChangeForm}>
						Search By Name
					</button>
					<button name="searchCategory" onClick={handleChangeForm}>
						Search By Category
					</button>
					<button name="searchArea" onClick={handleChangeForm}>
						Search By Area
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeSearchBar;
