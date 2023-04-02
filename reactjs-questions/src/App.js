import CountComponent from "./components/CountComponent";
import { CountContext } from "./components/CountContext";

function App() {
  return (
    <CountContext.Provider value="Hello, world!">
      <CountComponent />
    </CountContext.Provider>
  );
}

export default App;
