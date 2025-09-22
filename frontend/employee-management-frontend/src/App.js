//import logo from "./logo.svg";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListOfEmployeesComponent from "./components/ListOfEmployeesComponent";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderComponent></HeaderComponent>
      <div className="container">
        <ListOfEmployeesComponent />
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
