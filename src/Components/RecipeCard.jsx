import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ id, image, name, category, type, price }) => {
  const navigate = useNavigate();
  return (
    <div className={"recipe-card"} style={{ border: '1px solid beige', padding: '10px 20px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
      <img style={{ width: '100%' }} src={image} alt={name} className="recipe-image" />
      <h3 className="recipe-name">{name}</h3>
      <h2 className="recipe-type" style={{ color: type === 'veg' ? 'green' : 'red' }}>Type: {type}</h2>
      <p className="recipe-category">Category: {category}</p>
      <h3 className="recipe-price">{price}</h3>
      <button onClick={() => navigate(`/recipe/${id}`)} style={{ padding: '10px', border: 'none', backgroundColor: 'beige' }} className="recipe-detail">View Ingredients</button>
    </div>
  );
};