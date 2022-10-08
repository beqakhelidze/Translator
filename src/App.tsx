import axios from 'axios';
import ButtonComponent from './Components/ButtonComponent';
import Selects from './Components/Selects';
import Inputs from './Components/Inputs';
import { useContextHelper } from './Context';
import { useFunctionContextHelper } from './Context';
import {
  Container,
  Typography
} from '@mui/material';



const App: React.FC = () => {

  const handleOutputChange = useFunctionContextHelper()?.handleTextfieldsChange;

  const Values = useContextHelper();

  const handleTranslate = async () => {

    try {
      const { data } = await axios.post("https://libretranslate.de/translate",
        {
          q: Values.InputValue,
          source: Values.From,
          target: Values.To,
          format: "text",
          api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      if (handleOutputChange) {
        handleOutputChange("output", data.translatedText);
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="App">
      <Container maxWidth="md" style={{ display: "grid", minHeight: "100vh" }}>
        <Selects />
        <Inputs />
        <ButtonComponent handleClick={handleTranslate}>
          <Typography
            color="common.white"
          >
            Translate
          </Typography>
        </ButtonComponent>

      </Container>
    </div>
  )
}

export default App;