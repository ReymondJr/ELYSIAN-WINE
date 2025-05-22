import React from "react";
import ValueCard from "../ValueCard/valueCard";
import vino1 from "../../img/1.webp"
import vino2 from "../../img/2.jpg"
import vino3 from "../../img/3.jpeg"
import imagen1 from "../../img/image1.jpg"
import imagen2 from "../../img/image2.jpg"
import imagen3 from "../../img/imagen3.jpg"
import imagen4 from "../../img/iamgen4.jpg"
import "./values.css";

function Values() {
    const valuesData = [
      {
        title: "¿Qué tipo es?",
        subtitle: "Concepto de vino",
        description: "Este es un vino artesanal elaborado en pequeñas cantidades con métodos tradicionales, hecho por nosotros los estudiantes del centro educativo Madre Laura. Elaborado con uvas y levadura, pasa por un proceso de fermentación.",
        image: imagen1
      },
      {
        title: "Ingredientes y preparación",
        subtitle: "Proceso",
        description: `Nuestro vino escolar ha sido elaborado con productos naturales y de forma artesanal. Los ingredientes que utilizamos son:
  - Uvas moradas (seleccionadas y exprimidas a mano)
  - Azúcar (para alimentar la fermentación)
  - Levadura (que transforma el azúcar en otros componentes)
  - Agua potable tibia (para activar la levadura y unir los sabores)
  Este vino ha sido creado con fines educativos, cuidando cada paso del proceso para garantizar calidad, limpieza y seguridad.`, 
        image: imagen2
      },
      {
        title: "QUE LO HACE ESPECIAL O UNICO?",
        subtitle: "Esencia",
        description: "Elysian wine es un vino único puesto que es un vino artesanal y en cada copa no solo hay vino; sino que hay un esfuerzo, creatividad, trabajo duro en equipo, paciencia y lo q nos caracteriza es el amor que le ponemos al mismo",
        image: imagen3
      },
      {
        title: "OBJECTIVO DEL PROYECTO",
        subtitle: "Aprendizaje",
        description: "El objetivo de Elysian Wine es desarrollar un proyecto escolar que nos permita aprender sobre el proceso de fermentación y la química inorganica también nos enseña el trabajo en equipo.",
        image: imagen4
      }
    ];

  return (
    <section className="values-section">
      <h2>NUESTRO TRABAJO</h2>
      <div className="values">
        {valuesData.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  );
}

export default Values;