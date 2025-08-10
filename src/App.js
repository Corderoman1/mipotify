import { Route, Routes, useParams } from "react-router-dom";
import Header from "./Components/Header";
import SearchResults from "./Components/SearchResults";
import Details from "./Components/Details/Index";



function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/Details/:id" element={<Details/>}></Route>
        <Route path="/" element={<SearchResults/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;