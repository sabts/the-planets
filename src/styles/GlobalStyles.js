import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

nav ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #070724;
}

body::after {
  content: "";
  background-image: url(/assets/background-stars.svg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  animation: starTwinkle 3s ease-in-out infinite;
}

@keyframes starTwinkle {
  0%, 100% {
    opacity: 1;  
  }
  50% {
    opacity: 0.5;
  }
}`