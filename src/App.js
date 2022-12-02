import Header from "./components/Header";
import FormInfo from "./components/FormInfo";
import Form from "./components/Form";
import Note from "./components/Note";
import SubmitButton from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appItems">
        <FormInfo />
        <Form />
        <Note />
        <SubmitButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;
