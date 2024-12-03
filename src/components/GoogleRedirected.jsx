import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";

function GoogleRedirected() {
    const navigate = useNavigate();
    const { login } = useAppContext();

    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");

    console.log(code);

    // fetch with code to backend

    fetch(`${import.meta.env.VITE_API_URL}/api/oauth2/google/${code}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            login(data.access_token, data.refresh_token);
            navigate("/");
        })
        .catch((err) => {
            navigate(`/error/${err.message}`);
        });
    

    //get code from params
    

    return (
        <div> Loading </div>
    );
}

export default GoogleRedirected;