import React from "react";
import Logo from "../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo ms" width="150px" />

      <ul>
        <li>Acerca de Valve</li>
        <li>Streamworks</li>
        <li>Empleo</li>
        <li>Distribución de Steam</li>
        <li>Tarjetas regalo</li>
        <li>Steam</li>
        <li>@steam</li>
      </ul>
    </footer>
  );
}
