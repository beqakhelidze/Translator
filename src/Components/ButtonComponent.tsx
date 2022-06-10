import React from "react";
import{
    Box,
    Button
} from "@mui/material";

interface Props {
    handleClick:() => void,
    children:JSX.Element
}

const ButtonComponent:React.FC<Props> = ({handleClick,children}) =>{
    return(
        <Box textAlign="center">
          <Button variant="contained" onClick={handleClick}>
              {children}
          </Button>
        </Box>
    )
}

export default ButtonComponent;