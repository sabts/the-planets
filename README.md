The Planets Fact Site

<p>
    <img src="https://raw.githubusercontent.com/sabts/the-planets/refs/heads/main/design/portada-home.png" alt="Imagen del proyecto">
</p>

## Vista en vivo

<ul>
    <li>
        <a target="_blank" href="">Vista en vivo</a>
    </li>
</ul>

## Descripción 📑

En esta práctica, programé con React Router un sitio sobre el sistema solar y sus planetas.

Cada uno de los 9 planetas cuenta con su propia página, en la que es posible alternar entre tres pestañas: "Overview", "Internal Structure", and "Surface Geology".

## ¿Qué he aprendido en este proyecto? 🙇🏻

Uno de los principales objetivos de este proyecto era aprender a manejar la navegación entre rutas. En el camino, no solo entendí mejor cómo funcionan, sino que también descubrí formas de crear objetos más claros y estructurados, lo que me ayudó a organizar y comprender mejor mi propio código.

Un ejemplo de esto es la nueva estructura de las constantes tabs y planetsInfo, que aprovechan su índice para evitar tres renderizados condicionales y reducirlo a solo dos.

Otro de los retos que enfrenté fue el manejo del tamaño de las imágenes en diseño responsive. No quería complicar el objeto con tres versiones distintas por tamaño, así que investigué cómo adaptar su escala directamente desde CSS, logrando un resultado más limpio y flexible.

Este reto incluyó muchos cambios dinámicos a nivel de estilos —como cambios de color, contenido que aparece o se oculta, entre otros—, lo que me permitió profundizar en la lógica del renderizado condicional.

Uno de esos elementos fue el menú de navegación, que debía adaptarse a distintos tamaños de pantalla. Para lograrlo, utilicé la librería react-responsive, lo que me permitió crear una experiencia más fluida tanto en dispositivos móviles como en escritorio.

## Tecnologías 🛠

<!-- Iconos sacados de: https://github.com/alexandresanlim/Badges4-README.md-Profile?tab=readme-ov-file#-languages- -->

<p>
    <a href="https://es.wikipedia.org/wiki/React">
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React logo">
    </a>
</p>

## Capturas del proyecto

<p>
   <img src="https://raw.githubusercontent.com/sabts/the-planets/refs/heads/main/design/portada-home.png" alt="Captura del proyecto">
   <img src="https://raw.githubusercontent.com/sabts/the-planets/refs/heads/main/design/planeta.png" alt="Captura del proyecto">

</p>

## Autor ✒️

Sabrina Taraschi

<ul>
    <li>
        <a href="sabrinataraschi@gmail.com">sabrinataraschi@gmail.com</a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/sabrina-taraschi/">LinkedIn</a>
    </li>
    <li>
        <a href="https://tu-dominio.com/">Porfolio web</a>
    </li>
</ul>

## Link del reto

<a href="https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f">Página de frontendmentor</a>

## Instalación

Este proyecto está construido con Vite.

- Para editarlo ejecuta el comando <b>npm run dev</b>
- Para construir la versión de producción ejecuta el comando <b>npm run build</b>
- Para previsualizar la versión final ejecuta el comando <b>npm run preview</b>
