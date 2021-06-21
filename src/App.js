import Pages from "./pages";
import { Provider } from "react-redux";
import "./App.scss";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
