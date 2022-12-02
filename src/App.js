import Header from "./components/Header";
import LogoutButton from "./components/LogoutButton";
import FormInfo from "./components/FormInfo";
import Form from "./components/Form";
import Note from "./components/Note";
import SubmitButton from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="logoutButton">
        <LogoutButton />
      </div>
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
