import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealDetail from "./components/MealDetail/MealDetail";
import NotFound from "./components/NotFound/NotFound";
import Restaurant from "./components/Restaurant/Restaurant";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <Restaurant/> } />
        <Route path = '/home' element = { <Restaurant/> } />
        <Route path = '/placeorder/:idMeal' element = { <MealDetail/> } />
        <Route path = '*' element = { <NotFound/> } />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
