import { CssBaseline, ThemeProvider } from "@material-ui/core";
import "./styles/style.css";
import React from "react";
import Layout from "./components/Layout";
import Header from "./pages/Header";

import { theme } from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import Contactme from "./pages/Contact_me";
import AboutMe from "./pages/About_me";

import Features from "./pages/Features";

const App = () => {
  return (
    <Router>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Header />
            <Features />
          </Layout>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
// eslint-disable-next-line
let routes = [
  { route: "/contact-info", component: Contactme, exact: false },
  { route: "/features", component: Features, exact: true },

  { route: "/about-me", component: AboutMe, exact: false },
  { route: "/", component: Header, exact: true },
];
