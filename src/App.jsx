import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./lib/Router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
