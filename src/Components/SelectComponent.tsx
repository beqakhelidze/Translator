import React from "react";
import { LanguageInterface } from "../Interfaces";
import { useFunctionContextHelper } from "../Context";
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
} from "@mui/material";

interface Props {
    options: LanguageInterface[] | null,
    value: string,
    label: string
}

const SelectComponent: React.FC<Props> = ({ options, value, label }) => {

    if (!options) {
        return null;
    }

    const handleContextChange = useFunctionContextHelper()?.handleSelectChange;

    const handleChange = (event: SelectChangeEvent) => {
        if (handleContextChange) {
            handleContextChange(label, event.target.value);
        }
    }

    return (
        <FormControl margin="normal" >
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={handleChange}
            >
                {options && options.map((option) => (
                    <MenuItem value={option.code} key={option.code}>{option.name}</MenuItem>
                ))}
            </Select>
        </FormControl>)
}

export default SelectComponent;