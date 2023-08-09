import Header from "./components/Header";
import Main from "./components/Main";
import { MarginDisplay } from "./components/UI";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <>
    <MarginDisplay>
      <Header />
      <Main />
    </MarginDisplay>
    <Footer />
    <ScrollToTopButton />
    </>
  );
};

export default App;