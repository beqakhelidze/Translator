export interface LanguageInterface {
    code: string,
    name: string,
}

export interface ContextInterface {
    From: string,
    To: string,
    InputValue: string,
    OutputValue: string,
}

export interface FunctionContextInterface {
    handleSelectChange: (indicator: string, value: string) => void,
    handleExchange: () => void,
    handleTextfieldsChange: (indicator: string, value: string) => void,
}
