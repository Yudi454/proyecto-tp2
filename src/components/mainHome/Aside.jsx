import React from "react"
import "../../css/Aside.css"

const Aside = () => {
  return (
    <div>
        <h3> Programacion 2</h3>
<p className="p1">Los lenguajes de programación son herramientas fundamentales en el desarrollo de software. Su comprensión y dominio son esenciales para cualquier programador.</p>
<p> Lenguajes de bajo nivel: Están más cerca del lenguaje máquina y permiten un control detallado del hardware. Son más rápidos y eficientes, pero más difíciles de programar.
Lenguajes de alto nivel: Se acercan más al lenguaje humano. Son más fáciles de aprender y usar, aunque menos eficientes.
Lenguajes compilados e interpretados: Los compilados se traducen antes de ejecutarse; los interpretados lo hacen en tiempo real.
Lenguajes con tipado estático y dinámico: Los estáticos detectan errores en compilación, los dinámicos durante la ejecución.</p>
    </div>
  )
}

export default Aside
