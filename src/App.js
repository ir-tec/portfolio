import { CssBaseline, ThemeProvider } from "@material-ui/core";
import "./styles/style.css";
import React from "react";
import Layout from "./components/Layout";
import Header from "./pages/Header";

import { theme } from "./styles/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import Contactme from "./pages/Contact_me";
import AboutMe from "./pages/About_me";
import { CSSTransition } from "react-transition-group";
import { router_style } from "./styles/router-style";
const App = () => {
  const style = router_style();
  return (
    <Router>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            {routes.map((item, i) => {
              return (
                <Route key={i} exact={item.exact} path={item.route}>
                  {({ match }) => {
                    return (
                      <CSSTransition
                        in={match !== null}
                        timeout={500}
                        classNames={{
                          enter: style.route_inter,
                          enterActive: style.route_inter_active,
                          exit: style.route_exit,
                          exitActive: style.route_exit_active,
                        }}
                        unmountOnExit
                      >
                        {/* <div className={style.contain}> */}
                        <item.component />
                        {/* </div> */}
                      </CSSTransition>
                    );
                  }}
                </Route>
              );
            })}
          </Layout>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;

let routes = [
  { route: "/contact-info", component: Contactme, exact: false },

  { route: "/about-me", component: AboutMe, exact: false },
  { route: "/", component: Header, exact: true },
];
