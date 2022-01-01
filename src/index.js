import reactDom from "react-dom";
import App from "./App";
import RTL from "./components/Rtl";

reactDom.render(
  <RTL>
    <App />
  </RTL>,
  document.getElementById("root")
);
