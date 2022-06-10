import React, { useState, createContext, useContext } from "react";
import { ContextInterface, FunctionContextInterface } from "./Interfaces";

interface Props {
    children: JSX.Element
}

export const useContextHelper = () => {
    return useContext(Context);
}

export const useFunctionContextHelper = () => {
    return useContext(FunctionsContext);
}


const Context = createContext<ContextInterface>(
    {
        From: "en",
        To: "de",
        InputValue: "",
        OutputValue: ""
    }
);
const FunctionsContext = createContext<FunctionContextInterface | null>(null);

const ContextProvider: React.FC<Props> = ({ children }) => {

    const [FromLanguage, setFromLanguage] = useState<string>("en");
    const [ToLanguage, setToLanguage] = useState<string>("de");
    const [InputValue, setInputValue] = useState<string>("");
    const [OutputValue, setOutputValue] = useState<string>("");

    const handleSelectChange = (indicator: string, value: string) => {
        indicator == "From" ? setFromLanguage(value) : setToLanguage(value);
    };

    const handleExchange = () => {
        const Swapper = FromLanguage;
        setFromLanguage(ToLanguage);
        setToLanguage(Swapper);
    }

    const handleTextfieldsChange = (indicator: string, value: string) => {
        indicator == 'input' ? setInputValue(value) : setOutputValue(value);
    }

    return (
        <Context.Provider value={{
            From: FromLanguage, To: ToLanguage,
            InputValue: InputValue, OutputValue: OutputValue
        }} >
            <FunctionsContext.Provider value={{ handleSelectChange, handleExchange, handleTextfieldsChange }}>
                {children}
            </FunctionsContext.Provider>
        </Context.Provider >
    );

}

export default ContextProvider;