import {Card} from "./components/Card";
import {GlobalStyle} from "./components/globalStyles.styled";
import {myTheme} from "./myTheme.styled";
import {ThemeProvider} from 'styled-components';

function App() {
    return (
        <>
            <ThemeProvider theme={myTheme}>
                <GlobalStyle/>
                <Card/>
            </ThemeProvider>
        </>
    )
}

export default App
