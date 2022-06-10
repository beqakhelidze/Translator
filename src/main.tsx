import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContextProvider from "./Context";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none',
        }
    },
    palette:{
        primary:{
            main:"#00b0ff",
        },
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <ContextProvider>
            <App />
        </ContextProvider>
    </ThemeProvider>
)
