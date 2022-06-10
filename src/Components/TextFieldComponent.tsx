import React from "react";
import { useFunctionContextHelper } from "../Context";
import { useContextHelper } from "../Context";
import {
    TextField,
} from "@mui/material";

interface Props {
    Value: string,
    label: string,
}

const TextFieldComponent: React.FC<Props> = ({ Value, label }) => {

    const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (label == "Input" && handleChange) {
            handleChange("input", event.target.value);
        }
    }

    const handleChange = useFunctionContextHelper()?.handleTextfieldsChange;

    const Context = useContextHelper();
    const ContextValue = Context[Value as keyof typeof Context];

    return (
        <>
            <TextField
                fullWidth
                id="outlined-multiline-static"
                label={label}
                multiline
                rows={7}
                value={ContextValue}
                margin='normal'
                onChange={InputChange}
                inputProps={{ maxLength: 180 }}
                InputProps={{
                    endAdornment: label == "Input" ? <span style={{
                        position: "absolute",
                        right: "15px",
                        bottom: "10px"
                    }}>{ContextValue.length}/180</span> : null,
                    readOnly: label == "Output",
                }}
            />

        </>
    )
}

export default TextFieldComponent;