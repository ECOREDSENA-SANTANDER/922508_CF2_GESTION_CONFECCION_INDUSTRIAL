<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 2
        h1 Programación de jornadas

      .row.justify-content-center.align-items-start.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          p.mb-3 La programación de jornadas distribuye el tiempo de trabajo entre días, turnos y franjas horarias. Su finalidad productiva consiste en asegurar cobertura continua para la carga prevista; su condición jurídica exige respetar la jornada máxima, los descansos y la remuneración aplicable. El cronograma debe construirse antes de comprometer la capacidad, porque un volumen técnicamente posible puede resultar inviable dentro del tiempo ordinario disponible.
          .bg-color-1.p-4.mb-0
            p.mb-0 El diseño horario distingue tiempo nominal, tiempo ordinario, pausas, relevos y trabajo suplementario. Cuando estas categorías se mezclan, el total semanal puede parecer ajustado y, sin embargo, contener horas extras no reconocidas. El control debe sumar el tiempo efectivamente laborado por persona y no limitarse a revisar la duración aislada de cada turno.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png')

      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Turnos, relevos y descansos

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.svg')
        .col-sm-12.col-lg-11
          p.mb-0 Programar la jornada consiste en definir cuándo trabaja cada persona, durante cuánto tiempo, en qué turno y con qué interrupciones, de manera que la suma de horas programadas cubra el requerimiento de producción sin exceder los límites legales. La programación traduce el número de operarios calculado en un calendario concreto y constituye el punto en el que la planeación técnica y la normativa laboral se encuentran.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El turno como unidad de programación

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.png')
        .col-sm-12.col-lg-7
          p.mb-4 Un turno es un bloque horario dentro del cual un grupo de trabajadores cumple su jornada ordinaria. Las plantas de confección de tamaño pequeño y mediano suelen operar con un solo turno diurno, mientras que las plantas con alta demanda o con maquinaria costosa, como cortadoras automáticas, bordadoras multicabezal o máquinas de estampación, pueden operar con dos o tres turnos para aumentar la utilización de esos equipos. Abrir un segundo turno duplica el tiempo de operación de la maquinaria sin necesidad de duplicar los puestos físicos, pero exige personal adicional, supervisión en el nuevo horario y, cuando el turno se extiende después de las 7:00 p. m., el pago del recargo nocturno.
          p.mb-0 La elección entre ampliar el personal de un turno o abrir un turno adicional depende de tres condiciones. La primera es física: si no existen máquinas libres, la única forma de aumentar la capacidad de mano de obra es utilizar las mismas máquinas durante más horas. La segunda es económica: el costo de los recargos y de la supervisión adicional debe compararse con el costo de incumplir o de subcontratar. La tercera es organizacional: un segundo turno requiere abastecimiento de material, mantenimiento y control de calidad en el mismo horario, condición que no siempre está resuelta.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 3.] Modalidades de organización de turnos en plantas de confección
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-20 #[b Modalidad]
              th #[b Características]
              th #[b Condiciones de aplicación]
              th #[b Implicaciones para la mano de obra]
          tbody
            tr
              td #[b Turno único diurno]
              td La jornada ordinaria se cumple dentro de la franja diurna, entre las 6:00 a. m. y las 7:00 p. m.
              td Resulta apropiado cuando la capacidad instalada cubre la demanda en una sola jornada.
              td No genera recargo nocturno y simplifica la supervisión y el abastecimiento.
            tr
              td #[b Dos turnos]
              td Un turno de mañana y otro de tarde utilizan los mismos puestos de trabajo.
              td Se aplica cuando la demanda supera la capacidad de un turno y la maquinaria es suficiente para duplicar su uso.
              td Puede generar horas nocturnas en el segundo turno y exige un protocolo de entrega entre turnos.
            tr
              td #[b Turnos sucesivos]
              td Turnos de hasta 6 horas diarias y 36 semanales permiten operar sin interrupción todos los días.
              td Requiere que la operación necesite continuidad y que se garantice un día de descanso remunerado.
              td La ley no exige recargo nocturno ni dominical dentro de esta modalidad.
            tr
              td #[b Jornada flexible]
              td Las horas semanales se reparten de forma variable, entre 4 y 9 horas diarias, en máximo seis días.
              td Se pacta entre empleador y trabajador y permite concentrar horas en días de mayor carga.
              td No genera trabajo suplementario mientras el promedio semanal no supere la jornada máxima.

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Descansos dentro de la jornada

      p.mb-5(data-aos='fade-right') En Colombia, ninguna jornada puede cumplirse como un bloque continuo: debe dividirse por lo menos en dos tramos separados por una pausa, cuya duración se ajusta al tipo de labor y a lo que requieren los trabajadores, y ese tiempo de pausa no se suma a las horas trabajadas (CST, art. 167). En confección, este intermedio suele destinarse a la alimentación y se ubica cerca de la mitad del turno.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png')
        .col-sm-12.col-lg-8
          p.mb-4 Al descanso intermedio se suman las pausas que la empresa defina dentro de la jornada por razones de salud y seguridad en el trabajo. Esas pausas sí forman parte del tiempo pagado y, en consecuencia, reducen los minutos disponibles para producir. Su efecto debe incorporarse en la planeación: si un turno de 420 minutos incluye dos pausas de 10 minutos, el tiempo disponible para producción es de 400 minutos, y el cálculo de operarios debe partir de esa cifra. Kanawaty (1996) señala que el tiempo estándar ya incorpora suplementos por fatiga y necesidades personales, de modo que es necesario verificar si las pausas programadas están incluidas en los suplementos del estándar o si deben descontarse aparte, para no contarlas dos veces.
          .cajon.color-acento-contenido.p-5.mb-0
            p.mb-0 #[b Error de interpretación:] descontar del tiempo disponible una pausa que ya está incluida como suplemento en el SAM produce un requerimiento de personal superior al necesario. Omitir una pausa que no está incluida produce el efecto contrario.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Descanso semanal obligatorio

      .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5.mb-5.br-3(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/5.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 Todo trabajador tiene derecho a un día de descanso obligatorio remunerado a la semana. Por regla general, ese día es el domingo, aunque las partes pueden pactar por escrito un día distinto; si no existe ese pacto, se presume que el descanso corresponde al domingo (Ley 2466 de 2025, art. 14). La programación debe garantizar ese día a cada trabajador, incluso cuando la planta opera los siete días. En esos casos, el cronograma rota el día de descanso entre grupos, de modo que todos los días exista personal suficiente y que ningún trabajador labore más de seis días consecutivos dentro de la semana.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relevos

      .row.justify-content-center.align-items-stretch.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-flex.flex-column.justify-content-center
          img.wcus-10.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t2/6.svg')
          p.mb-0 El relevo es la sustitución de un trabajador por otro en un puesto que debe continuar operando. En confección se presentan dos situaciones de relevo con exigencias distintas. La primera ocurre durante los descansos: si todo el módulo se detiene al mismo tiempo, la producción se interrumpe, pero el flujo permanece equilibrado; si solo se detiene un puesto crítico, se forma una acumulación de piezas antes de él y un vacío después. Para evitarlo, los descansos de los puestos que constituyen restricción de capacidad suelen escalonarse y cubrirse con un operario polivalente que los releva.
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.svg')
        .col-sm-12.col-lg-4
          .bg-color-1.p-4.h-100.d-flex.align-items-center
            p.mb-0 La segunda situación es el cambio de turno. La entrega de un puesto entre el turno saliente y el entrante requiere transmitir información sobre la referencia en proceso, la cantidad producida, el estado de la máquina, los ajustes realizados y los defectos detectados. Una entrega deficiente provoca tiempos muertos al inicio del turno siguiente y errores repetidos. Los protocolos de relevo establecen un tiempo breve de superposición o una planilla de entrega que el supervisor de cada turno verifica.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 4.] Elementos de un protocolo de relevo entre turnos
      .tabla-a.t-cus.mb-0(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-20 #[b Elemento]
              th #[b Contenido técnico]
              th #[b Responsable]
          tbody
            tr
              td #[b Estado de la producción]
              td Referencia, orden de producción, cantidad confeccionada y cantidad pendiente por operación.
              td Supervisor del turno saliente.
            tr
              td #[b Estado de la maquinaria]
              td Máquinas detenidas, ajustes pendientes y solicitudes de mantenimiento abiertas.
              td Mecánico o supervisor del turno saliente.
            tr
              td #[b Novedades de calidad]
              td Defectos detectados, piezas en reproceso y operaciones con instrucciones especiales.
              td Auditor o supervisor del turno saliente.
            tr
              td #[b Novedades de personal]
              td Ausencias del turno entrante, reasignaciones requeridas y operaciones descubiertas.
              td Supervisor del turno entrante.
            tr
              td #[b Verificación de entrega]
              td Firma o registro digital de quien entrega y de quien recibe el turno.
              td Supervisores de ambos turnos.

      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Límites legales de la jornada laboral

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/8.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La programación de turnos está condicionada por un conjunto de normas que fijan cuánto puede trabajar una persona por día y por semana, en qué franjas horarias y con qué descansos. Estas normas no son parámetros de referencia sino límites de cumplimiento obligatorio, y su desconocimiento genera obligaciones económicas, sanciones administrativas y riesgos para la salud de los trabajadores.

      AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-card")(data-aos='fade-right')
        .row.justify-content-center.align-items-center(titulo="Jornada ordinaria máxima")
          .col-12
            p.mb-4 La jornada ordinaria es la que convienen las partes o, a falta de convenio, la máxima legal (CST, art. 158). La Ley 2101 de 2021 redujo la jornada máxima semanal de forma gradual: de 48 a 47 horas en 2023, a 46 horas en 2024, a 44 horas en 2025 y a 42 horas a partir del 15 de julio de 2026. La Ley 2466 de 2025 incorporó esa cifra al artículo 161 del CST y estableció que la jornada ordinaria máxima es de ocho horas diarias y 42 semanales, cifra a la que se llegó mediante el cronograma de reducción de la Ley 2101 (Ley 2466 de 2025, art. 11).
            p.mb-4 Las 42 horas semanales pueden distribuirse, de común acuerdo, en cinco o seis días, garantizando siempre el día de descanso y sin que la distribución afecte el salario. La misma norma permite pactar jornadas diarias flexibles, con un mínimo de 4 horas continuas y un máximo de 9 horas diarias, distribuidas en máximo seis días a la semana; mientras el promedio semanal no exceda la jornada máxima, esas horas no generan recargo por trabajo suplementario (Ley 2466 de 2025, art. 11).
            .cajon.color-acento-contenido.p-4.mb-0
              p.mb-0 #[b Principio de medición:] el valor de la hora ordinaria se obtiene dividiendo el salario mensual entre el número de horas ordinarias del mes. Con la jornada de 42 horas, ese divisor es 210, resultado de 7 horas promedio diarias multiplicadas por 30 días.

        .row.justify-content-center.align-items-center(titulo="Franjas diurna y nocturna")
          .col-sm-12.col-lg-7.mb-4.mb-lg-0
            p.mb-0 Desde el 25 de diciembre de 2025, el trabajo diurno es el que se realiza entre las 6:00 a. m. y las 7:00 p. m., y el trabajo nocturno, el que se realiza entre las 7:00 p. m. y las 6:00 a. m. del día siguiente (Ley 2466 de 2025, art. 10). La modificación adelantó en dos horas el inicio de la franja nocturna, que antes comenzaba a las 9:00 p. m. Para la programación de turnos, el cambio tiene un efecto directo: turnos de tarde que antes eran completamente diurnos ahora generan horas nocturnas y, con ellas, recargo.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/9.png')

        .row.justify-content-center.align-items-center(titulo="Turnos sucesivos y trabajo por turnos")
          .col-sm-12.col-lg-7.mb-4.mb-lg-0
            p.mb-0 La ley prevé dos figuras que permiten organizar la jornada de forma distinta a la ordinaria. La primera son los turnos sucesivos, que permiten operar sin interrupción todos los días de la semana siempre que cada turno no exceda 6 horas diarias y 36 semanales; en esta modalidad no procede el recargo nocturno ni el dominical, pero el trabajador conserva el derecho a un día de descanso remunerado (Ley 2466 de 2025, art. 11). La segunda es el trabajo por turnos en labores que no exigen actividad continuada: la jornada de un día puede ampliarse por encima del límite diario, siempre que el promedio de horas, calculado en un periodo no mayor de tres semanas, no supere el máximo legal; esa ampliación no constituye trabajo suplementario (CST, art. 165).
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/10.png')

        .row.justify-content-center.align-items-center(titulo="Excepciones y restricciones")
          .col-sm-12.col-lg-7.mb-4.mb-lg-0
            p.mb-0 No todo el personal de una planta está sujeto a la jornada máxima. Los trabajadores que desempeñan cargos de dirección, confianza o manejo están excluidos de ella (CST, art. 162). En la planta, la exclusión puede aplicar a un gerente de producción, pero no a los operarios, auxiliares, revisores o mecánicos. La ley también prohíbe contratar a una misma persona para dos turnos en un mismo día, salvo en cargos de supervisión, dirección, confianza o manejo (Ley 2466 de 2025, art. 11).
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/11.png')

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 5.] Límites legales aplicables a la programación de jornadas desde el 15 de julio de 2026
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-25 #[b Parámetro]
              th #[b Regla vigente]
              th #[b Fuente normativa]
          tbody
            tr
              td #[b Jornada ordinaria semanal]
              td Máximo 42 horas, distribuibles en cinco o seis días.
              td Ley 2101 de 2021, art. 2; Ley 2466 de 2025, art. 11.
            tr
              td #[b Jornada ordinaria diaria]
              td Máximo 8 horas, o entre 4 y 9 horas en jornada flexible pactada.
              td Ley 2466 de 2025, art. 11.
            tr
              td #[b Franja diurna]
              td Entre las 6:00 a. m. y las 7:00 p. m.
              td Ley 2466 de 2025, art. 10.
            tr
              td #[b Franja nocturna]
              td Entre las 7:00 p. m. y las 6:00 a. m. del día siguiente.
              td Ley 2466 de 2025, art. 10.
            tr
              td #[b Descanso intermedio]
              td Al menos dos secciones de trabajo con un intermedio que no se computa en la jornada.
              td CST, art. 167.
            tr
              td #[b Descanso semanal]
              td Un día obligatorio remunerado; se presume el domingo si no se pacta otro día.
              td Ley 2466 de 2025, art. 14.
            tr
              td #[b Turnos sucesivos]
              td Máximo 6 horas diarias y 36 semanales, sin recargo nocturno ni dominical.
              td Ley 2466 de 2025, art. 11.
            tr
              td #[b Trabajo suplementario]
              td Máximo 2 horas diarias y 12 semanales.
              td Ley 2466 de 2025, art. 13.
        .tabla-nota.p-3.bg-color-1
          p.mb-0 #[b Nota.] Cualquier modificación normativa posterior debe verificarse antes de su aplicación.

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-0.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/12.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 #[b Verificación necesaria:] una programación cumple los límites legales cuando, para cada trabajador, se verifican simultáneamente la jornada diaria, la jornada semanal, las horas nocturnas, el día de descanso y el trabajo suplementario. Cumplir uno de esos parámetros no garantiza el cumplimiento de los demás.

      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Trabajo suplementario y recargos

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.mb-4.mb-lg-0
          img.wcus-10.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t2/13.svg')
          p.mb-0 El trabajo suplementario, conocido también como horas extras, corresponde a las horas que sobrepasan la jornada pactada por las partes y, cuando no existe pacto o este supera la ley, a las que sobrepasan el tope legal (CST, art. 159). Se diferencia de los recargos por trabajo nocturno o en días de descanso, que remuneran las condiciones en que se presta el trabajo y no su duración. Esta distinción es esencial para el cálculo: una hora nocturna dentro de la jornada ordinaria genera recargo nocturno, mientras que una hora nocturna por fuera de ella es una hora extra nocturna.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/14.png')

      .row.justify-content-center.align-items-stretch.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.mb-4.mb-lg-0
          .bg-color-3.p-4.p-md-5.h-100
            .titulo-tercer-nivel.mb-4
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Límites y registro
            p.mb-0 El trabajo suplementario, conocido también como horas extras, corresponde a las horas que sobrepasan la jornada pactada por las partes y, cuando no existe pacto o este supera la ley, a las que sobrepasan el tope legal (CST, art. 159). Se diferencia de los recargos por trabajo nocturno o en días de descanso, que remuneran las condiciones en que se presta el trabajo y no su duración. Esta distinción es esencial para el cálculo: una hora nocturna dentro de la jornada ordinaria genera recargo nocturno, mientras que una hora nocturna por fuera de ella es una hora extra nocturna.
        .col-sm-12.col-lg-6
          .bg-color-2.p-4.p-md-5.h-100
            .titulo-tercer-nivel.mb-4
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Porcentajes de recargo
            p.mb-0 Los recargos se liquidan sobre el valor de la hora ordinaria. El trabajo nocturno se remunera con un recargo del 35 %; el trabajo extra diurno, con un recargo del 25 %; y el trabajo extra nocturno, con un recargo del 75 % (CST, art. 168). El trabajo en días de descanso obligatorio se remunera con un recargo que la Ley 2466 de 2025 incrementó de forma gradual: 80 % desde el 1 de julio de 2025, 90 % desde el 1 de julio de 2026 y 100 % desde el 1 de julio de 2027 (Ley 2466 de 2025, art. 14). El trabajo dominical o festivo es ocasional cuando el trabajador labora hasta dos días de descanso obligatorio en el mes calendario, y habitual cuando labora tres o más; la distribución tiene efectos sobre el descanso compensatorio (Ley 2466 de 2025, art. 14; CST, art. 181).

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 6.] Valor de la hora con recargos para un salario mínimo en el segundo semestre de 2026
      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .tabla-a.t-cus.mb-0
            table
              thead
                tr
                  th #[b Concepto]
                  th #[b Recargo sobre la hora ordinaria]
                  th #[b Valor por hora (pesos)]
              tbody
                tr
                  td #[b Hora ordinaria diurna]
                  td No aplica.
                  td 8.338
                tr
                  td #[b Recargo nocturno]
                  td 35 %.
                  td 2.918 adicionales a la hora ordinaria.
                tr
                  td #[b Hora extra diurna]
                  td 25 %.
                  td 10.422
                tr
                  td #[b Hora extra nocturna]
                  td 75 %.
                  td 14.591
                tr
                  td #[b Recargo en día de descanso obligatorio]
                  td 90 %.
                  td 7.504 adicionales a la hora ordinaria.
            .tabla-nota.p-3.bg-color-1
              p.mb-0 Nota. Valor de la hora ordinaria: 1.750.905 ÷ 210 = 8.337,64 pesos; los valores se redondean al peso más cercano después de aplicar el porcentaje.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/15.svg')

      .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5.mb-5.br-3(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/15.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 #[b Advertencia técnica:] cuando una hora extra se trabaja en domingo o festivo, el cálculo combina el recargo por día de descanso con el recargo por trabajo suplementario. La práctica de liquidación más extendida suma ambos porcentajes, de modo que una hora extra diurna dominical se paga con un 115 % adicional durante la vigencia del recargo del 90 %. Por tratarse de un punto con interpretaciones diversas, la regla aplicada debe validarse con el área de nómina o con asesoría jurídica laboral.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de liquidación semanal
      .bg-full-width.bg-color-4.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/16.png')
            .col-sm-12.col-lg-8
              p.text-white.mb-4 Un operario con salario mínimo trabaja en el turno de tarde descrito en el apartado 2.1 y, para recuperar un atraso, labora 1 hora extra diurna de lunes a sábado antes del inicio de su turno y 1 hora extra nocturna el viernes y el sábado al terminar el turno.
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.bg-color-2.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/temas/t2/17.svg')
                  h5.text-center.mb-3 Datos disponibles
                  p.mb-0 Hora ordinaria de 8.337,64 pesos; 12 horas nocturnas ordinarias en la semana; 6 horas extras diurnas; 2 horas extras nocturnas.

                .tarjeta.bg-color-2.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/temas/t2/18.svg')
                  h5.text-center.mb-3 Verificación de límites
                  p.mb-0 El viernes y el sábado se suman 2 horas extras, que no superan el límite diario; el total semanal es de 8 horas, inferior a 12.

                .tarjeta.bg-color-2.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/temas/t2/19.svg')
                  h5.text-center.mb-3 Recargo nocturno ordinario
                  p.mb-0 12 × 8.337,64 × 0,35 = 35.018 pesos.

                .tarjeta.bg-color-2.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/temas/t2/20.svg')
                  h5.text-center.mb-3 Horas extras diurnas
                  p.mb-0 6 × 8.337,64 × 1,25 = 62.532 pesos.

                .tarjeta.bg-color-2.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/temas/t2/21.svg')
                  h5.text-center.mb-3 Horas extras nocturnas
                  p.mb-0 2 × 8.337,64 × 1,75 = 29.182 pesos.

                .tarjeta.bg-color-2.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/temas/t2/22.svg')
                  h5.text-center.mb-3 Resultado
                  p.mb-0 El costo semanal adicional a la jornada ordinaria pagada en el salario es de 35.018 + 62.532 + 29.182 = 126.732 pesos.

      p.mb-5(data-aos='fade-right') La interpretación técnica del resultado tiene dos dimensiones. En la dimensión económica, el valor obtenido es solo el pago directo; los recargos y las horas extras forman parte del salario e inciden en la base de los aportes y de las prestaciones sociales. En la dimensión productiva, las 8 horas extras aportan, con una eficiencia del 75 %, 8 × 60 × 0,75 = 360 minutos estándar, equivalentes a 20 camisas de 18 minutos. El costo directo de esas horas extras es de 91.714 pesos, unos 4.586 pesos por camisa, cifra que permite compararlas con alternativas como un turno adicional o la subcontratación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis del cumplimiento de fechas de entrega

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          p.mb-4 El trabajo suplementario es una herramienta de ajuste de capacidad, no un sustituto de la planeación. Su uso se justifica cuando el análisis de cumplimiento demuestra que, con la jornada ordinaria y el personal disponible, un pedido no alcanzará la fecha comprometida. Ese análisis compara, para cada pedido, los minutos estándar pendientes con los minutos efectivos disponibles hasta la fecha de entrega.
          .bg-color-1.p-4.mb-0
            ul.lista-ul--color.mb-0
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 Brecha de capacidad (minutos estándar) = minutos estándar pendientes − minutos efectivos disponibles hasta la entrega.
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 Horas extras requeridas = brecha de capacidad ÷ (60 × eficiencia de planeación).
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/23.png')

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/24.svg')
        .col-sm-12.col-lg-7
          p.mb-4 Si la brecha es igual o inferior a cero, la capacidad ordinaria basta. Si es positiva, la cifra de horas extras requeridas se distribuye entre los trabajadores de las operaciones afectadas y se verifica contra el límite de 12 horas semanales por persona. Un ejemplo: a cinco días hábiles de la entrega, un módulo de 29 operarios tiene pendientes 58.000 minutos estándar y dispone de 29 × 378 × 5 = 54.810 minutos efectivos. La brecha es de 3.190 minutos estándar. Con una eficiencia del 75 %, cada hora extra aporta 45 minutos estándar, de modo que se requieren 3.190 ÷ 45 = 70,9 horas extras, que se redondean a 71. Distribuidas entre los 29 operarios, corresponden a 2,45 horas por persona en la semana, valor que se encuentra dentro del límite legal.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Criterio de capacidad:] cuando las horas extras requeridas superan el límite legal de todo el personal disponible, el pedido no puede cumplirse con trabajo suplementario. Las alternativas técnicas son incorporar personal, abrir un turno adicional, subcontratar operaciones o renegociar la fecha de entrega.

      p.mb-4(data-aos='fade-right') El seguimiento del cumplimiento se completa con un indicador de entregas a tiempo, que relaciona los pedidos entregados en la fecha comprometida con el total de pedidos programados para el periodo.

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          .bg-color-1.p-4.mb-4
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 Cumplimiento de entregas (%) = pedidos entregados en la fecha comprometida ÷ pedidos programados para entrega en el periodo × 100.
          p.mb-0 El indicador se calcula por periodo y debe leerse junto con el volumen de horas extras empleadas. Un cumplimiento del 98 % alcanzado con un uso sistemático de trabajo suplementario revela un déficit estructural de capacidad que la planeación de personal debe corregir, porque las horas extras constantes elevan el costo, aumentan la fatiga y reducen el margen para atender imprevistos.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/25.png')
</template>

<script>
export default {
  name: 'Tema2',
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
