                           Pangram Checker



Resumen
El Pangram Checker es una aplicación desarrollada con TypeScript, React y Vite que permite a los usuarios verificar si una oración ingresada es un pangrama. Un pangrama es una frase que contiene cada letra del alfabeto al menos una vez. La aplicación ofrece una interfaz sencilla para ingresar una oración y verificar si cumple con la condición de pangrama.


Cambios y Funcionalidades Principales
Estado Local: Uso del hook useState de React para manejar la oración ingresada por el usuario (input) y el resultado de la verificación (isPangramResult).


Manejo de Entrada del Usuario: Implementación de una función handleInputChange que actualiza el estado de input basándose en el valor ingresado en el campo de texto.


Función de Verificación de Pangrama: Definición de la función isPangram (en el archivo isPangram.ts) que verifica si la oración ingresada es un pangrama. La función convierte la oración a minúsculas, elimina los caracteres no alfabéticos y verifica si contiene todas las letras del alfabeto.



Interfaz de Usuario: La interfaz incluye:

Un título.
Un campo de entrada de texto para que el usuario ingrese la oración.
Un botón para verificar si la oración es un pangrama.
Un área para mostrar el resultado de la verificación.
Renderizado Condicional: El resultado de la verificación se muestra en un párrafo solo cuando el usuario hace clic en el botón "Verificar".


Manejo de Eventos: Uso de eventos onChange para actualizar la oración ingresada por el usuario y un evento onClick para verificar y mostrar el resultado.


Exportación del Componente: El componente App se exporta como la exportación predeterminada del módulo para su uso en otros archivos de la aplicación.



Conclusión
El Pangram Checker es una herramienta interactiva que permite a los usuarios verificar si una oración contiene todas las letras del alfabeto al menos una vez. Utiliza TypeScript para mejorar la seguridad y calidad del código, React para la construcción de la interfaz y Vite para un entorno de desarrollo rápido y eficiente.