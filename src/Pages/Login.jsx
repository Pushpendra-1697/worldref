import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const { isAuth, isLoading, isError } = useSelector((store) => store.authManager);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (isAuth) {
      if (state?.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate('/');
      }
    }
  }, [isAuth, navigate]);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value
    });
  };
  const handleSubmit = () => {
    dispatch(login(loginCreds));
  };
  if (isError) {
    return (<h1>Somthing went wrong!! pls Refresh😒</h1>);
  };
  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" name="email" onChange={hanldeChange} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        name="password"
        onChange={hanldeChange}
      />
      <button onClick={handleSubmit} data-testid="user-login">{isLoading ? 'Loading...' : 'Log In'}</button>
      * NOTE:: LOGIN with Reqres Credentials
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
