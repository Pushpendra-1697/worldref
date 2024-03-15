import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../Redux/AuthReducer/action";

export const Navbar = () => {
  const { isAuth } = useSelector(store => store.authManager);
  const dispatch = useDispatch();

  return (
    <DIV>
      <h2>Recipe App</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      {isAuth && <button onClick={() => dispatch(logout())} style={{ color: 'white', background: 'black', padding: '3px 5px', borderRadius: '3px', cursor: 'pointer' }}>LOGOUT</button>}
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  box-shadow: 2px 2px 2px gray;
`;
