import { Nav } from "./Components/NavBar/Nav";
import { GlobalStyled } from "./GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyled />
      <Nav />
      <ToastContainer />
    </>
  );
}

export default App;
