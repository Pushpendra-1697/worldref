import { RecipeList } from "../Components/RecipeList";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <DIV>
      <RecipeList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;