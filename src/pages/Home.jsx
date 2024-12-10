import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import axios from "axios";
import { instance } from "../config/axios-instance.js";
import SearchBar from "../components/SearchBar.jsx";

function Home() {
  const navigate = useNavigate();
  const { logout, isAuthenticated, userData } = useContext(AppContext);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogoutClick = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    instance
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/logout`,
        JSON.stringify({ refreshToken: refreshToken }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          logout();
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Logout failed");
        navigate("/home");
      });
  };

  const search = (query) => {
    navigate(`/search?query=${query}`);
  };

  return (
    <>
      <SearchBar search={search}/>
    </>
    
  );
}

export default Home;
