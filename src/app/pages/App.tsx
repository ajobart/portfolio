import {Route, Routes} from "react-router-dom";
import Home from "./home/home";
import { ThemeProvider } from "../context/theme/themeContext";
import BlogDetail from "./blog-detail/blog-detail";
import WorkDetail from "./work-detail/work-detail";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Home />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path='/work/:slug' element={<WorkDetail/>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
