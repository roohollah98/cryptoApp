import { Route, Routes } from "react-router-dom";
import DetailPage from "./components/detailPage/DetailPage";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coinDetail/:coinId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
