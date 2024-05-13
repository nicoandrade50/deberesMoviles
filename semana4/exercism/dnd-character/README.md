

                                          D&D CHARACTER






El componente DnDCharacter utiliza el estado local de React (useState) para almacenar las puntuaciones de habilidad del personaje. Cuando el usuario hace clic en el botón "Generate Ability Scores", se generan nuevas puntuaciones de habilidad utilizando funciones como generateAbilityScore y getModifierFor, que simulan los lanzamientos de dados y calculan los modificadores de habilidad.




Las puntuaciones de habilidad generadas se muestran en la interfaz de usuario junto con los puntos de golpe calculados. Si no se han generado puntuaciones de habilidad, se muestra un botón para permitir al usuario generarlas.




Los cambios realizados en este ejercicio se centran principalmente en la implementación de la generación de puntuaciones de habilidad para un personaje de D&D y su visualización en la interfaz de usuario. 



Se utiliza el gancho useState para manejar el estado local de las puntuaciones de habilidad y se define una serie de funciones para generar las puntuaciones de habilidad de manera aleatoria y calcular los puntos de golpe. Además, se utiliza JSX para definir la estructura y el diseño de la interfaz de usuario, que incluye un título, una lista de puntuaciones de habilidad y un botón para generar nuevas puntuaciones. 


Finalmente, se exporta el componente DnDCharacter para que pueda ser utilizado en otros archivos de la aplicación.