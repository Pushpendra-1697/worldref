import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../Redux/RecipeReducer/action";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = () => {
  const { recipe, isLoading, isError } = useSelector(store => store.recipeManager);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <div style={{ padding: '10px', width: '100%' }}>
      {isLoading && <h1>Loading.....</h1>}
      {isError && <h1>Error.....</h1>}
      <div data-testid="recipe-list" className="recipe-list">
        {recipe && recipe.map(({ id, category, image, ingredients, name, price, type }) =>
          <RecipeCard key={id} id={id} category={category} image={image} ingredients={ingredients} name={name} price={price} type={type} />
        )}
      </div>
    </div>
  );
};
