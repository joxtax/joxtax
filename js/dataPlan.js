const Planes = [
                                    // EMPIEZA AQUI

  // Seccion 0: Introduccion: primeros pasos

  {
    name: "Guía del programa",
    id: "guiaprogram",
    videos: [
      {
        name: "Como usar el programa",
        url: "https://www.youtube.com/embed/sw_qH2IymP4",
        description: "Este vídeo tutorial, explica el paso a paso de <strong class='azonix'>0 to <span class='deep-orange-text'>basic</span></strong>, como navegar, como entender cada apartado y como sacarle el mejor provecho a este nuevo camino",
      },

    ],
  },
  // Fin de la seccion 0


  // Seccion 1: Conceptos basicos
  {
    name: "Conocimientos básicos",
    id: "Documentacion",
    article: true,
    articles: [
      {
        name: "Contracciones Musculares",
        description:
          "<p class='sangria text-justify'>Para poder comprender el funcionamiento del programa <strong class='azonix'>0 to <span class='deep-orange-text'>basic</span></strong> es necesario describir las diferentes contracciones musculares que forman parte fundamental de cada ejercicio planteado. <p> <br><strong class='azonix'>Contracción <span class='deep-orange-text'>excéntrica</span></strong>: Sucede cuando la longitud del músculo aumenta mientras se desarrolla la tensión. (Parte descendente) <br/> <img src='./img/excentrica.JPG' alt='logo' style='width: 50%; background-position: center;'> <br/>  <b>Ejemplo:</b> El descenso de una dominada. Esta fase controla la velocidad, sirviendo como mecanismo de freno. <br/>  <br/>    <strong class='azonix'>Contracción <span class='deep-orange-text'>concéntrica</span></strong>: Sucede cuando la longitud del músculo disminuye mientras se desarrolla la tensión. (Parte ascendente)    <br/> <img src='./img/concentrica.JPG' alt='logo' style='width: 50%; background-position: center;'>   <br/> <b>Ejemplo:</b> El movimiento de una posición colgante a la parte superior de una dominada es una contracción concéntrica.   <br/>      <br/>  <strong class='azonix'>Contracción <span class='deep-orange-text'>Isométrica</span></strong>: sucede cuando no se producen cambios en la longitud del músculo durante el desarrollo de la tensión muscular. Son pausas sin movimientos resultantes.      <br/> <img src='./img/isometrica.JPG' alt='logo' style='width: 50%; background-position: center;'>  <br/>  <b>Ejemplo:</b> Mantener a 90º la flexión de codo en una dominada. ",
      },
      {
        name: "Modificaciones en los ejercicios",
        description:
          "Con el entrenamiento de resistencia convencional, la sobrecarga se produce aumentando progresivamente la cantidad de peso utilizado al realizar un ejercicio. Con los ejercicios de peso corporal se emplea un enfoque diferente que tiene el mismo propósito. Se quieren ajusten en la posición del cuerpo para producir un estímulo más exigente a medida que mejora la fuerza. Este programa explicará como ajustar los ejercicios para adaptarse a los diferentes niveles de fuerza para cada ejercicio del entrenamiento.<br> <br>  <p> Continuar realizando altas repeticiones de ejercicios básicos de peso corporal será menos óptimo si el objetivo es la hipertrofia, ya que la intensidad se vuelva cada vez más inadecuada. Un ejercicio también se puede dificultar alterando el rango de movimiento. Los principiantes a menudo emplean un rango de movimiento abreviado para compensar su falta de fuerza. Esto es lo contrario de lo que debería hacerse. Cada ejercicio debe realizarse de una manera desafiante. Alargar un músculo a su estado completo y realizar ejercicios a través de un rango completo de movimiento es esencial. La tensión muscular que se puede generar a partir de un músculo alargado es mucho menor, lo que significa que el músculo se coloca en una posición desventajosa a propósito para aumentar la intensidad y la estimulación. Un rango completo de movimiento combinado con un cambio de posición del cuerpo es la clave para aumentar la dificultad con los ejercicios de peso corporal. </p> ",
      },
            {
              name: "Tiempo bajo tensión",
        description:
          "Este es un factor que coincide con la sobrecarga progresiva. Un aumento del tiempo bajo tensión es beneficioso en programas de entrenamiento destinado a aumentar la masa muscular. En <strong class='azonix'>0 to <span class='deep-orange-text'>basic</span></strong> se emplea el tempo para explicar el tiempo bajo tensión. <br> <br> <span class='deep-orange-text'> <strong>    Tempo:   </strong>    </span> Se refiere a la velocidad a la que se realiza un ejercicio. Usar un tempo rápido sin control es un error común que se comete. Desafortunadamente, muchas veces se enfatiza hacer más a expensas de la calidad. Debe mantenerse un equilibrio entre mantener una forma de ejercicio constante a un ritmo determinado y al mismo tiempo apuntando a sobrecargar progresivamente. A continuación, se muestra un ejemplo del formato de tempo y cómo interpretarlo:  <br> <br>   <strong class='azonix deep-orange-text'>  30x0   </strong> <br> <br>           -	El primer número representa la fase excéntrica del ejercicio <strong class='azonix deep-orange-text'>  (3)   </strong>     <br> <br>                    -	El segundo número representa la pausa isométrica después de la excéntrica, cuando el musculo se ha estirado <strong class='azonix deep-orange-text'>  (0)   </strong>   <br> <br>               -	El tercer número representa la fase concéntrica <strong class='azonix deep-orange-text'>  (x)   </strong>     <br> <br>        -	El cuarto número representa la pausa isométrica después de la concéntrica, cuando le músculo está en su estado acortado <strong class='azonix deep-orange-text'>  (0)   </strong>         <br> <br>  <b class='deep-orange-text'> Interpretación </b> de los números de tempo y su aplicación:  <br> <br>      	-	Cada dígito representa un número en segundos     <br> <br>      	-	<strong class='azonix deep-orange-text'>  x   </strong> significa lo más rápido posible           <br> <br>      	-	<strong class='azonix deep-orange-text'>  0  </strong> significa que no hay pausa         ",
          image: true,
          imgUrl: './img/joxtaxcity.png'
      },
      {
        name: "Sobre carga progresiva",
        description:
          "Este es el principio más importante con respecto a la actividad física y debe seguirse para obtener resultados. Es cuando la tensión aplicada al cuerpo aumenta gradualmente con el tiempo. Sin una sobrecarga progresiva, no se fortalecerá ni desarrollará músculos. Este concepto es válido independientemente de la forma de entrenamiento de resistencia que utilice. La mayoría de las personas hacen los mismos ejercicios con la misma intensidad, para series y repeticiones similares de forma indefinida. Estas personas permanecen habitualmente en su zona de confort y su físico no cambia. Por otro lado, es común ver personas que cambian constantemente sus ejercicios y programas de entrenamiento en un intento de “cargar el cuerpo”. Se requiere un estímulo más exigente a través de un programa de entrenamiento cada vez más desafiante. Se debe hacer un esfuerzo consciente para intentar mejorar en una de las siguientes áreas de una sesión a otra.",
      },



      
    ],
  },
  // Fin de conceptos basicos
  {
    name: "Como aplicar la sobrecarga progresiva",
    id: "progresiva",
    article: true,
    articles: [
      {
        name: "Escoger uno o más metodos",
        description: "Escoga un método como mínimo y parta de allí. Cada sesión debe ser desafiante, por lo que aquí se explica cómo alterar gradualmente la dificultad sesión tras sesión: <br> <br> <strong> <b class='deep-orange-text'> 1) </b>Incrementando sets <br> <br> <b class='deep-orange-text'>2) </b>Incrementando reps <br> <br> <b class='deep-orange-text'> 3) </b> incrementando rango de movimiento <br> <br> <b class='deep-orange-text'> 4) </b> Alterando inclinación o progresión del ejericicio  <br> <br>  <b class='deep-orange-text'> 5) </b> Incrementando el tiempo bajo tensión   <br> <br>   <b class='deep-orange-text'> 6) </b> Agregando peso    <br> <br>   <b class='deep-orange-text'> 5) </b> Disminuyendo tiempo de descanso    <br> <br> <b class='deep-orange-text'> 7) </b> Permanecer en tensión </strong>    <br> <br> <p>  <strong class='azonix'>Incrementando <span class='deep-orange-text'>Series</span></strong>: Al aumentar la cantidad de series, permite completar un mayor volumen de trabajo general, lo que significa más repeticiones totales. La desventaja de completar solo una o dos series hasta el fallo es que, aunque la intensidad relativa será alta, la cantidad total de trabajo completado será menor. Esta es la razón por la que resulta ventajoso distribuir la carga de trabajo en varias series, entrenando cerca del fallo, pero no hasta él.   </p>      <br> <br>   <strong class='azonix deep-orange-text'>ejemplo:</strong>          <br> <br>  <strong class='azonix deep-orange-text'>Semana 1:</strong> 3 series 12 repeticiones     <br> <br>   <strong class='azonix deep-orange-text'>Semana 2:</strong> 3 series 14 repeticiones     <br> <br>   <strong class='azonix deep-orange-text'>Semana 3:</strong> 4 series 12 repeticiones   <br> <br>   <strong class='azonix deep-orange-text'>Semana 4:</strong> 4 series 13 repeticiones        <br> <br>  <p>     <strong class='azonix'>Incrementando<span class='deep-orange-text'> Repeticiones</span></strong>: El método más básico para aplicar una sobrecarga progresiva a los ejercicios de peso corporal es aumentar las repeticiones mientras se mantiene la intensidad y variación del ejercicio. </p>  <br> <br>   <strong class='azonix deep-orange-text'>ejemplo:</strong>         <br> <br>  <strong class='azonix deep-orange-text'>Semana 1:</strong> 3 series 10 repeticiones     <br> <br>   <strong class='azonix deep-orange-text'>Semana 2:</strong> 3 series 11 repeticiones     <br> <br>   <strong class='azonix deep-orange-text'>Semana 3:</strong> 3 series 13 repeticiones   <br> <br>   <strong class='azonix deep-orange-text'>Semana 4:</strong> 3 series 14 repeticiones          <br> <br>              <p> Se ha aplicado una mayor cantidad de estrés al ejercicio. El resultado será una mayor fuerza en el patrón de movimiento y crecimiento muscular de los grupos de músculos objetivo.           </p>                                                                          <br> <br>   <p>      <strong class='azonix'>Incrementando<span class='deep-orange-text'> Rango de movimiento:</span></strong> Con cualquier ejercicio dinámico, es importante utilizar el mayor rango de movimiento posible de forma segura. Cuando se hace correctamente, los grupos de músculos objetivo serán reclutados a su máximo potencial y la dificultad se vuelve exponencialmente más difícil. Para entender prácticamente lo que esto significa, cada músculo tiene una longitud en la que puede producir la mayor cantidad de fuerza y esto tiende a estar en el rango medio de movimiento. Cuando se busca hacer un ejercicio más difícil mediante un mayor rango de movimiento, los grupos músculos específicos se colocarán bajo un mayor estiramiento, lo que disminuye la cantidad de fuerza que puede crear. La manera de crear un mayor rango de movimiento es en base a trabajar nuestra flexibilidad y movilidad, así ganar mayor reclutamiento de fibras musculares que se usarán para más recorrido.  </p>    <br> <br> <p> Ahora queda claro por qué se usa un rango de movimiento corto cuando las personas hacen trampa para hacer más repeticiones y facilitar el ejercicio. Con los otros conceptos de sobrecarga progresiva en mente, una vez que un ejercicio se vuelve manejable en un rango de movimiento dado, una estrategia para aumentar la intensidad es aumentar el rango de movimiento empleado. Incrementar el rango de movimiento como estrategia de intensificación es posible en algunos, pero no en todos los ejercicios. </p>  <br> <br> <p> Si no puede aumentar más el rango de movimiento, elija otro método, como aumentar las repeticiones, disminuir descansos, disminuir el tempo, etc.   </p>  <br> <br>  <p>     <strong class='azonix'>Alterando<span class='deep-orange-text'> Inclinación o progresión:</span></strong> Una vez dominado cierto ejercicio con comodidad y buena técnica, sería buen momento de pasar a la siguiente progresión de ese ejercicio, así incrementando la intensidad de este. Tenga en cuenta dominar muy bien el ejercicio antes de incrementar su dificultad, asegúrese de utilizar la técnica correcta en todas y cada una de las repeticiones, si no logra mantener la técnica en el rango de repeticiones demandados, tómese un tiempo con el ejercicio para ganar las fuerzas necesarias para pasar al siguiente. </p>     <br> <br> <p>      <strong class='azonix'>Tiempo<span class='deep-orange-text'> bajo tensión:</span></strong> Como ya se explicó, es una forma elegante de indicar que los músculos objetivos se contraen durante más tiempo en la serie. Cuando se busca aumentar el tiempo bajo tensión se pueden emplear dos estrategias: aumentar la duración de la excéntrica (también conocido como negativa) o agregar retenciones isométricas.</p>  <br> <br> <p> La incorporación de tiempos extendidos en fase excéntricas o isométricas puede producir un efecto similar al de una serie de altas repeticiones.</p>   <br> <br>  <strong class='azonix deep-orange-text'>ejemplo:</strong>   <br> <br>   La fase excéntrica de una sentadilla.  <br> <br>   <strong class='azonix deep-orange-text'>A)</strong> 10 reps con 2 segundos de excéntrica        <br> <br> <strong class='azonix deep-orange-text'>B)</strong> 10 reps con 3 segundos de excéntrica   <br> <br> <p>  Cuando se mira únicamente la parte de descenso del ejercicio, la situación A equivale a 20 segundos en comparación con la situación B con 30 segundos. </p>  <br> <br> <p> Al comenzar un programa de entrenamiento, se necesitará un ritmo más rápido durante el ejercicio para alcanzar el rango de series y repeticiones dados. Sin embargo, una vez que un tempo rápido finalmente se vuelve tolerable y fácil, emplear excéntricas de mayor duración es un gran método de intensificación. </p> <br> <br> <p> Otra opción para la intensificación es el uso de sujeciones isométricas que es cuando se mantiene el ángulo de la articulación sin ningún movimiento mientras los músculos se contraen, pero el cuerpo permanece inmóvil. Si el ejercicio es demasiado fácil para las series y repeticiones descritas, agregar pausas isométricas en cada repetición aumenta el desafío. No existe una regla absoluta sobre qué posición incluir un isométrico durante un ejercicio, pero aquí unos <strong class='azonix deep-orange-text'>ejemplos:</strong></p> <br> <br> <strong> <b class='deep-orange-text'>- </b>	En la parte de máxima contracción de un Puente de glúteo sostener por 1-3 segundos la posición. </strong>    <br> <br> <strong> <b class='deep-orange-text'>- </b>En la parte más baja de una flexión sostener 1-3 segundos la posición. </strong>  <br> <br> <p>                           <strong class='azonix'>Agregando <span class='deep-orange-text'>peso:</span></strong> El programa está diseñado para ser realizado utilizando solo su peso corporal con el más mínimo equipo. Puede progresar en el programa durante muchas semanas en la mayoría de los ejercicios sin necesidad de agregar peso. Definitivamente, usar pesas tiene un momento y un lugar, especialmente para los más avanzados. Si las circunstancias lo permiten y con el tiempo se ha vuelto competente aplicando la sobrecarga progresiva. Utilice las instalaciones del gimnasio a su disposición para obtener mayor efecto. Piense en el peso añadido como una herramienta para desafiar el rango de series y repeticiones deseado.                                 <br> <br> <p>                           <strong class='azonix'>Reduciendo periodos <span class='deep-orange-text'>de descanso:</strong> Se ha proporcionado un rango de período de descanso en los entrenamientos para permitir la recuperación adecuada entre series, lo cual es esencial para un buen rendimiento en series posteriores. Por lo general, con un mayor entrenamiento de repeticiones, se recomienda un período de descanso más corto para maximizar el estrés metabólico, que es uno de los principales impulsores ambientales detrás de la construcción de músculo. Para aumentar la dificultad de un ejercicio, complete la misma cantidad de trabajo o más en un período de tiempo más corto.</span></strong>  <br> <br>   <strong class='azonix deep-orange-text'>ejemplo:</strong><strong class='azonix text-white'> Sentadilla</strong> <br> <br>  <strong class='azonix deep-orange-text'>Semana 1:</strong> 3 series 15 repeticiones 1:30min de descanso    <br> <br>   <strong class='azonix deep-orange-text'>Semana 2:</strong> 3 series 15 repeticiones 1:00min de descanso     <br> <br>   <strong class='azonix deep-orange-text'>Semana 3:</strong> 3 series 20 repeticiones 1:30min de descanso  <br> <br>   <strong class='azonix deep-orange-text'>Semana 4:</strong> 3 series 20 repeticiones 1:00min de descanso       <br> <br> <p>                           <strong class='azonix'>Permanecer <span class='deep-orange-text'>en tension: </strong>         Permanecer en tensión es un principio de entrenamiento intra-ejercicio en el que los grupos de músculos que trabajan se contraen constantemente. Esto significa hacer una serie completa consecutivamente sin descansar temporalmente entre repeticiones. No descanse pasivamente en la parte superior o inferior de un ejercicio. Un ejemplo de este error sería hacer una serie de zancadas y tomar de 5 a 10 segundos entre repeticiones a medida que la serie de acerca a su finalización. En su lugar, mantenga una ligera flexión en la articulación para que los grupos de músculos que trabajan no descansen. <br> <br>  A continuación, se explica la aplicación correcta de la tensión constante.  <br> <br> <p>  <strong class='azonix deep-orange-text'>Zancada </strong><strong class='azonix text-white'>Bulgara: </strong> Mantenga la rodilla ligeramente doblada en la parte superior del movimiento. La transición continua de una repetición a la siguiente; no descanse en la parte superior del movimiento entre repeticiones. La forma subconsciente de descansar dentro del ejercicio es recuperar el aliento durante varios segundos en el bloqueo en la posición erguida. El objetivo es completar las repeticiones de forma continua mientras se mantiene la tensión para maximizar los resultados.  </p> <br> <br> <p>  Sea consciente de la ejecución del ejercicio en todo momento, especialmente en series de repeticiones más altas. El error común es tomar un descanso prolongado durante la serie, lo que disminuye la intensidad relativa.  Acepta la incomodidad en series de repeticiones más altas y haz tu mejor esfuerzo para realizar toda la serie de forma continua. </p> ",
      },
      {
        name: "ACUMULACIÓN",
        description: "El entrenamiento de acumulación es una forma divertida de aumentar progresivamente la intensidad del entrenamiento en una determinada limitación de tiempo. El concepto es lograr la mayor cantidad de repeticiones de movimiento con el tempo específico de un ejercicio dentro de un período de tiempo determinado. Es fundamental intentar superar el número total de repeticiones (o segundos) anterior a la última sesión para seguir ganando fuerza y construir músculo. Controle su ritmo, quemar en las primeras series no es una buena idea. En general detenerse ~ 2-3 repeticiones antes de fallar (o varios segundos con respecto a las sujeciones cronometradas) permitirá suficiente energía para completar las series posteriores. Recuerde, el volumen general es más importante que una o dos series de repeticiones altas. La primera semana de un protocolo de acumulación sirve para establecer una línea de base para la cual el objetivo es superar la semana siguiente.  <br> <br>   <strong class='azonix deep-orange-text'>Ejemplo:</strong>      <br> <br>  <strong class='azonix deep-orange-text'>Semana 1:</strong> Depresión escap. colgado: 4sets de 30s = 2mins total    <br> <br>   <strong class='azonix deep-orange-text'>Semana 2:</strong>   Depresión escap. colgado: 4sets de 35s = 2.3mins total     <br> <br>   <strong class='azonix deep-orange-text'>Semana 3:</strong> Depresión escap. colgado: 5sets de 30s = 2.5mins total  <br> <br>   <strong class='azonix deep-orange-text'>Semana 4:</strong> Depresión escap. colgado: 6 sets de 30s = 3mins total                                    <br> <hr> <br>   <strong class='azonix deep-orange-text'>Semana 1:</strong>  Flexiones en pica: 25 total reps    <br> <br>   <strong class='azonix deep-orange-text'>Semana 2:</strong>   Flexiones en pica: 28 total reps      <br> <br>   <strong class='azonix deep-orange-text'>Semana 3:</strong> Flexiones en pica: 28 total reps   <br> <br>   <strong class='azonix deep-orange-text'>Semana 4:</strong> Flexiones en pica: 33 total reps                               ",
      },
      {
        name: "Abajo!",
        description: "Los <strong class='azonix deep-orange-text'>Abajo</strong><strong class='azonix text-white'>!</strong> series es un método de pausa de descanso destinado a acumular un gran volumen de trabajo en un corto período de tiempo. Descanse mínimamente entre cada serie dentro de la serie cuando trabaje hasta 1 repetición.            <br> <br>   <strong class='azonix deep-orange-text'>6</strong><strong class='azonix text-white'>!</strong>  = 6+5+4+3+2+1 = 21 reps  <br> <br>   <strong class='azonix deep-orange-text'>7</strong><strong class='azonix text-white'>!</strong>  = 7+6+5+4+3+2+1 = 28 reps     <br> <br>   <strong class='azonix deep-orange-text'>8</strong><strong class='azonix text-white'>!</strong>  = 8+7+6+5+4+3+2+1 = 36 reps    <br> <br>   <strong class='azonix deep-orange-text'>9</strong><strong class='azonix text-white'>!</strong>  = 9+8+76+5+4+3+2+1 = 45 reps               <br> <br>   <strong class='azonix deep-orange-text'>10</strong><strong class='azonix text-white'>!</strong>  = 10+9+8+7+6+5+4+3+2+1 = 55 reps  ",
      },
    ],
  },

  // RECUPERACIÓN: NUMERO 3 <<<<<<<<<<<<<<<<< //
  {
    name: "Recuperación",
    id: "recovery",
    article: true,
    articles: [
      {
        description: "El sistema <strong class='azonix'>0 to <span class='deep-orange-text'>basic</span></strong> se divide en 4 niveles. Siga cada nivel durante un mínimo de 4 semanas, seguida de una descarga de 1 semana antes de pasar al siguiente nivel.",
      },
      {
        description: "Está bien hacer un nivel determinado durante un ciclo (4 semanas de entrenamiento +1 semana de descarga) y luego probar al siguiente nivel (otro ciclo). Sin embargo, si se siente muy fresco o capaz de probar otra semana antes de la descarga, puede agregar una quinta semana de entrenamiento y una sesta de descargue. Tome en cuenta todos los puntos para decidir entre repetir el nivel o avanzar al siguiente.             <br> <br>   <p>  Deje que transcurra el tiempo necesario para que progrese y maximice los resultados. No tiene sentido pasar al siguiente nivel si el nivel actual está dando avances o sigue siendo un desafío excesivo. <strong class='azonix'>0 to <span class='deep-orange-text'>basic</span></strong> se ha anunciado como un programa de formación de 20 semanas, pero en realidad se puede ampliar en función de la respuesta a la formación. Elija el formato apropiado para adaptarse a las circunstancias personales. </p>  ",
      },
      {
        name: "¿Qué es una descarga? por qué y como descargar",
        description: "Una descarga es un período de recuperación planificado que generalmente dura una semana. Si entrena a una intensidad progresivamente más alta durante un ciclo de entrenamiento de 4 semanas, se espera que la fatiga se acumule. <br> <br> <p> <strong class='azonix'>Por que <span class='deep-orange-text'>descargar:</span></strong> <br> <br> <strong> <b class='deep-orange-text'> 1) </b>Permita que el SNC (sistema nervioso central) se recupere, lo que facilitará el progreso futuro del entrenamiento. <br> <br> <b class='deep-orange-text'>2) </b>Progresión continua y ganancias de fuerza = aumento de la masa muscular magra. <br> <br> <b class='deep-orange-text'> 3) </b> Descanso mental de empujar constantemente los límites lo que evita el agotamiento y refuerza la adherencia. <br> <br><strong class='deep-orange-text'> Señales de que una descarga es apropiada:</strong> <br> <br>  <b class='deep-orange-text'> 1) </b> No sentirse tan poderoso con los movimientos  <br> <br>  <b class='deep-orange-text'> 2)</b> Ponerse más débil: lograr constantemente números menores de los que antes eran capaces (series, repeticiones, intensidad)   <br> <br>   <b class='deep-orange-text'> 3)</b> Se siente constantemente fatigado a pesar de dormir lo suficiente.   <br> <br>   <b class='deep-orange-text'> 4)</b> Dolor en las articulaciones   <br> <br> <b class='deep-orange-text'> 5) </b> Cambios de humor </strong>  <br> <br>  <strong> <b class='deep-orange-text'> 6) </b> Falta genuina de ganas de entrenar a pesar de ser normalmente apasionado </strong> ",
      },

      {
        description:"Es imposible operar al 100% cada sesión durante los 365 días del año. Si al final de las 4 semanas de entrenamiento se siente “fresco”, puede repetir más semanas de entrenamiento y tomar una descarga independientemente <strong> <b class='deep-orange-text'>(Máximo 7 semanas de entrenamiento + 1 o 2 de descargue)</b></strong>; Si extiende demasiado la semana de descarga o simplemente se la salta no se sorprenda cuando se produzca una falta de progreso. Un error común al no progresar es la noción de que uno no está entrenando con la suficiente intensidad. Es difícil en el momento actual darse cuenta de que la falta de progreso puede deberse a una recuperación insuficiente de la acumulación de estrés de entrenamiento previo. ¡Aplicar una descarga es Esencial! Una semana de descarga puede ser todo lo que se necesita para facilitar la recuperación, la supercompensación y la capacidad de seguir obteniendo ganancias. Hay varias formas de descargar, sin embargo, se recomienda el siguiente enfoque por simplicidad, consistencia y mantenimiento de la fuerza al continuar practicando el patrón motor de cada ejercicio. <br> <br> <strong> <b class='deep-orange-text'> - </b> Mantenga el mismo ejercicio.  <br> <br> <strong> <b class='deep-orange-text'> - </b> Aumente la intensidad en ~ 5%. Disminuya el volumen en un 50% <br> <hr>",
      
      
      
      },
      {
        description: "Lo que esto significa es que las repeticiones de entrenamiento serán similares a las de la semana anterior, varias repeticiones antes del fallo, lo que permitirá mantener la fuerza durante la semana de recuperación planificada. Sin embargo, se realizarán menos series en comparación con el entrenamiento regular. Si se completaron previamente 4 series de un ejercicio, haga 2 series. Usando 3 series de un ejercicio, haz un máximo de 1-2 series. Se mencionó anteriormente la opción de aumentar la intensidad en ~ 5% durante una descarga. Ajuste ligeramente la postura del cuerpo o la progresión del ejercicio para lograr esto. Como se ha reducido el número de series, permite a quienes lo consideren apropiado la oportunidad de aumentar la intensidad en un incremento manejable. Existe una relación inversa entre intensidad y volumen. Esto significa que, con un aumento en una variable, la otra debe disminuir para adaptarse a esto. Hacer este ajuste permite al cuerpo aclimatarse a una intensidad más alta antes de que el número de series se incremente nuevamente en la semana siguiente a una descarga. Durante una semana de descarga, es una buena oportunidad para revisar los videos de ejercicios de los niveles y modificar la técnica."
      
      
      
      },

    ],
  },

  // Plan 2: 0 to action   Número 4 y 5
  {
    name: "How to",
    id: "howto",
    videos: [
      {
        name: "cómo moverte",
        url: "https://www.youtube.com/embed/fZDjvuudo4w",
        description: "En este vídeo te explicaré movimientos importantes del cuerpo a la hora de hacer cualquier ejercicio o estímulo. En base a ellos se desarrollará buena técnica y conciencia en los movimientos",
      },
    ],
  },
  
  {
    name: "Calentamiento y Estiramiento",
    id: "warmup",
    article: true,
    articles: [
      {
        description:"En la serie de videos y tablas se incluyen algunos ejercicios preparatorios que vale la pena hacer antes y después de cada sesión de entrenamiento. Es una buena estructura para seguir. Siéntase libre de hacer su propio calentamiento y estiramiento si así lo desea con sus ejercicios favoritos, siempre y cuando cumpla con los puntos y la estructura explicada.        ",
      },

      {
        name: "Calentamiendo",
        description:
          "Con el fin de preparar el cuerpo de manera segura para las próximas demandas de entrenamiento, es fundamental realizar un calentamiento completo que aborde todas las articulaciones principales que se utilizarán. Al elegir movimientos que abordan múltiples músculos a la vez, puede reducir el número total de ejercicios de movilidad necesarios para poner en marcha el cuerpo, ahorrando un tiempo precioso. Cuando se hace concienzudamente, el proceso no debe llevar más de 10 a 15 minutos. Esto debería ser suficiente para producir un aumento moderado en el rango de movimiento y el flujo sanguíneo. Además, use este tiempo para prepararse mentalmente para las próximas sesiones de entrenamiento. <hr> <p>Se recomienda realizar los estiramientos dinámicamente, en lugar de realizar estiramientos sostenidos, antes del entrenamiento. Se ha demostrado constantemente que los estiramientos estáticos prolongados disminuyen la producción de potencia en el músculo que trabaja. En términos prácticos, esto se traduce en una reducción en el número de repeticiones que se pueden realizar por serie. </p>  <hr> <iframe class='embed-responsive embed-responsive-16by9 mt-5' width='879' height='494' src='https://www.youtube.com/embed/pIn37roXXSI' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
          image: true,
          imgUrl: './img/calentamiento.JPG'
        },

        {
         
          description:"",
        },

        {
          name: "Estiramiento",
          description:
            "Cuando hacemos ejercicio, los músculos se contraen, que significa que se acortan y, después, se vuelven a estirar. Este movimiento de acortarse y estirarse provoca que se fatigue, por eso es importante estirar después del ejercicio. Liberar tensión, relajar los músculos una vez finalizada la sesión para ayudar al cuerpo a volver a la calma. Esto se consigue con estiramientos pasivos. <br> <hr> (Resaltaré que decidí poner todo en español así que no juzguen mi intento de encontrar los nombres xd) <hr>   <iframe class='embed-responsive embed-responsive-16by9 mt-5' width='879' height='494' src=' https://www.youtube.com/embed/FPsqVnDXi_4' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>             ",
            image: true,
            imgUrl: './img/estiramiento.JPG'
          },





      ],
    },

  // Plan 3: Action to condiction
  {
    name: "Nivel 0",
    id: "level0",
    article: true,
    articles: [
      {
        description: "Este primer nivel se centra en la preparación de los principales movimientos multiarticulares, siguiendo un método de entrenamiento distribuido en cargas iguales para todo el cuerpo o mejor conocido como “Full Body” (cuerpo completo) por cada sesión de entrenamiento. Lo que significa para un comienzo una intensidad moderada con volúmenes moderados para garantizar que pueda ser completada la rutina, permitir al cuerpo aprender, descansar lo suficiente, trabajar la técnica correcta y crear el hábito exitosamente. Escoge la progresión adecuada para ti y parte desde allí para aplicar los principios de la sobre carga progresiva. Cada sesión debe ser más desafiante que la anterior para darle un buen estímulo a los músculos, tome en cuenta todo lo explicado en el apartado “Conocimientos básicos” “Cómo aplicar la sobrecarga progresiva” y aplíquelos.     <hr> <strong class='azonix deep-orange-text'>Control del progreso: <a href='./Registro-progresivo-Nivel-0.xlsx'> Planilla excel</a></strong>                ",
      },

      {
        name: "Calendario",
        description: "Esta primera tabla enseña el programa semanal del nivel 0, como bien se explicó, repetir por mínimo 4 semanas la planificación para optar pasar a la descarga o seguir otra(s) semana(s) ",
        image: true,
        imgUrl: './img/nivel0.JPG'

      },

      {
        description: "<strong class='azonix deep-orange-text'>Semana Descargue:</strong>",
        image: true,
        imgUrl: './img/nivel0d.JPG'

      },
      {
        description: "Se recomienda distribuir los días de entreno con un día de descanso en medio, un buen ejemplo sería (lunes-miércoles-viernes), (martes-jueves-sábado) o (lunes-miércoles-sábado) para distribuir mejor la frecuencia. Adapte el mejor estilo para usted y sea conciente de elegir la intensidad adecuada para comenzar un nivel. Sea honesto y abandone el ego, ya que hacerlo permitirá mejoras continuas mensurables. Elija una progresión / Intensidad que permita lograr las series /repeticiones / tempos mínimos prescritos en el programa mientras se desafía. Si el movimiento es demasiado fácil o difícil, realice los cambios necesarios en la postura e intensidad. La elección de la intensidad adecuada es esencial para la forma de rango de movimiento completo y poder seguir el programa según lo previsto. ",
      },

      {
        name: "Ejercicios del nivel 0",
        description: "<span class='centertext'>La guía de vídeos de los ejercicios está divida en torso, pierna y accesorios. Para entender términos de movimientos, vaya a how to, move.</span>             ",

      },
      {
        name: "Pierna",
        description: "<iframe class='embed-responsive embed-responsive-16by9 mt-5' width='879' height='494' src='https://www.youtube.com/embed/WCFXkP-VyH4' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      },

      {
        name: "Torso",
        description: "<iframe class='embed-responsive embed-responsive-16by9 mt-5' width='879' height='494' src='https://www.youtube.com/embed/gXrn52ew87c' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      },

      {
        name: "Accesorio",
        description: "<iframe class='embed-responsive embed-responsive-16by9 mt-5' width='879' height='494' src='https://www.youtube.com/embed/lv9J6ILQMIQ' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      },

    

    ],
  },


  // Nivel ACTION
  {
    name: "Nivel Action",
    id: "action",
    article: true,
    articles: [
      {
        name: "Subiendo..",
        description: "En realización de video",
        image: true,
        imgUrl: './img/construccion.jpg',
      },
    
    ],
  },
/// Fin Action

/// Nivel Condition
  {
    name: "Nivel Condition",
    id: "action",
    article: true,
    articles: [
      {
        name: "Subiendo..",
        description: "En realización de video",
        image: true,
        imgUrl: './img/construccion.jpg',
      },
    
    ],
  },

  //// FIN Condition

  /// Nivel Basic

  {
    name: "Nivel Basic",
    id: "action",
    article: true,
    articles: [
      {
        name: "Subiendo..",
        description: "En realización de video",
        image: true,
        imgUrl: './img/construccion.jpg',
      },
    
    ],
  },

  /// Fin Basic

  /// BONUS
  {
    name: "Nivel 0",
    id: "0",
    article: true,
    articles: [
      {
        name: "Bonus",
        description: "Bienvenido a la sección bonus. Aquí encontrarás rutinas para aplicar un descanso activo, lo que significa que, en los días que no haya entrenamiento, 5 minutos como mínimo podrás dedicarte a rutinas cortas complementarías. De igual manera estan agrupadas por niveles. Comenzando en nivel 0 ejercicios de movilidad, flexibilidad y reforzamiento de articulaciones.",

      },
    
      {
        name:"Rutina A",
        description:"<iframe class='embed-responsive embed-responsive-16by9 mt-5' width='879' height='494' src='https://www.youtube.com/embed/4W8Yrhsfuis' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe> <hr>",
        image: true,
        imgUrl: './img/bonusa.JPG', 
      },

      {
        name:"Rutina B",
        description:"<iframe class='embed-responsive embed-responsive-16by9 mt-5' width='879' height='494' src='https://www.youtube.com/embed/GlBnaSHvxu0' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe> <hr>",
        image: true,
        imgUrl: './img/bonusb.JPG', 
      },

      {
        description: "Se ha otorgado un rango de series y segundos por ejercicios. Elija uno por donde arrancar para adaptarse y aprender. Parta de allí para aumentar series, segundos o hasta implementar su propia rutina con sus movimientos favoritos."
      }

    ],
  },
//// FIN BONUS 0

/// BONUS ACTION
{
  name: "Bonus Action",
  article: true,
  articles: [
    {
      name: "Subiendo..",
      description: "En realización de video",
      image: true,
      imgUrl: './img/construccion.jpg',
    },
  ],
},
///Fin bonus action

/// BONUS CONDITION
{
  name: "Bonus Condition",
  article: true,
  articles: [
    {
      name: "Subiendo..",
      description: "En realización de video",
      image: true,
      imgUrl: './img/construccion.jpg',
    },
  ],
},
//// FIN BONUS CONDITION

//// BONUS Basic

{
  name: "Bonus Basic",
  article: true,
  articles: [
    {
      name: "Subiendo..",
      description: "En realización de video",
      image: true,
      imgUrl: './img/construccion.jpg',
    },
  ],
},

];

