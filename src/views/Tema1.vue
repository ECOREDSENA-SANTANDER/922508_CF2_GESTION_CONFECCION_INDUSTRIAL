<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 1
        h1 Requerimientos de personal

      .row.justify-content-center.align-items-start.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-8.mb-4.mb-lg-0
          .bg-color-1.p-4.mb-3
            p.mb-0 El requerimiento de personal expresa la cantidad y el tipo de recursos humanos necesarios para atender una carga productiva dentro de un periodo determinado. Su cálculo parte de una relación entre demanda de trabajo y tiempo efectivo disponible. En la confección, la demanda se representa con frecuencia mediante minutos estándar, porque el número de prendas por sí solo no refleja la complejidad de la referencia ni la duración de sus operaciones. La disponibilidad, por su parte, no equivale al tiempo nominal del turno: debe considerar descansos, actividades autorizadas, restricciones de horario y condiciones reales de presencia.
          p.mb-0 La planeación debe diferenciar tres decisiones. La primera consiste en determinar cuántos minutos de trabajo requiere el programa de producción; la segunda, en calcular la cantidad de personal necesaria para cumplir con ese requerimiento; y la tercera, en distribuir al personal entre operaciones, líneas, módulos y franjas horarias. La confusión entre estas decisiones puede generar errores, como establecer una dotación total adecuada y asignarla de manera incompatible con la secuencia operacional. Por ello, es fundamental analizar de forma articulada los tiempos de trabajo, la disponibilidad de personal y la distribución de las operaciones para garantizar la coherencia de la planeación.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png')

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Capacidad operativa y necesidades de mano de obra

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La determinación del personal necesario en una planta de confección parte de una relación cuantitativa entre el trabajo que exige un pedido y el tiempo productivo que la planta puede ofrecer. El trabajo exigido se expresa en minutos estándar, es decir, en el tiempo que un operario calificado necesita para ejecutar una operación con un método definido, a un ritmo normal y con los suplementos correspondientes a fatiga y necesidades personales (Kanawaty, 1996). El tiempo ofrecido depende de la jornada, del número de personas disponibles y del rendimiento real con que esas personas convierten su tiempo presente en minutos estándar producidos.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/3.png')
        .col-sm-12.col-lg-7
          p.mb-5 En la industria del vestuario, el minuto estándar de una prenda suele denominarse SAM (#[i Standard Allowed Minute]) y se obtiene sumando los tiempos estándar de todas las operaciones de su secuencia de ensamble (Babu, 2012). Una camisa básica, por ejemplo, integra operaciones de preparación de cuello, puños y bolsillo, ensamble de hombros, montaje de mangas, cierre de costados, dobladillo, ojal, botón y revisión. Cada operación aporta minutos al total y cada minuto requiere una persona, una máquina y un tiempo de jornada para ser ejecutado. Esa cadena de dependencias convierte el SAM en el dato de entrada más importante para planear la mano de obra.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Concepto técnico:] la capacidad operativa de mano de obra es la cantidad de minutos estándar que un grupo de operarios puede producir en un periodo determinado, considerando el tiempo de jornada efectivamente disponible y el nivel de eficiencia alcanzable en las condiciones reales de la planta.

      p.mb-5(data-aos='fade-right') Conviene diferenciar tres niveles de capacidad. La capacidad de diseño corresponde al máximo rendimiento teórico de un sistema en condiciones ideales; la capacidad efectiva es la que se espera alcanzar una vez descontadas las limitaciones propias de la mezcla de productos, los cambios de referencia, el mantenimiento y las exigencias de calidad; la producción real es lo que finalmente se obtiene (Heizer et al., 2020). Planear el personal con la capacidad de diseño conduce a subestimar el número de operarios, porque supone que cada minuto pagado se convierte en un minuto estándar, situación que no ocurre en ninguna planta de confección.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tiempo disponible por operario

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 El tiempo disponible es el tiempo de jornada ordinaria durante el cual el operario permanece en su puesto con posibilidad de producir. Para su cálculo se toma la jornada pactada y se excluyen los periodos de descanso que no forman parte de ella. En Colombia, la jornada ordinaria máxima es de 42 horas semanales desde el 15 de julio de 2026, distribuibles en cinco o seis días (Ley 2101 de 2021, art. 2; Ley 2466 de 2025, art. 11). Si una planta distribuye esas 42 horas en seis días iguales, cada operario aporta 7 horas diarias, equivalentes a 420 minutos. Si, por acuerdo entre empleador y trabajador, las distribuye en cinco días, el aporte es de 8,4 horas, esto es, 504 minutos.
          p.mb-0 El tiempo disponible no es igual al tiempo productivo. Dentro de la jornada ocurren esperas por falta de material, cambios de referencia, ajustes de máquina, reprocesos y desplazamientos que reducen la proporción de minutos convertidos en producción estándar. Esa reducción se refleja en la eficiencia de planeación, un porcentaje que expresa la relación esperada entre los minutos estándar producidos y los minutos de presencia del operario.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Eficiencia de planeación

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La eficiencia utilizada para dimensionar el personal debe provenir del historial de la planta y no de un valor teórico. Un módulo que en los últimos tres meses registró una eficiencia promedio del 72 % en referencias similares ofrece una base más confiable que una meta comercial del 85 %. El rendimiento de una línea varía con la complejidad del estilo, el tamaño del lote y la familiaridad de los operarios con la operación; por efecto de la curva de aprendizaje, la eficiencia de una referencia nueva tiende a ser inferior a la de un producto repetitivo durante las primeras jornadas.

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/6.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 #[b Advertencia técnica:] utilizar una eficiencia superior a la histórica reduce artificialmente el número de operarios calculado. El resultado aparente es una planeación más económica, pero el efecto real es un déficit de capacidad que suele cubrirse con trabajo suplementario, cuyo costo es mayor que el de la jornada ordinaria.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cálculo del requerimiento de operarios

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8.mb-4.mb-lg-0
          p.mb-4 El número de operarios necesarios para cumplir un pedido dentro de un plazo se obtiene relacionando los minutos estándar requeridos con los minutos efectivos que cada operario aporta durante ese plazo.
          .bg-color-3.px-4.py-3.mb-4
            ul.lista-ul--color.mb-0
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 Minutos estándar requeridos = unidades del pedido × SAM de la prenda.
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 Minutos efectivos por operario = minutos disponibles por día × eficiencia de planeación × días hábiles del plazo.
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 Operarios requeridos = minutos estándar requeridos ÷ minutos efectivos por operario.
          p.mb-0 En estas expresiones, las unidades del pedido corresponden a prendas; el SAM se expresa en minutos estándar por prenda; los minutos disponibles por día son los minutos de jornada ordinaria; la eficiencia se escribe como fracción decimal y los días hábiles son los días de trabajo programados entre el inicio de la producción y la fecha de entrega al área siguiente. El resultado indica personas equivalentes de tiempo completo y siempre se redondea hacia arriba, porque una fracción de persona no puede contratarse ni asignarse.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/7.png')

      p.mb-5(data-aos='fade-right') Un ejemplo permite seguir el procedimiento. Una planta recibe un pedido de 6.000 camisas con un SAM de 18 minutos. La jornada se distribuye en cinco días de 504 minutos, la eficiencia histórica para la referencia es del 75 % y el plazo de confección es de 10 días hábiles.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/8.svg')
        .col-sm-12.col-lg-7
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span a
              p.mb-0 Datos disponibles: 6.000 unidades, SAM de 18 minutos, 504 minutos diarios por operario, eficiencia de 0,75 y 10 días hábiles.
            li.d-flex
              .lista-ol--cuadro__vineta
                span b
              p.mb-0 Minutos estándar requeridos: 6.000 × 18 = 108.000 minutos estándar.
            li.d-flex
              .lista-ol--cuadro__vineta
                span c
              p.mb-0 Minutos efectivos por operario: 504 × 0,75 × 10 = 3.780 minutos estándar en el plazo.
            li.d-flex
              .lista-ol--cuadro__vineta
                span d
              p.mb-0 Operarios requeridos: 108.000 ÷ 3.780 = 28,57 operarios.
            li.d-flex
              .lista-ol--cuadro__vineta
                span e
              p.mb-0 Resultado: se requieren 29 operarios de tiempo completo.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La interpretación del resultado exige cuidado. Los 29 operarios corresponden al personal que debe estar presente en el módulo o en la línea durante todo el plazo. No incluyen las ausencias previsibles por incapacidades, licencias o vacaciones, ni el personal de apoyo que no ejecuta operaciones de costura, como el supervisor, el mecánico o el auditor de calidad. Esos ajustes se tratan en la asignación del personal y en el costeo.

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/10.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 #[b Lectura del indicador:] si el cálculo arroja 28,57 operarios, la diferencia entre 29 y 28,57 representa una holgura de capacidad cercana al 1,5 %. Esa holgura es útil para absorber variaciones menores, pero no reemplaza el ajuste por ausentismo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Variables que modifican el requerimiento

      p.mb-5(data-aos='fade-right') El número calculado es sensible a cada una de las variables de la fórmula. Una variación de la eficiencia del 75 % al 70 % en el ejemplo anterior eleva el requerimiento a 30,61 operarios, es decir, a 31 personas. Reducir el plazo de 10 a 8 días hábiles conduce a 35,71 operarios. Un aumento del SAM por un cambio de diseño, por ejemplo, la incorporación de un bolsillo con fuelle que agrega 1,2 minutos, eleva el total a 115.200 minutos estándar y el requerimiento a 30,48 operarios. Esta sensibilidad explica por qué la planeación de personal debe revisarse cuando cambia la orden de producción y no solo al iniciar el periodo.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 1.] Variables que determinan el requerimiento de mano de obra en confección
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-20 #[b Variable]
              th #[b Origen del dato]
              th #[b Efecto sobre el requerimiento]
              th #[b Riesgo de interpretación]
          tbody
            tr
              td #[b Volumen del pedido]
              td Orden de producción y plan de entregas.
              td A mayor volumen, mayor número de minutos estándar y de operarios.
              td Confundir unidades pedidas con unidades a confeccionar sin considerar el porcentaje de segundas o reposiciones.
            tr
              td #[b SAM de la prenda]
              td Estudio de tiempos o sistema de tiempos predeterminados.
              td Un SAM mayor incrementa proporcionalmente el personal necesario.
              td Utilizar el SAM de una referencia similar sin verificar diferencias de construcción.
            tr
              td #[b Jornada disponible]
              td Programación de turnos dentro de los límites legales.
              td Más minutos disponibles por persona reducen el número de operarios.
              td Incluir en la jornada los descansos que no hacen parte del tiempo de trabajo.
            tr
              td #[b Eficiencia de planeación]
              td Registros históricos de producción por módulo o referencia.
              td Una eficiencia menor aumenta el número de operarios.
              td Adoptar la meta deseada en lugar del desempeño real comprobado.
            tr
              td #[b Plazo de producción]
              td Fecha de entrega comprometida y secuencia con otras áreas.
              td Un plazo más corto exige más personal simultáneo.
              td Omitir el tiempo que consumen corte, terminación y empaque dentro del plazo total.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Requerimiento por operación y por tipo de máquina

      p.mb-5(data-aos='fade-right') El total de operarios es una cifra agregada. Para que sea útil en planta, debe descomponerse por operación o por familia de máquinas, porque una persona experta en fileteadora no siempre puede sustituir a quien opera una máquina de ojal o una recubridora. Babu (2012) describe este cálculo como la asignación del número teórico de operarios por operación, obtenido al dividir el tiempo estándar de cada operación entre el tiempo de ciclo que exige la producción objetivo.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .bg-color-3.p-4.mb-4
            ul.lista-ul--color.mb-0
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 Tiempo de ciclo objetivo (minutos por prenda) = minutos efectivos de un puesto por día ÷ unidades requeridas por día.
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 Operarios teóricos por operación = tiempo estándar de la operación ÷ tiempo de ciclo objetivo.
          p.mb-0 Con una meta de 600 camisas diarias y una línea que trabaja 504 minutos con eficiencia del 75 %, cada operario aporta 378 minutos efectivos. El tiempo de ciclo objetivo es 378 ÷ 600 = 0,63 minutos por prenda: cada puesto debe entregar una unidad cada 0,63 minutos para que la línea alcance la meta. Como comprobación, 29 operarios aportan 29 × 378 = 10.962 minutos efectivos, cantidad que cubre los 600 × 18 = 10.800 minutos estándar de la meta diaria. Si la operación de pegar cuello tiene un tiempo estándar de 1,40 minutos, requiere 1,40 ÷ 0,63 = 2,22 operarios teóricos; si la operación de ojal tiene 0,45 minutos, requiere 0,71 operarios teóricos.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/11.png')

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.svg')
        .col-sm-12.col-lg-11
          p.mb-0 Los valores fraccionarios presentan que algunas personas deberán atender más de una operación compatible y que otras operaciones necesitarán más de un puesto. El ajuste fino de esas fracciones, la redistribución de cargas y el equilibrio entre estaciones pertenecen al balanceo de la línea. Para la planeación de la mano de obra basta con identificar cuántas personas de cada perfil técnico deben estar disponibles: operarios de máquina plana, de fileteadora, de recubridora, de máquinas especiales y de labores manuales.

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/13.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 #[b Criterio de análisis:] el requerimiento total puede ser suficiente en número y, aun así, insuficiente en perfiles. Treinta operarios de máquina plana no resuelven la necesidad de dos operarios calificados en ojaladora automática.
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación con el proceso productivo

      .row.justify-content-center.align-items-stretch.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-4.mb-lg-0
          .bg-color-1.p-4.h-100.d-flex.align-items-center
            p.mb-0 La necesidad de mano de obra no se limita al área de ensamble. Corte, estampación o bordado, terminación, planchado, revisión y empaque requieren personal con tiempos estándar propios. El desempeño del sistema productivo depende del equilibrio entre áreas: una sala de confección dimensionada para 600 prendas diarias pierde capacidad si el área de terminación solo procesa 450. Por ello, el cálculo de personal debe repetirse para cada área con su respectivo SAM parcial, y la cifra más restrictiva determina el ritmo real de salida.
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/14.svg')
        .col-sm-12.col-lg-4.d-flex.flex-column.justify-content-center
          img.wcus-1.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/15.svg')
          p.mb-0 Dos criterios de verificación cierran el análisis de requerimientos. El primero consiste en comprobar que los minutos estándar requeridos y los minutos disponibles estén expresados en la misma unidad, porque mezclar horas con minutos es un error frecuente en hojas de cálculo. El segundo consiste en contrastar el número calculado con el número de puestos físicos y máquinas disponibles: un requerimiento de 35 operarios carece de aplicación si el módulo solo cuenta con 30 máquinas operativas, caso en el cual la alternativa técnica es ampliar la jornada, abrir un segundo turno o renegociar el plazo.

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Disponibilidad y asignación del personal

      p.mb-5(data-aos='fade-right') El requerimiento calculado indica cuántas personas deben estar trabajando; la disponibilidad indica cuántas pueden hacerlo efectivamente en cada día del periodo. La diferencia entre ambas cifras se explica por ausencias previsibles, ausencias no previsibles, restricciones de habilidad y compromisos de personal con otras referencias o áreas. Planear sin esa diferencia equivale a suponer una asistencia del 100 %, supuesto que no se cumple en ninguna organización.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Personal nominal y personal disponible

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/16.png')
        .col-sm-12.col-lg-7
          p.mb-4 El personal nominal es el número de trabajadores vinculados a un área. El personal disponible es el número de trabajadores que, para una fecha específica, se encuentra en condiciones de laborar. Entre ambos se ubican las vacaciones programadas, las incapacidades médicas, las licencias legales y convencionales, los permisos, las capacitaciones fuera del puesto y la rotación de personal.
          p.mb-4 Algunas de esas ausencias pueden conocerse con anticipación. Las vacaciones, por ejemplo, corresponden a quince días hábiles consecutivos remunerados por cada año de servicio (Código Sustantivo del Trabajo [CST], art. 186), y su programación es una decisión del empleador que debe coordinarse con la producción. Las licencias de maternidad y de paternidad también suelen conocerse con semanas de anticipación. Las incapacidades por enfermedad general, en cambio, se presentan de forma imprevista y solo pueden estimarse estadísticamente a partir del historial de ausentismo.
          .cajon.color-acento-contenido.p-5.mb-0
            p.mb-1 #[b Relación operativa]
            p.mb-0 Personal disponible = personal nominal − ausencias programadas − ausencias estimadas.

      p.mb-5(data-aos='fade-right') En esta relación, las ausencias programadas son las que tienen fecha conocida, como vacaciones y licencias ya notificadas; las ausencias estimadas se calculan aplicando la tasa histórica de ausentismo no programado al personal que no tiene ausencias programadas. Todas las magnitudes se expresan en personas por día o en personas-día dentro del periodo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ajuste del requerimiento por ausentismo

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-5 Para garantizar que el número de personas presentes coincida con el requerimiento, el personal asignado debe ser mayor en la proporción de ausencia esperada.
          .bg-color-3.p-4.mb-5
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 Personal a asignar = operarios requeridos ÷ (1 − tasa de ausentismo esperada).
          p.mb-5 La tasa se expresa como fracción decimal. Con un requerimiento de 29 operarios y una tasa de ausentismo no programado del 4 %, el cálculo es el siguiente: 29 ÷ (1 − 0,04) = 29 ÷ 0,96 = 30,21. El valor se redondea a 31 personas. La interpretación técnica indica que, si la asistencia se comporta como en el historial, un día típico contará con 29 o 30 personas presentes, cantidad suficiente para sostener la meta calculada.
          p.mb-0 El ajuste no se obtiene multiplicando el requerimiento por 1,04. Ese procedimiento arroja 30,16 y subestima levemente la necesidad, porque aplica el porcentaje sobre la cifra de personas presentes y no sobre la de personas asignadas. La diferencia es pequeña con tasas bajas, pero se vuelve significativa con tasas superiores al 8 % o en plantas grandes.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/17.png')

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/18.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0
          p.mb-0 #[b Error de interpretación:] un módulo con 31 personas asignadas no tiene dos personas sobrantes. Tiene la reserva estadística necesaria para que la ausencia diaria esperada no reduzca la producción por debajo de la meta.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Polivalencia y matriz de habilidades

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/19.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La disponibilidad depende también de la capacidad del personal presente para cubrir los puestos que quedan vacíos. Un operario polivalente domina varias operaciones o varios tipos de máquina con un rendimiento aceptable, y su presencia permite reasignar cargas cuando falta otro trabajador. La herramienta habitual para registrar esa condición es la matriz de habilidades, que relaciona a cada persona con las operaciones que puede ejecutar y con el nivel de desempeño alcanzado en cada una.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 2.] Niveles de una matriz de habilidades para la asignación del personal
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-10 #[b Nivel]
              th #[b Descripción del desempeño]
              th #[b Uso en la asignación]
          tbody
            tr
              td #[b Nivel 0]
              td La persona no ha sido entrenada en la operación.
              td No se asigna a la operación, salvo en procesos formales de entrenamiento.
            tr
              td #[b Nivel 1]
              td La persona ejecuta la operación con supervisión y con eficiencia inferior al estándar esperado.
              td Se asigna como apoyo temporal en operaciones de baja complejidad.
            tr
              td #[b Nivel 2]
              td La persona ejecuta la operación de manera autónoma, con calidad conforme y eficiencia cercana al promedio del módulo.
              td Se asigna como titular o como reemplazo inmediato.
            tr
              td #[b Nivel 3]
              td La persona ejecuta la operación con eficiencia superior al promedio y puede orientar a otros trabajadores.
              td Se asigna a operaciones críticas o a puestos que suelen convertirse en restricción.

      p.mb-5(data-aos='fade-right') La matriz permite verificar, antes de iniciar un pedido, si el personal disponible cubre los perfiles calculados en el requerimiento por operación. Si la referencia exige tres operarios en recubridora y solo dos personas tienen nivel 2 o superior en esa máquina, existe una restricción de habilidad que debe resolverse mediante reasignación, entrenamiento previo o ajuste del plan, aunque el número total de operarios sea suficiente.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios de asignación

      p.mb-5(data-aos='fade-right') La asignación del personal a operaciones, módulos y turnos sigue criterios técnicos que se aplican en un orden lógico:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar.hcus-1
            img(src='@/assets/curso/temas/t1/20.svg')
            .tarjeta.bg-color-3
              .p-4
                p.mb-0 La cobertura de operaciones críticas, entendidas como aquellas con mayor tiempo estándar o con exigencias de calidad que afectan la apariencia final de la prenda

        .col-sm-12.col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar.hcus-1
            img(src='@/assets/curso/temas/t1/21.svg')
            .tarjeta.bg-color-3
              .p-4
                p.mb-0 La correspondencia entre el nivel de habilidad registrado y la complejidad de la operación asignada.

        .col-sm-12.col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar.hcus-1
            img(src='@/assets/curso/temas/t1/22.svg')
            .tarjeta.bg-color-3
              .p-4
                p.mb-0 La disponibilidad del trabajador dentro del horario del turno, considerando ausencias programadas y restricciones médicas vigentes.

        .col-sm-12.col-md-6.col-lg.mb-4.mb-md-0
          .tarjeta-avatar.hcus-1
            img(src='@/assets/curso/temas/t1/23.svg')
            .tarjeta.bg-color-3
              .p-4
                p.mb-0 La continuidad del personal en la misma referencia, para aprovechar el efecto del aprendizaje y evitar caídas de eficiencia por cambios frecuentes.

        .col-sm-12.col-md-6.col-lg
          .tarjeta-avatar.hcus-1
            img(src='@/assets/curso/temas/t1/24.svg')
            .tarjeta.bg-color-3
              .p-4
                p.mb-0 La distribución equitativa de la jornada y del trabajo suplementario, dentro de los límites que fija la legislación laboral.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/25.png')
        .col-sm-12.col-lg-7
          img.wcus-10.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/26.svg')
          p.mb-0 La continuidad merece una precisión. Cuando un operario repite una operación, el tiempo por unidad disminuye conforme aumenta la cantidad acumulada producida, fenómeno descrito por la curva de aprendizaje (Heizer et al., 2020). Rotar al personal de manera innecesaria entre referencias reinicia parcialmente ese proceso y reduce la eficiencia real frente a la planeada. La rotación se justifica cuando responde a necesidades de cobertura, de desarrollo de polivalencia o de prevención de la fatiga, y no como práctica rutinaria sin propósito.

      p.mb-4(data-aos='fade-right') Explore el pódcast #[b “Restricciones legales y de salud en la asignación de turnos”] para conocer los aspectos normativos y las condiciones de salud que deben considerarse al planificar jornadas de trabajo seguras, prevenir riesgos y proteger el bienestar de los trabajadores.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t1/27.png', data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-0(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="Restricciones legales y de salud en la asignación de turnos"
                :audio="require_src('@/assets/curso/temas/audio/podcast.mp3')"
              )
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
