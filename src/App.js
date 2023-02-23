import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import EmployeeListPage from "./components/pages/ListPage/EmployeeListPage";
import EmployeeAddEditPage from "./components/pages/AddEditPage/EmployeeAddEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<EmployeeListPage />} />
        <Route path="/add" element={<EmployeeAddEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
