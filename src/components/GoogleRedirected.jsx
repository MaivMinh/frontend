import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";

function GoogleRedirected() {
    const navigate = useNavigate();
    const { login } = useAppContext();

    const code = `${import.meta.env.VITE_NONCE}`;


    // fetch with code to backend

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/oauth2/google?code=${code}`, {
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
            navigate(`/unauthorize`);
        });
    

    //get code from params
    

    return (
        <div> Loading </div>
    );
}

export default GoogleRedirected;