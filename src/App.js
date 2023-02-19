import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeListPage from "./components/pages/ListPage/EmployeeListPage";
import EmployeeAddEditPage from "./components/pages/AddEditPage/EmployeeAddEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeListPage />}></Route>
        <Route path="/add" element={<EmployeeAddEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
