import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import NavBar from "./components/Partials/Navbar"
import SideNav from "./components/Partials/Sidenav"
import Footer from "./components/Partials/Footer"
import Dashboard from "./components/Dashboard"
import TesteIntegracao from "./components/TesteIntregacao"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div id="layoutSidenav">
          <SideNav />
          <div id="layoutSidenav_content">
            <main>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/teste-integracao" component={TesteIntegracao} />
            </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
