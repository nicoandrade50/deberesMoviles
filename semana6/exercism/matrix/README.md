                                              MATRIX




Descripción del Ejercicio
Dado una cadena con saltos de línea embebidos que representa una matriz, tu tarea es:

Leer cada fila de la matriz de izquierda a derecha, moviéndote de arriba hacia abajo.
Leer cada columna de la matriz de arriba hacia abajo, moviéndote de izquierda a derecha.
Ejemplo Dado
Supongamos que se te da la siguiente cadena:

Copiar código
9 8 7
5 3 2
6 6 7
Esta cadena representa la siguiente matriz:

lua
Copiar código
    1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2
3 | 6  6  7
Resultados Esperados
Para esta matriz, tu código debe producir:

Filas:
Copiar código
9 8 7
5 3 2
6 6 7
Columnas:
Copiar código
9 5 6
8 3 6
7 2 7
Fuente del Ejercicio
Este ejercicio fue creado por el equipo de JumpstartLab para los estudiantes de la Turing School of Software and Design.

Ejemplo Detallado
Filas: Las filas se leen de izquierda a derecha y de arriba hacia abajo:

Primera fila: 9, 8, 7
Segunda fila: 5, 3, 2
Tercera fila: 6, 6, 7
Columnas: Las columnas se leen de arriba hacia abajo y de izquierda a derecha:

Primera columna: 9, 5, 6
Segunda columna: 8, 3, 6
Tercera columna: 7, 2, 7


Aplicación en React
Puedes integrar esta lógica en una aplicación de React como se describe en los archivos app.tsx y matrix.ts que vimos anteriormente. El componente de React manejará la entrada del usuario y mostrará las filas y columnas calculadas en tiempo real.

Esta tarea es excelente para practicar el manejo de cadenas, el procesamiento de matrices y la integración de lógica de negocios en una interfaz de usuario interactiva.