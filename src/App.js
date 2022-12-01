import Header from "./components/Header";
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
        <FormInfo />
        <Form />
        <Note />
        <Button type="submit">Submit Here!</Button>
        <Footer />
      </div>
    </div>
  );
}

export default App;
