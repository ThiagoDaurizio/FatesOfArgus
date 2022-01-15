import Router from "./Router/router";
import { GlobalState } from "./Global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
