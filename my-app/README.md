# React + TypeScript + Vite


Teoría: Vite es un entorno de desarrollo rápido para aplicaciones web modernas, diseñado para proporcionar una experiencia de desarrollo ágil gracias a su arquitectura basada en ESM (ECMAScript Modules). React es una biblioteca popular para construir interfaces de usuario interactivas y reactivas, basada en el concepto de componentes reutilizables y un modelo de programación declarativo.

Reflexión y Analogía: Considera Vite como el ferrocarril de alta velocidad que permite un viaje rápido y eficiente hacia el destino, mientras que React actúa como el arquitecto que diseña y organiza los edificios de manera modular y reactiva. Esta combinación ofrece un entorno de desarrollo rápido y una arquitectura flexible para construir aplicaciones web modernas.


Referencias:

           The Road to React" de Robin Wieruch

           React: Up & Running" por Stoyan Stefanov


Recursos de react y jsx
es.reactjs.org
beta.reactjs
vitejs
getting-started
tutorial
create-react-app
getting-started-with-react

¿Qué es React?#
React es una biblioteca Javascript para crear interfaces de usuario.
React no es un framework (a diferencia de Angular o Vue, que tienen más opiniones).
React es un proyecto de código abierto creado por Facebook.
Está basado en componentes.

Requisitos#
node js: es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
npm: NPM (Node Package Manager) es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter, a través del cual podemos obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general. fuente


Un módulo no es nada más que una unidad de código organizado en archivos o directorios, la cual puede ser exportada con facilidad para poder reutilizarse en otras partes de la aplicación. fuente
External modules: Son, en esencia, los paquetes de terceros distribuidos a través de npm (aunque pueden provenir de otros repositorios). Estos paquetes se instalan como dependencias y, aunque aportan funcionalidad a la aplicación, no deben incluirse en el repositorio ya que no son parte de la misma.

¿Cuál es tu enfoque preferido para estructurar componentes en React y por qué?
¿Cómo describirías la diferencia entre JSX y HTML en términos de su funcionamiento y ventajas?
¿Cuál es la característica de React que más te ha impresionado o impactado en tu desarrollo como desarrollador?

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
