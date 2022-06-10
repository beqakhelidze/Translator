import React from "react";
import { useFunctionContextHelper } from "../Context";
import {
    Box,
    IconButton
} from "@mui/material";

interface Props {
    children: JSX.Element
}

const IconButtonComponent: React.FC<Props> = ({ children }) => {

    const handleClick = useFunctionContextHelper()?.handleExchange;

    return (
        <Box textAlign="center">
            <IconButton color="primary" component="span" onClick={handleClick}>
                {children}
            </IconButton>
        </Box>
    )
}

export default IconButtonComponent;