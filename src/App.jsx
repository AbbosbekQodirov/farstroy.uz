import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Loader from "./components/loader/Loader";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";

function App() {
  const [lang, setLang] = useState(false);
  const changeLn = () => {
    setLang(true);
  };

  return (
    <div className="App">
      <Loader setLang={setLang} lang={lang} />

      <>
        <Header />
        <Main />
        <Footer />
      </>
    </div>
  );
}

export default App;
