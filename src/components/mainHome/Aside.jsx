import React from "react";
import "../../css/Aside.css";

const Aside = () => (
  <div className="aside me-3 ms-3 mb-4">
    <h3 className="subtituloAside mt-4 mb-4">Programación 3</h3>
    <p className="textoAside mb-3">
      Los lenguajes de programación son herramientas fundamentales en el
      desarrollo de software. Su comprensión y dominio son esenciales para
      cualquier programador.
    </p>
    <ol className="listaAside">
      <li>
        <span className="fw-bold">Lenguajes de bajo nivel:</span> Están más cerca del lenguaje máquina y permiten
        un control detallado del hardware. Son más rápidos y eficientes, pero
        más difíciles de programar.
      </li>
      <li>
        <span className="fw-bold">Lenguajes de alto nivel:</span> Se acercan más al lenguaje humano. Son más
        fáciles de aprender y usar, aunque menos eficientes.
      </li>
      <li>
      <span className="fw-bold">Lenguajes compilados e interpretados:</span> Los compilados se traducen antes
        de ejecutarse; los interpretados lo hacen en tiempo real.
      </li>
      <li>
      <span className="fw-bold">Lenguajes con tipado estático y dinámico:</span> Los estáticos detectan errores
        en compilación, los dinámicos durante la ejecución.
      </li>
    </ol>
  </div>
);

export default Aside;
