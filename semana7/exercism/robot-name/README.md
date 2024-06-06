                                           ROBOT NAME



Descripción General
El componente App crea nombres únicos para robots utilizando una combinación de letras y números. La idea es que cada nombre tenga dos letras seguidas de tres dígitos (por ejemplo, "AA123"). El componente permite generar un nuevo nombre único y reiniciar la lista de nombres usados.



Funcionamiento del Componente
Constantes y Variables Globales:

TOTAL_NUMBER_OF_NAMES: Calcula el número total de combinaciones posibles de nombres, que es 26 * 26 * 10 * 10 * 10. Esto corresponde a dos letras (26 posibilidades cada una) y tres dígitos (10 posibilidades cada uno), resultando en un total de 676,000 combinaciones posibles.

usedNames: Un conjunto (Set) para almacenar los índices de nombres ya usados. Esto asegura que cada nombre generado sea único.




Funciones Auxiliares:

getNameByIndex(i: number): Toma un índice y lo convierte en un nombre de robot en formato "AA123". Utiliza el valor ASCII de 'A' y '0' para calcular las letras y dígitos correspondientes a partir del índice.

generateUniqueName(): Genera un nombre único. Primero, verifica si ya se han usado todos los nombres posibles y lanza un error si es así. Luego, genera un índice aleatorio y verifica si ya está en uso, generando un nuevo índice si es necesario. Finalmente, agrega el índice al conjunto usedNames y retorna el nombre generado.
releaseNames(): Libera todos los nombres usados, limpiando el conjunto usedNames.




Componente App:

useState: Define el estado currentName para almacenar el nombre actual del robot.

useEffect: Genera un nombre único cuando el componente se monta por primera vez y lo establece como currentName.

resetName: Genera y establece un nuevo nombre único.

handleReleaseNames: Libera todos los nombres usados y genera un nuevo nombre único.




Interfaz de Usuario:

El componente retorna un div que contiene:

Un título "Robot Name" seguido del nombre actual del robot (currentName).

Un botón "Reset Name" que llama a resetName para generar un nuevo nombre.

Un botón "Release Names" que llama a handleReleaseNames para liberar todos los nombres y generar uno nuevo.
Información Adicional
Uso de useState y useEffect: useState se utiliza para manejar el estado del nombre actual del robot. useEffect se utiliza para generar un nombre único cuando el componente se monta por primera vez.

Inmutabilidad y Set: Utiliza un Set para almacenar los índices de nombres usados, lo que facilita la verificación de unicidad y la gestión del estado de manera eficiente.

Generación Aleatoria con Prevención de Duplicados: Al generar un índice aleatorio, se verifica si el índice ya ha sido usado. Si es así, se busca el siguiente índice disponible, asegurando así que cada nombre sea único.
Cálculo de Nombres con Valores ASCII: Convierte índices numéricos en caracteres utilizando valores ASCII, lo que permite una conversión eficiente y compacta de números a nombres de robots.

Este componente es un ejemplo práctico de cómo manejar generación de nombres únicos y gestión de estado en React, proporcionando una funcionalidad interactiva y dinámica para la interfaz de usuario.