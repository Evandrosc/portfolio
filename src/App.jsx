import Header from "./components/Header";
import Main from "./components/Main";
import { MarginDisplay } from "./components/UI";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <MarginDisplay>
      <Header />
      <Main />
    </MarginDisplay>
    <Footer />
    </>
  );
};

export default App;