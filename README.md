# Desafío para Software Engineers

Nombre postulante: Andrés Espinoza Delgado.          
[Link a la app en producción](https://country-search-app-andres-espinoza.netlify.app/)


## Pregunta optimización BDD MySQL

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."
      
Respuesta: Si bien no he tenido la oportunidad de trabajar en mejorar la performance de una base de datos, a través de la investigación encontré posibles soluciones para abordar el desafío:

- Optimización de las queries:
    * Si las columnas fueron configuradas con un valor por defecto, entonces es apropiado realizar solo la inserción de los datos que sean distintos a los valores configurados previamente. Esto aligera la carga de trabajo que realiza MySQL en el parseo de los datos.
    * Realizar un INSERT con múltiples valores en lugar de hacerlo valor por valor. Para este caso se podría hacer la inserción de la asistencia de todos los estudiantes de un curso a la vez, en lugar de uno por uno.
    * Si los datos se cargan a la tabla a través de un archivo CSV ó TSV, utilizar el statement LOAD DATA  INFILE en lugar de INSERT puede mejorar considerablemente la performance de la acción, de acuerdo a la documentación que provee MySQL.
