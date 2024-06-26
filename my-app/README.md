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

¿Cuál es la forma correcta de definir un componente funcional en React utilizando JSX?
a class MyComponent extends React.Component {...}
b function MyComponent() {...}
c const MyComponent = () => {...} 
d const MyComponent extends React.Component {...}
ANSWER C


¿Qué hace JSX en React?
a Define estilos para los componentes.
b Crea componentes de React.
cPermite escribir JavaScript dentro de HTML.
dControla el flujo de datos dentro de la aplicación.

ANSWER C

¿Cuál es la principal diferencia entre un componente funcional y un componente de clase en React?
a Los componentes de clase no pueden contener métodos.
bLos componentes funcionales no pueden aceptar props.
c Los componentes funcionales no tienen estado (state).
d Los componentes de clase se definen usando una sintaxis más corta. 

ANSWER C


Requisitos#
node js: es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
npm: NPM (Node Package Manager) es un gestor de paquetes desarrollado en su totalidad bajo el lenguaje JavaScript por Isaac Schlueter, a través del cual podemos obtener cualquier librería con tan solo una sencilla línea de código, lo cual nos permitirá agregar dependencias de forma simple, distribuir paquetes y administrar eficazmente tanto los módulos como el proyecto a desarrollar en general. fuente


Un módulo no es nada más que una unidad de código organizado en archivos o directorios, la cual puede ser exportada con facilidad para poder reutilizarse en otras partes de la aplicación. fuente
External modules: Son, en esencia, los paquetes de terceros distribuidos a través de npm (aunque pueden provenir de otros repositorios). Estos paquetes se instalan como dependencias y, aunque aportan funcionalidad a la aplicación, no deben incluirse en el repositorio ya que no son parte de la misma.

semana 2 teoria 

Teoría: Fundamentación conceptual que modela la dinámica de diseño, implementación y gestión de sistemas de software basados en componentes, abarcando paradigmas, principios y modelos de ciclo de vida.

Reflexión: Capacidad intrínseca de un sistema para autoevaluarse y ajustar su estructura y comportamiento dinámicamente, adaptándose a cambios contextuales o requisitos del entorno.

Analogía: Estrategia cognitiva que emplea metáforas o paralelismos con sistemas conocidos para ilustrar de manera accesible y contextualizada los conceptos abstractos inherentes al diseño y funcionamiento de componentes de software.

Resumen: Síntesis integral que condensa los principios, técnicas y directrices esenciales relacionadas con la ingeniería de software orientada a componentes, extraídas de la literatura especializada sobre arquitectura de software y sistemas distribuidos.

semana 2 preguntas

¿Qué significa "reflexión" en el contexto de la comunicación de componentes en software?

A La capacidad de un sistema para adaptarse a cambios.
B El intercambio de mensajes entre componentes.
C La representación visual de la estructura del sistema.
ANSWER A.


¿Qué método de ciclo de vida se utiliza principalmente para realizar solicitudes de red o inicializar el estado de un componente en React?
a componentDidMount
b componentWillUnmount
c componentDidUpdate
d componentWillReceiveProps

ANSWER A

¿Cuál de los siguientes métodos se utiliza para pasar datos de un componente padre a un componente hijo en React?
a setState
bprops
c getDerivedStateFromProps
d render

ANSWER B


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
