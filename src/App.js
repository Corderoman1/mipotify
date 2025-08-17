import { Route, Routes, useParams } from "react-router-dom";
import Header from "./Components/Header";
import SearchResults from "./Components/SearchResults";
import Details from "./Components/Details/Index";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";
import GlobalStyles from "./Theme/GlobalStyles";


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        <Header/>
        <Routes>
          <Route path="/Details/:id" element={<Details/>}></Route>
          <Route path="/" element={<SearchResults/>}></Route>
        </Routes>
      </ThemeProvider>
      
    </div>
  );
}

export default App;