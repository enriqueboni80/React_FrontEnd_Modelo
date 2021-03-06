import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/Partials/Navbar"
import SideNav from "./components/Partials/Sidenav"
import Footer from "./components/Partials/Footer"
import Dashboard from "./components/Dashboard"
import TesteIntegracao from "./components/TesteIntregacao"
import Eventos from "./components/Eventos"
import Login from "./components/Login"
import Register from "./components/Register"
import RecoveryPassword from "./components/RecoveryPassword"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <>
            <NavBar />
            <div id="layoutSidenav">
              <SideNav />
              <div id="layoutSidenav_content">
                <main>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/eventos" component={Eventos} />
                  <Route exact path="/teste-integracao" component={TesteIntegracao} />
                </main>
                <Footer />
              </div>
            </div>
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
}
