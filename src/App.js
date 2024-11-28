import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./molecules/Main/Main";
import Header from "./components/Header/Header";
import CarouselContainer from "./molecules/CarouselContainer/CarouselContainer";

function App() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <Main />
      <Footer />
    </>
  );
}

export default App;
