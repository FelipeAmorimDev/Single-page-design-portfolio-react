import "./App.module.scss";

import BookCall from "./Components/BookCall/BookCall";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import SectionConsultation from "./Components/SectionConsultation/SectionConsultation";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionConsultation />
        <Portfolio />
        <BookCall />
      </main>
      <Footer />
    </>
  );
}

export default App;
