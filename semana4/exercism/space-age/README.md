

                                          SPACE AGE



Resumen
El ejercicio consiste en una aplicación de calculadora de edad que permite a los usuarios calcular su edad en años terrestres y en años de otros planetas del sistema solar. Utiliza los factores de conversión de tiempo relativos a la Tierra para calcular la edad en otros planetas.



Cambios y Funcionalidades Principales
Interfaz Planets: Se define una interfaz que mapea los nombres de los planetas a sus factores de conversión de tiempo en relación con la Tierra.



Constante RATIOS: Se crea una constante que almacena los factores de conversión de tiempo para cada planeta en el sistema solar.



Componente AgeCalculator: Se define un componente funcional llamado AgeCalculator que representa la aplicación de calculadora de edad. Utiliza el estado local de React (useState) para almacenar el planeta seleccionado y el número de segundos ingresados por el usuario.



Función calculateAge: Se define una función que calcula la edad del usuario en el planeta seleccionado y muestra el resultado en un cuadro de alerta. Utiliza el factor de conversión de tiempo del planeta para realizar el cálculo.



Interfaz de Usuario: La interfaz de usuario incluye un título, un menú desplegable para seleccionar el planeta, un campo de entrada para ingresar el número de segundos y un botón para calcular la edad.



Renderizado Condicional: El resultado del cálculo de la edad se muestra en un cuadro de alerta solo cuando se hace clic en el botón "Calculate Age".



Manejo de Eventos: Se utilizan eventos de cambio (onChange) para actualizar el estado del planeta y los segundos ingresados por el usuario.



Exportación del Componente: El componente AgeCalculator se exporta como la exportación predeterminada del módulo para su uso en otros archivos de la aplicación.



Conclusion
 Esta aplicación de calculadora de edad permite a los usuarios obtener su edad en años terrestres y en años de otros planetas del sistema solar. Utiliza los factores de conversión de tiempo definidos para cada planeta para realizar los cálculos. 