import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RecipeDetail = () => {
  const params = useParams();
  const [recipeData, setRecipeData] = useState();

  useEffect(() => {
    getRecipe();
  }, []);
  const getRecipe = async () => {
    try {
      let res = await axios.get(`https://blog-database-p9we.vercel.app/recipe/${params?.id}`);
      setRecipeData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {recipeData ?
        <div style={{ border: '1px solid beige', padding: '10px 20px', width: '30%', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', margin: 'auto', marginTop: '2%' }} className={"recipe-card"}>
          <h1 className="recipe-id">{params.id}</h1>
          <img className="recipe-image" src={recipeData?.image} alt={recipeData?.name} style={{ width: '350px' }} />
          <h3 className="recipe-name">{recipeData?.name}</h3>
          <p className="recipe-type">Type: {recipeData?.type}</p>
          <h2 className="recipe-category">Category: {recipeData?.category}</h2>
          <h3 className="recipe-price">Price: {recipeData?.price}$</h3>
          <div className="recipe-ingredient">
            <h3>Ingredients:-</h3>
            {recipeData?.ingredients?.map((ele, index) =>
              <p key={index}>- {ele} -</p>
            )}
          </div>
        </div>
        :
        <h1>Loading.....</h1>}
    </div>
  );
};
