                      Calculadora de Puntaje de Dardos



Resumen
La Calculadora de Puntaje de Dardos es una aplicación React que permite a los usuarios calcular el puntaje de un lanzamiento de dardos basado en las coordenadas (x, y) del punto donde el dardo aterrizó en un tablero. La aplicación proporciona una interfaz sencilla para ingresar las coordenadas y ver el puntaje correspondiente.



Cambios y Funcionalidades Principales
Estado Local: Uso del hook useState para manejar las coordenadas ingresadas por el usuario (x y y) y el puntaje calculado (result).



Manejo de Entrada del Usuario: Implementación de una función handleInputChange que actualiza los estados de x y y basándose en los valores ingresados en los campos de texto.



Función de Cálculo del Puntaje: Definición de la función calculateScore (en el archivo score.ts) que calcula el puntaje en función de las coordenadas proporcionadas, considerando la distancia desde el origen (0, 0).


Interfaz de Usuario: La interfaz incluye:

Un título.
Dos campos de entrada numéricos para las coordenadas X y Y.
Un botón para calcular el puntaje.
Un área para mostrar el puntaje calculado basado en las coordenadas ingresadas.
Renderizado Condicional: El resultado del puntaje se muestra en un párrafo solo cuando el usuario hace clic en el botón "Calcular Puntaje".


Manejo de Eventos: Uso de eventos onChange para actualizar las coordenadas ingresadas por el usuario y un evento onClick para calcular y mostrar el puntaje.


Exportación del Componente: El componente App se exporta como la exportación predeterminada del módulo para su uso en otros archivos de la aplicación.



Conclusión
La Calculadora de Puntaje de Dardos es una herramienta interactiva que permite a los usuarios calcular y visualizar el puntaje de un lanzamiento de dardos basado en las coordenadas (x, y) proporcionadas. Utiliza React para la construcción de la interfaz y para manejar el estado de la aplicación, proporcionando una experiencia de usuario fluida y responsiva.