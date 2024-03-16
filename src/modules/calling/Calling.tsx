// Calling.jsx

import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Calling.scss"; // Import SCSS file

export const Calling = () => {
    const [roomId, setRoomID] = useState("");
    const navigate = useNavigate();

    function handleJoin() {
        navigate(`/room/${roomId}`);
    }

    return (
        <Grid className="calling-container">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter room ID"
                    value={roomId}
                    onChange={(e) => setRoomID(e.target.value)}
                />
                <button onClick={handleJoin}>Join</button>
            </div>
        </Grid>
    );
};
