import React from "react";
import "./RecipeDisplay.css";

const RecipeDisplay = () => {
	return (
		<div className="RecipeMainContainer">
			<div className="RecipeNameMain">
				<h1 className="RecipeNameText">SOME DISH NAME</h1>
			</div>

			<div className="RecipeImageMain">
				<img src="/public/logo512.png" alt="Some Good Food" />
			</div>

			<div className="RecipeDescriptionMain">
				<h1 className="RecipeDescriptionText">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</h1>
			</div>

			<div className="RecipeIngredientsMain">
				<h1 className="RecipeIngredientsText">
					A list of very long ingredients goes here! dcmlpkcmnp mcmqdmcknvj
					cbqihvivio qfkvofq
				</h1>
			</div>

			<div className="RecipeInstructionsMain">
				<p className="small-text">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English. Many desktop publishing packages and web
					page editors now use Lorem Ipsum as their default model text, and a
					search for 'lorem ipsum' will uncover many web sites still in their
					infancy. Various versions have evolved over the years, sometimes by
					accident, sometimes on purpose injected humour and the like.
				</p>
			</div>
		</div>
	);
};

export default RecipeDisplay;
