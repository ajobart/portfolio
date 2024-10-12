import {Route, Routes} from "react-router-dom";
import Home from "./home/home";
import { ThemeProvider } from "../context/theme/themeContext";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
