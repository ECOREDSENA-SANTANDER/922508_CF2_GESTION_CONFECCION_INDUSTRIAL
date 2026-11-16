<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 4
        h1 Control de novedades

      .row.justify-content-center.align-items-start.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png')
        .col-sm-12.col-lg-7
          p.mb-4 Una novedad es un evento que modifica la disponibilidad, el horario, la asignación o la base de liquidación prevista. Su control conecta la planeación con la ejecución real. La información debe registrarse con oportunidad, porque una ausencia conocida después de iniciado el turno reduce el margen para reorganizar la carga y puede provocar decisiones improvisadas.
          p.mb-0 El control no se limita al ausentismo. Incluye cambios de turno, permisos, incapacidades, vacaciones, ingresos, retiros, restricciones temporales, reemplazos y variaciones de jornada. Cada categoría tiene consecuencias distintas; agruparlas bajo una sola etiqueta impide determinar su efecto sobre capacidad, costo y cumplimiento.

      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Ausentismo y cambios de disponibilidad

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/2.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Toda planeación de mano de obra se elabora con una disponibilidad esperada que la realidad diaria modifica. Una novedad de personal es cualquier hecho que altera la presencia, el horario, la asignación o las condiciones de trabajo de una persona respecto de lo programado. Su control consiste en conocerla oportunamente, cuantificar su efecto sobre la capacidad y el costo, y ajustar la asignación para que la producción se mantenga dentro del plan o se replanee de forma consciente.

          .titulo-tercer-nivel.mb-5
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de novedades

          p.mb-0 Las novedades pueden clasificarse según su previsibilidad y según su efecto sobre la relación laboral. Las previsibles, como las vacaciones o las licencias notificadas con anticipación, se incorporan desde la programación. Las imprevistas, como una incapacidad o una calamidad doméstica, aparecen el mismo día o con muy poca anticipación y obligan a reaccionar dentro del turno. Algunas novedades suspenden temporalmente la prestación del servicio sin afectar el vínculo; otras, como un retiro o un ingreso, modifican de forma permanente el personal nominal.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/3.png')

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 12.] Novedades de personal frecuentes en una planta de confección
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-20 #[b Novedad]
              th.wcus-15 #[b Carácter]
              th #[b Soporte habitual]
              th #[b Efecto sobre la planeación]
          tbody
            tr
              td #[b Incapacidad por enfermedad general]
              td Imprevista.
              td Certificado de incapacidad expedido por el profesional tratante.
              td Reduce el personal presente desde el primer día y puede extenderse por varios días.
            tr
              td #[b Incapacidad por accidente de trabajo o enfermedad laboral]
              td Imprevista.
              td Reporte del evento y certificado de incapacidad.
              td Reduce el personal presente y exige revisar las condiciones del puesto antes del reintegro.
            tr
              td #[b Licencia de maternidad o de paternidad]
              td Previsible.
              td Certificado médico y registro civil, según el caso.
              td Genera una ausencia prolongada que debe cubrirse con reasignación o vinculación temporal.
            tr
              td #[b Licencia por luto]
              td Imprevista.
              td Documento que acredite el fallecimiento y el parentesco.
              td Genera una ausencia corta de duración conocida desde el reporte.
            tr
              td #[b Permiso por calamidad doméstica]
              td Imprevista.
              td Comunicación del trabajador y soporte posterior, según el reglamento interno.
              td Genera una ausencia corta, generalmente de horas o pocos días.
            tr
              td #[b Vacaciones]
              td Previsible.
              td Programación aprobada por el empleador.
              td Se descuenta del personal disponible desde la planeación.
            tr
              td #[b Restricción o recomendación médico-laboral]
              td Previsible a partir de su notificación.
              td Concepto médico ocupacional.
              td Limita las operaciones que la persona puede ejecutar, aunque esté presente.
            tr
              td #[b Ingreso, retiro o traslado]
              td Previsible en la mayoría de los casos.
              td Contrato, carta de terminación o comunicación interna.
              td Modifica el personal nominal y la matriz de habilidades.
        .tabla-nota.p-3.bg-color-1
          p.mb-0 Nota. Los soportes específicos y los plazos de reporte dependen del reglamento interno de trabajo de cada empresa.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          p.mb-5 El marco normativo de algunas de estas novedades tiene efectos sobre el costo y la duración de la ausencia. La licencia remunerada por luto es de cinco días hábiles (Ley 1280 de 2009, art. 1). La licencia de maternidad es de dieciocho semanas remuneradas (Ley 2114 de 2021, art. 2). El empleador debe conceder licencias por grave calamidad doméstica debidamente comprobada, entre otras situaciones previstas en la ley (CST, art. 57, num. 6). En las incapacidades por enfermedad general, el pago de los dos primeros días corresponde al empleador y, a partir del tercero, a la entidad promotora de salud (Decreto 780 de 2016, art. 3.2.1.10). Este último punto influye en el costo: las incapacidades cortas y frecuentes son asumidas principalmente por la empresa, mientras que las prolongadas son asumidas en mayor proporción por el sistema.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Concepto técnico:] el ausentismo es la no asistencia del trabajador a su puesto en el tiempo programado. Su medición sistemática permite estimar la reserva de personal necesaria y detectar causas que pueden intervenirse.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/4.png')

      p.mb-4(data-aos='fade-right') Explore el pódcast #[b “Medición del ausentismo”] para conocer los indicadores y métodos que permiten identificar las ausencias laborales, analizar sus causas y proponer estrategias que contribuyan a mejorar la asistencia y la continuidad de los procesos productivos.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t4/5.png', data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="Medición del ausentismo"
                :audio="require_src('@/assets/curso/temas/audio/podcast2.mp3')"
              )

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/6.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 #[b Advertencia técnica:] los registros de ausentismo contienen datos relativos a la salud, que la legislación colombiana clasifica como datos sensibles (Ley 1581 de 2012, art. 5). La información que circula en planta para fines de planeación debe limitarse al tipo de novedad, las fechas y la duración, sin diagnósticos ni detalles clínicos.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Efecto de una novedad sobre la capacidad

      p.mb-5(data-aos='fade-right') Cada ausencia imprevista reduce la capacidad del día en una proporción que puede cuantificarse. En el módulo del ejemplo, la meta diaria de 600 camisas exige 10.800 minutos estándar y cada operario aporta 378 minutos efectivos. Si un día se presentan tres ausencias imprevistas sobre 31 operarios asignados, el personal presente es de 28 personas.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span a
              p.mb-0 #[b Datos disponibles:] 28 operarios presentes, 378 minutos efectivos por operario y una meta de 10.800 minutos estándar.
            li.d-flex
              .lista-ol--cuadro__vineta
                span b
              p.mb-0 #[b Capacidad del día:] 28 × 378 = 10.584 minutos estándar.
            li.d-flex
              .lista-ol--cuadro__vineta
                span c
              p.mb-0 #[b Déficit:] 10.800 − 10.584 = 216 minutos estándar.
            li.d-flex
              .lista-ol--cuadro__vineta
                span d
              p.mb-0 #[b Equivalencia en producto:] 216 ÷ 18 = 12 camisas.
            li.d-flex
              .lista-ol--cuadro__vineta
                span e
              p.mb-0 #[b Recuperación mediante horas extras:] 216 ÷ 45 = 4,8 horas, que se redondean a 5 horas extras distribuidas entre operarios de las operaciones afectadas.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/7.svg')

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/8.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La interpretación del resultado depende de quiénes faltan. Si las tres personas ausentes ocupaban operaciones distintas y existen reemplazos polivalentes, el déficit se distribuye en el módulo y puede recuperarse con pocas horas adicionales. Si las tres ocupaban la misma operación crítica, el déficit real es mayor que el calculado, porque esa operación limita la salida de todo el módulo, aunque el resto disponga de capacidad. Por esa razón, el análisis cuantitativo siempre se complementa con la consulta de la matriz de habilidades.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Respuestas ante cambios de disponibilidad

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8.mb-4.mb-lg-0
          p.mb-4 Las respuestas posibles ante una reducción de disponibilidad pueden ordenarse desde las de menor costo hasta las de mayor costo e impacto:
          .bg-color-1.p-4.mb-0
            ul.lista-ul--color.mb-0
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 La reasignación de operarios polivalentes desde operaciones con holgura hacia las operaciones descubiertas.
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 La redistribución de operaciones compatibles entre los operarios presentes del módulo.
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 El traslado temporal de personal desde otro módulo o área con menor carga.
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 La programación de trabajo suplementario dentro de los límites legales.
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 La vinculación de personal temporal cuando la ausencia es prolongada.
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 El ajuste de la secuencia de pedidos o la renegociación de la fecha de entrega.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/9.png')

      .row.justify-content-center.align-items-start.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/10.png')
        .col-sm-12.col-lg-7
          p.mb-3 La elección depende de la duración esperada de la novedad. Una ausencia de un día se resuelve, por lo general, con reasignación y, si es necesario, con unas pocas horas extras. Una licencia de dieciocho semanas exige una solución estructural, porque sostenerla con trabajo suplementario superaría los límites legales y elevaría el costo de manera permanente. La flexibilidad de un sistema de producción de prendas descansa en buena medida en la versatilidad de su personal, lo que convierte el desarrollo de la polivalencia en una forma de prevención frente a los efectos del ausentismo.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Criterio de análisis:] toda respuesta a una novedad debe evaluarse en tres dimensiones: su efecto sobre la meta del día, su costo adicional y su conformidad con los límites de jornada. Una solución que recupera la meta, pero excede el límite de horas extras no es una solución admisible.

      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Formatos y protocolos de reporte

      .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5.mb-5.br-3(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/11.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 Una novedad que no se registra no existe para la planeación ni para la nómina. El control de novedades depende de formatos que capturen la información de manera uniforme y de protocolos que definan quién reporta, a quién, en qué momento y con qué soporte. La calidad de esos instrumentos determina la exactitud del costo de mano de obra, la validez del indicador de ausentismo y la capacidad de la planta para reaccionar a tiempo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Formatos de planeación y novedades

      p.mb-5(data-aos='fade-right') Los formatos asociados a la planeación de la mano de obra cumplen funciones distintas y se complementan entre sí. Algunos registran lo planeado, otros lo ocurrido y otros las decisiones tomadas para ajustar la diferencia.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 13.] Formatos de planeación y control de novedades de personal
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-20 #[b Formato]
              th #[b Finalidad]
              th #[b Campos mínimos]
              th.wcus-20 #[b Periodicidad]
          tbody
            tr
              td #[b Programación de turnos]
              td Registrar el turno, el horario y el día de descanso de cada trabajador.
              td Nombre o código, área, turno, horario, días laborables, día de descanso y ausencias programadas.
              td Semanal o quincenal.
            tr
              td #[b Plan de asignación]
              td Relacionar a cada trabajador con su operación titular y su operación de reemplazo.
              td Nombre o código, módulo, operación titular, operación de reemplazo y nivel de habilidad.
              td Por pedido o cuando cambia la referencia.
            tr
              td #[b Control diario de asistencia]
              td Registrar la presencia, las ausencias y los retardos de cada turno.
              td Fecha, turno, nombre o código, hora de ingreso, hora de salida y tipo de ausencia.
              td Diaria, al inicio y al final del turno.
            tr
              td #[b Reporte de novedades de personal]
              td Documentar cada novedad y su soporte.
              td Fecha del reporte, trabajador, tipo de novedad, fecha de inicio, fecha de terminación, soporte recibido y responsable del reporte.
              td Cada vez que ocurre una novedad.
            tr
              td #[b Registro de trabajo suplementario]
              td Documentar las horas extras de cada trabajador conforme a la ley.
              td Nombre, actividad desarrollada, fecha, número de horas y carácter diurno o nocturno.
              td Diaria, consolidada por periodo de pago.
            tr
              td #[b Ajuste del plan por novedades]
              td Registrar las decisiones adoptadas para compensar una novedad.
              td Novedad que origina el ajuste, déficit estimado, respuesta adoptada, responsable y resultado.
              td Cada vez que se modifica la asignación o el programa.
        .tabla-nota.p-3.bg-color-1
          p.mb-0 Nota. Ley 2466 de 2025 (art. 12) y el Ministerio del Trabajo (2019). Los campos del registro de trabajo suplementario corresponden al contenido mínimo exigido por la ley; los demás campos son una propuesta técnica.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/12.png')
        .col-sm-12.col-lg-7
          p.mb-3 El registro de trabajo suplementario merece atención particular, porque su contenido mínimo está definido por la ley y su ausencia o inexactitud expone al empleador a sanciones. Debe consignar el nombre del trabajador, la actividad desarrollada, el número de horas laboradas y la indicación de si son diurnas o nocturnas (Ley 2466 de 2025, art. 12). Aunque la norma no fija un formato único, la práctica recomendable es diligenciarlo día a día y consolidarlo por periodo de pago, de modo que cada hora pagada en nómina tenga un registro de origen verificable.
          .cajon.color-primario.p-4.mb-0
            p.mb-0 #[b Verificación necesaria:] al cierre de cada periodo, el total de horas extras del registro debe coincidir con el total liquidado en nómina, y ningún trabajador debe aparecer con más de 2 horas extras en un día ni con más de 12 en una semana.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas de diligenciamiento

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8.mb-4.mb-lg-0
          p.mb-4 La utilidad de un formato depende de la manera en que se diligencia. Las siguientes prácticas reducen los errores más frecuentes:
          .bg-color-3.p-4.mb-0
            ul.lista-ul--color.mb-0
              li.d-flex.mb-4
                i.fas.fa-cus
                p.mb-0 Registrar la información en el momento en que ocurre el hecho y no al final de la semana.
              li.d-flex.mb-4
                i.fas.fa-cus
                p.mb-0 Identificar a cada trabajador con un código único que coincida con el utilizado en la nómina.
              li.d-flex.mb-4
                i.fas.fa-cus
                p.mb-0 Expresar las fechas en un formato uniforme y las horas en formato de 24 horas, para distinguir sin ambigüedad las horas diurnas de las nocturnas.
              li.d-flex.mb-4
                i.fas.fa-cus
                p.mb-0 Clasificar cada novedad con una lista cerrada de tipos, en lugar de descripciones libres que dificultan el análisis.
              li.d-flex.mb-3
                i.fas.fa-cus
                p.mb-0 Anotar el soporte recibido o pendiente, con la fecha prevista de entrega cuando no se presente de inmediato.
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 Corregir los errores con trazabilidad, conservando el dato original y registrando quién hizo el cambio y cuándo.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/13.png')

      p.mb-5(data-aos='fade-right') Cuando los formatos son digitales, la lista cerrada de tipos de novedad y las validaciones automáticas de horas permiten detectar inconsistencias en el momento del registro, por ejemplo, una hora de salida anterior a la de entrada o un total de horas extras superior al límite diario. Cuando son físicos, esa verificación depende de la revisión del supervisor antes de entregar la información al área de nómina.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protocolo de reporte de novedades

      .bg-full-width.bg-color-4.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/14.png')
            .col-sm-12.col-lg-8
              p.text-white.mb-4 El protocolo de reporte establece la secuencia de actividades que se cumple desde que se conoce una novedad hasta que su efecto queda incorporado en la planeación y en la nómina. Su propósito es que la información llegue a tiempo a quien debe tomar decisiones y que cada decisión quede documentada.
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.bg-color-2.p-4.h-100
                  h4.mb-3 a-
                  p.mb-0 El trabajador informa la novedad a su supervisor por el canal definido en el reglamento interno, antes del inicio del turno cuando la situación lo permite.

                .tarjeta.bg-color-2.p-4.h-100
                  h4.mb-3 b-
                  p.mb-0 El supervisor registra la novedad en el reporte de novedades y en el control diario de asistencia.

                .tarjeta.bg-color-2.p-4.h-100
                  h4.mb-3 c-
                  p.mb-0 El supervisor estima el efecto de la novedad sobre la meta del turno, con base en la operación afectada y en la matriz de habilidades.

                .tarjeta.bg-color-2.p-4.h-100
                  h4.mb-3 d-
                  p.mb-0 El supervisor aplica la respuesta de primer nivel, como la reasignación de un operario polivalente, o escala la situación al responsable de la programación si el déficit supera la capacidad de respuesta del módulo.

                .tarjeta.bg-color-2.p-4.h-100
                  h4.mb-3 e-
                  p.mb-0 El trabajador o el supervisor entrega el soporte al área de gestión humana dentro del plazo definido.

                .tarjeta.bg-color-2.p-4.h-100
                  h4.mb-3 f-
                  p.mb-0 El área de gestión humana o de nómina valida el soporte y aplica el efecto correspondiente en la liquidación del periodo.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 14.] Responsabilidades en el protocolo de reporte de novedades
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-25 #[b Actor]
              th #[b Responsabilidad principal]
              th.wcus-30 #[b Momento de actuación]
          tbody
            tr
              td #[b Trabajador]
              td Informar oportunamente la novedad y entregar el soporte correspondiente.
              td Antes del turno o tan pronto como sea posible.
            tr
              td #[b Supervisor de módulo]
              td Registrar la novedad, estimar su efecto y aplicar la reasignación inicial.
              td Durante el turno en que se conoce la novedad.
            tr
              td #[b Responsable de la programación]
              td Decidir ajustes que afectan otras áreas, horas extras o fechas de entrega.
              td El mismo día, cuando el déficit supera la capacidad de respuesta del módulo.
            tr
              td #[b Gestión humana]
              td Validar soportes, aplicar efectos en nómina y custodiar la información sensible.
              td Antes del cierre del periodo de pago.
        .tabla-nota.p-3.bg-color-1
          p.mb-0 Nota. La distribución de responsabilidades es una propuesta técnica que cada empresa adapta a su estructura organizacional y a su reglamento interno de trabajo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación y control

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/15.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La efectividad del protocolo se verifica con criterios observables. La oportunidad mide si la novedad se registró antes de que afectara la producción o después; la completitud, si el registro contiene todos los campos y el soporte; la coherencia, si los datos coinciden entre el control de asistencia, el reporte de novedades, el registro de horas extras y la nómina. Una planta que encuentra diferencias recurrentes entre esos registros tiene un problema de control que afecta simultáneamente la planeación, el costo y el cumplimiento legal.

      .row.justify-content-center.align-items-start.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          p.mb-5 El cierre del ciclo ocurre cuando la información de novedades regresa a la planeación. Las tasas de ausentismo calculadas con los registros del mes actualizan la reserva de personal; las horas extras consolidadas demuestran si la capacidad ordinaria es suficiente; y los ajustes documentados revelan qué respuestas funcionaron y cuáles no. Visto así, el control de novedades no se limita a documentar ausencias: alimenta de forma continua el cálculo de requerimientos, la programación de jornadas y el costo de la mano de obra.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Relación operativa:] requerimiento de personal, programación de jornadas, costeo y control de novedades forman un ciclo. Cada periodo de control produce los datos con que se planea el periodo siguiente.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/16.png')
</template>

<script>
export default {
  name: 'Tema4',
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
