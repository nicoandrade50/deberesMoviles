                                                GRADE SCHOOL

El componente utiliza el hook useState para manejar el estado de los estudiantes. El estado inicial es un objeto vacío que representa los grados y sus correspondientes listas de estudiantes.
Funciones Principales:

roster: Crea y devuelve una copia del estado actual de los estudiantes para evitar modificaciones accidentales del estado original.

addStudent: Agrega un estudiante a un grado específico. Si el estudiante ya está en otro grado, primero lo elimina para evitar duplicados. Luego, actualiza el estado con el nuevo estudiante agregado a la lista del grado correspondiente, ordenando la lista alfabéticamente.

removeStudent: Elimina un estudiante de todos los grados. Actualiza el estado filtrando el nombre del estudiante de cada lista de estudiantes por grado.

getGradeStudents: Devuelve una copia de la lista de estudiantes para un grado específico. Si no hay estudiantes en ese grado, devuelve un array vacío.


Interfaz de Usuario:
El componente muestra el título "Grade School Roster".
Incluye botones para agregar estudiantes específicos a grados específicos (por ejemplo, "Anna" al grado 1, "Bob" al grado 1, "Charlie" al grado 2).


Muestra la lista completa de estudiantes organizada por grado, utilizando la función roster.


Muestra listas específicas de estudiantes para el grado 1 y el grado 2, utilizando la función getGradeStudents.




INFOMACION ADICIONAL:


React y Hooks: Este ejercicio utiliza hooks de React (useState) para manejar el estado del componente de forma funcional y eficiente.


Inmutabilidad: Las funciones que actualizan el estado (addStudent y removeStudent) hacen uso de la inmutabilidad, es decir, en lugar de modificar el estado existente, crean y devuelven nuevas copias del estado con los cambios aplicados.


Ordenación de Estudiantes: La lista de estudiantes en cada grado se ordena alfabéticamente cuando se agrega un nuevo estudiante. Esto se hace utilizando el método sort de JavaScript en arrays.


Prevención de Duplicados: Al agregar un estudiante, la función addStudent primero elimina al estudiante de cualquier lista en la que ya se encuentre para evitar duplicados.


Este componente es un ejemplo práctico de cómo manejar listas dinámicas y organizadas en React, permitiendo la manipulación y visualización de datos en una interfaz de usuario interactiva.


 Es útil para entender conceptos clave como el manejo de estado, la inmutabilidad y la organización de datos en componentes funcionales de React.