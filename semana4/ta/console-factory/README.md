                 Fábrica de Consolas de Juegos





     Cambios Realizados:
Integración de Zustand: Se introdujo la biblioteca Zustand para gestionar el estado de la aplicación de manera más eficiente y escalable.
 

Definición del Estado y Acciones: Se definieron las interfaces ConsoleState y ConsoleActions para representar el estado de las consolas y las acciones que pueden realizar sobre ellas. Luego, se combinaron en un tipo ConsoleStore que representa tanto el estado como las acciones disponibles.



Creación del Almacenamiento: Se utilizó la función create de Zustand para crear un almacenamiento que contiene el estado inicial y las acciones definidas.



Utilización del Almacenamiento en Componentes: En el componente ConsoleFactory, se utilizó el gancho useConsoleStore para acceder al estado y las acciones del almacenamiento. Esto permite que el componente interactúe con el estado global de las consolas.



Resumen  :
Este ejercicio presenta una aplicación de "Fábrica de Consolas de Juegos" que utiliza la biblioteca Zustand para gestionar el estado de las consolas producidas, distribuidas y en stock. Se define un estado inicial que incluye el total producido, total distribuido y consolas en stock, junto con acciones para producir, distribuir y reabastecer consolas.





Los cambios realizados en el ejercicio incluyen la integración de Zustand para la gestión del estado, la definición de interfaces para el estado y las acciones, la creación del almacenamiento con Zustand, y la utilización del almacenamiento en los componentes de React para interactuar con el estado global de las consolas.