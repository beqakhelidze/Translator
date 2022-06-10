import React from "react";
import TextFieldComponent from "./TextFieldComponent";
import {
    Box
} from "@mui/material";



const Inputs: React.FC = () => {

    return (
        <Box sx={{ display: "flex", justifyContent: "space-around", gap: "15px", }}>
            <TextFieldComponent
                Value={"InputValue"}
                label={"Input"}
            />

            <TextFieldComponent
                Value={"OutputValue"}
                label={"Output"}
            />
        </Box>
    )
}

export default Inputs;