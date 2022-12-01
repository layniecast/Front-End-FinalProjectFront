// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import FormInfo from "./components/FormInfo";
import Form from "./components/Form";
import Note from "./components/Note";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appItems">
        {/* <Nav /> */}
        <FormInfo />
        <Form />
        <Note />
        <Button type="submit">Submit Here</Button>
        <Footer />
      </div>
    </div>
  );
}

export default App;
