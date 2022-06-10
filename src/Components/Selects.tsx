import React, { useState, useEffect } from "react";
import SelectComponent from "./SelectComponent";
import axios from "axios";
import { FaExchangeAlt } from 'react-icons/fa';
import IconButtonComponent from "./IconButtonComponent";
import { useContextHelper} from "../Context";
import { LanguageInterface } from "../Interfaces";
import {
    Box,
} from '@mui/material';


const Selects:React.FC = React.memo(() => {
    const [Languages, setLanguages] = useState<LanguageInterface[] | null>(null);

    const Values = useContextHelper();

    const fetchLanguages = async () => {
        try {
            const { data } = await axios.get("https://libretranslate.com/languages");
            setLanguages(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLanguages();
    }, [])

    return (
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <SelectComponent
                options={Languages}
                value={Values.From}
                label={"From"}
            />
            <IconButtonComponent >
                <FaExchangeAlt />
            </IconButtonComponent>

            <SelectComponent
                options={Languages}
                value={Values.To}
                label={"To"}
            />
        </Box>

    )
});

export default Selects;