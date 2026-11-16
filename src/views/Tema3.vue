<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-primario
        .titulo-principal__numero
          span 3
        h1 Costeo de la mano de obra

      .row.justify-content-center.align-items-start.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          .bg-color-1.p-4.mb-3
            p.mb-0 El costo laboral proyecta el valor económico de disponer del personal requerido. El salario constituye solo una parte. A él se agregan prestaciones, aportes a la seguridad social, contribuciones parafiscales cuando procedan, recargos, provisiones y otros beneficios contractuales. Omitir estos elementos subestima la necesidad financiera y distorsiona la comparación entre alternativas de programación.
          p.mb-0 La proyección debe distinguir pago al personal, deducciones a cargo de la persona y costos asumidos por el empleador. Descontar del salario una cotización no convierte ese valor en costo patronal; del mismo modo, una provisión contable no representa necesariamente una salida de efectivo en el mismo mes. La hoja de costo debe conservar estas categorías separadas.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/1.png')

      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Salarios y base prestacional

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.svg')
        .col-sm-12.col-lg-11
          p.mb-0 El costo de la mano de obra para el empleador es siempre superior al salario pactado. A la remuneración directa se agregan el auxilio de transporte, las prestaciones sociales, las vacaciones, los aportes a seguridad social y los aportes parafiscales, todos calculados sobre bases que la ley define con precisión. El costeo técnico consiste en identificar cada uno de esos componentes, establecer su base de liquidación y expresarlo como valor mensual o como porcentaje del salario, de modo que el costo total de una persona, un módulo o un pedido pueda proyectarse antes de iniciar la producción.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Salario y pagos que lo constituyen

      .row.justify-content-center.align-items-stretch.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-center
          p.mb-0 El concepto legal de salario va más allá del sueldo básico. Abarca cualquier pago que retribuya el servicio prestado, sea fijo o variable, de modo que las bonificaciones recurrentes, las comisiones, las horas extras y el trabajo en domingos o festivos también tienen carácter salarial (CST, art. 127). Quedan por fuera, en cambio, los pagos esporádicos que el empleador concede voluntariamente y los recursos que entrega para que el trabajador pueda ejecutar su labor, como los viáticos de representación o el transporte destinado al cumplimiento de sus funciones (CST, art. 128).
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/3.png')
        .col-sm-12.col-lg-4
          .bg-color-1.p-4.h-100.d-flex.align-items-center
            p.mb-0 La distinción tiene consecuencias directas sobre el costo. Un pago salarial integra la base de las prestaciones sociales y de los aportes; un pago no salarial, en términos generales, no la integra. Por esa razón, los recargos nocturnos y las horas extras liquidados en el tema anterior no terminan en su valor directo: al ser salario, incrementan las cesantías, la prima y los aportes de seguridad social del periodo en que se causan.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Salario mínimo y auxilio de transporte en 2026

      p.mb-5(data-aos='fade-right') Para el año 2026, el salario mínimo mensual legal vigente es de 1.750.905 pesos, valor fijado por el Decreto 1469 de 2025 y mantenido de forma transitoria por el Decreto 159 de 2026 mientras se resuelve la demanda de nulidad presentada contra el primero ante el Consejo de Estado; el auxilio de transporte es de 249.095 pesos mensuales (Decreto 1470 de 2025). El auxilio de transporte se reconoce a los trabajadores que devengan hasta dos salarios mínimos, es decir, hasta 3.501.810 pesos en 2026. En plantas de confección, donde una proporción importante del personal operativo devenga un salario cercano al mínimo, este auxilio representa un componente significativo del costo y debe incluirse en la proyección.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png')
        .col-sm-12.col-lg-6
          p.mb-4 Aunque el auxilio de transporte no es salario, la ley lo incorpora a la base para liquidar las prestaciones sociales (Ley 1 de 1963, art. 7). En cambio, no integra el ingreso base de cotización a seguridad social ni la base de liquidación de las vacaciones, que se calculan sobre el salario ordinario.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Concepto técnico:] la base prestacional es el valor sobre el cual se liquidan las prestaciones sociales de un trabajador. Para la prima de servicios y las cesantías, comprende el salario devengado, incluidos los pagos salariales variables, más el auxilio de transporte cuando el trabajador tiene derecho a él.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Prestaciones sociales a cargo del empleador

      p.mb-5(data-aos='fade-right') Las prestaciones sociales son pagos que la ley impone al empleador, adicionales al salario, para cubrir riesgos o necesidades del trabajador. En el régimen laboral ordinario, las de mayor incidencia en el costo de la mano de obra son las siguientes:

      .row.justify-content-center.align-items-stretch.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t3/5.svg')
            p.mb-0 La prima de servicios equivale a 30 días de salario por año, pagaderos la mitad a más tardar el 30 de junio y la otra mitad a más tardar el 20 de diciembre (CST, art. 306).

        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-2.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t3/6.svg')
            p.mb-0 Las cesantías equivalen a un mes de salario por cada año de servicio y proporcionalmente por fracción de año (CST, art. 249); el empleador debe consignarlas en el fondo elegido por el trabajador antes del 15 de febrero del año siguiente (Ley 50 de 1990, art. 99).

        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-md-0
          .tarjeta--boton.bg-color-2.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t3/7.svg')
            p.mb-0 Los intereses sobre las cesantías equivalen al 12 % anual sobre el saldo de cesantías causado y se pagan directamente al trabajador (Ley 52 de 1975, art. 1).

        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.bg-color-2.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t3/8.svg')
            p.mb-0 La dotación de calzado y vestido de labor se entrega cada cuatro meses, es decir, tres veces al año, a los trabajadores que devengan hasta dos salarios mínimos y que en la fecha de entrega llevan más de tres meses al servicio del empleador (CST, art. 230).

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/9.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 A estas prestaciones se agregan las vacaciones, que técnicamente son un descanso remunerado y no una prestación, pero que el costeo trata como una provisión porque su valor se causa mes a mes. El trabajador tiene derecho a 15 días hábiles consecutivos de vacaciones remuneradas por cada año de servicio (CST, art. 186), que se pagan con el salario ordinario vigente cuando el trabajador inicia su descanso, sin sumar horas extras ni lo recibido por laborar domingos o festivos (CST, art. 192).

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Expresión porcentual de las prestaciones

      p.mb-5(data-aos='fade-right') Para proyectar costos conviene expresar cada prestación como un porcentaje mensual de su base. La prima y las cesantías equivalen cada una a un mes de base por año, es decir, a 1 ÷ 12 = 8,33 % mensual. Los intereses sobre cesantías equivalen al 12 % anual de las cesantías, lo que corresponde a 8,33 % × 0,12 = 1,00 % mensual de la base. Las vacaciones, calculadas sobre 15 días por cada 360 días de servicio, equivalen a 15 ÷ 360 = 4,17 % mensual del salario ordinario.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 7.] Prestaciones sociales y vacaciones expresadas como porcentaje mensual
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-20 #[b Concepto]
              th #[b Base de liquidación]
              th #[b Porcentaje mensual]
              th #[b Fundamento normativo]
          tbody
            tr
              td #[b Prima de servicios]
              td Salario más auxilio de transporte, cuando aplica.
              td 8,33 %.
              td CST, art. 306.
            tr
              td #[b Cesantías]
              td Salario más auxilio de transporte, cuando aplica.
              td 8,33 %.
              td CST, art. 249; Ley 1 de 1963, art. 7.
            tr
              td #[b Intereses sobre cesantías]
              td Valor de las cesantías causadas.
              td 1,00 % de la base de cesantías.
              td Ley 52 de 1975, art. 1.
            tr
              td #[b Vacaciones]
              td Salario ordinario, sin auxilio de transporte ni trabajo suplementario.
              td 4,17 %.
              td CST, arts. 186 y 192.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .cajon.color-secundario.p-4.p-md-5.mb-0
            p.mb-0 #[b Advertencia técnica:] las provisiones mensuales son una herramienta de proyección y no sustituyen la liquidación legal. Si un trabajador recibe recargos variables durante el año, la base de la prima y de las cesantías se calcula con el promedio de lo devengado, y la provisión debe ajustarse para reflejar ese promedio.

      .row.justify-content-center.align-items-center.bg-color-2.mb-0.g-0.br-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/10.png')
        .col-sm-12.col-lg-7.p-4.p-md-5
          .titulo-tercer-nivel.mb-4
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Salario integral
          p.mb-0 La ley permite pactar por escrito un salario integral cuyo monto no sea inferior a diez salarios mínimos más un factor prestacional no inferior al 30 % de esa cuantía, es decir, al menos trece salarios mínimos; con esta modalidad, el pago mensual cubre por anticipado las prestaciones, los recargos y los demás beneficios, con excepción de las vacaciones (CST, art. 132). En una planta de confección, esta modalidad es infrecuente en el personal operativo y puede encontrarse, ocasionalmente, en cargos directivos. Su efecto sobre el costeo es que las prestaciones no se provisionan por separado, aunque los aportes de seguridad social se liquidan sobre el 70 % del salario integral (Unidad de Gestión Pensional y Parafiscales [UGPP], 2026).

      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Seguridad social, aportes y provisiones

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/11.svg')
        .col-sm-12.col-lg-11
          p.mb-0 Además de las prestaciones, el empleador debe pagar aportes al sistema de seguridad social integral y aportes parafiscales. Los primeros financian la atención en salud, las pensiones y la cobertura de riesgos laborales; los segundos financian las cajas de compensación familiar, el Instituto Colombiano de Bienestar Familiar (ICBF) y el Servicio Nacional de Aprendizaje (SENA). Todos se liquidan mensualmente sobre el ingreso base de cotización, que corresponde al salario devengado en el mes, sin incluir el auxilio de transporte.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/12.png')
        .col-sm-12.col-lg-9
          .row.justify-content-center.align-items-stretch.g-0.mb-5
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img.h-100(src='@/assets/curso/temas/t3/13.svg')
            .col-sm-12.col-lg-7.bg-color-2.p-4
              .titulo-tercer-nivel.mb-3
                img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
                h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aportes a seguridad social
              p.mb-0 La cotización al sistema de salud es del 12,5 % del ingreso base de cotización, de la cual el empleador aporta el 8,5 % y el trabajador el 4 % (Ley 1122 de 2007, art. 10). La cotización al sistema general de pensiones es del 16 %, de la cual el empleador aporta el 75 %, equivalente al 12 % del salario, y el trabajador el 25 %, equivalente al 4 % (Ley 100 de 1993, art. 20, modificado por la Ley 797 de 2003, art. 7). Los trabajadores que devengan cuatro o más salarios mínimos aportan además al Fondo de Solidaridad Pensional, aporte que no constituye costo para el empleador.
          p.mb-0 La cotización al sistema general de riesgos laborales está a cargo exclusivo del empleador y depende de la clase de riesgo en que se clasifique la actividad económica del centro de trabajo. Las tarifas mínimas por clase son del 0,522 % para riesgo I, 1,044 % para riesgo II, 2,436 % para riesgo III, 4,350 % para riesgo IV y 6,960 % para riesgo V (Decreto 1772 de 1994, art. 13). La clase aplicable a una planta de confección se establece a partir de la tabla de clasificación de actividades económicas vigente y del concepto de la administradora de riesgos laborales. Los ejemplos de este apartado utilizan la tarifa de riesgo II como supuesto ilustrativo y no como clasificación obligatoria del sector.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aportes parafiscales y exoneración

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          p.mb-4 Los aportes parafiscales equivalen al 4 % del salario para la caja de compensación familiar, al 3 % para el ICBF y al 2 % para el SENA (Ley 21 de 1982; Ley 89 de 1988). Sin embargo, las sociedades y personas jurídicas contribuyentes del impuesto sobre la renta, así como las personas naturales empleadoras de dos o más trabajadores, están exoneradas del pago de los aportes al SENA, al ICBF y de la cotización del empleador a salud por los trabajadores que devenguen menos de diez salarios mínimos (Estatuto Tributario, art. 114-1). La exoneración no alcanza el aporte a la caja de compensación, que se mantiene en el 4 %.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Condición de aplicación:] la exoneración de aportes no depende del sector económico sino de la naturaleza jurídica del empleador y del salario de cada trabajador. Una misma planta puede liquidar aportes exonerados para sus operarios y aportes completos para un directivo que devengue diez o más salarios mínimos.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/14.png')

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 8.] Aportes a cargo del empleador sobre el ingreso base de cotización
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-20 #[b Aporte]
              th #[b Porcentaje sin exoneración]
              th #[b Porcentaje con exoneración]
              th #[b Fundamento normativo]
          tbody
            tr
              td #[b Salud]
              td 8,5 %.
              td 0 %.
              td Ley 1122 de 2007, art. 10; Estatuto Tributario, art. 114-1.
            tr
              td #[b Pensión]
              td 12 %.
              td 12 %.
              td Ley 100 de 1993, art. 20.
            tr
              td #[b Riesgos laborales]
              td Según clase de riesgo, entre 0,522 % y 6,960 %.
              td Sin cambio.
              td Decreto 1772 de 1994, art. 13.
            tr
              td #[b Caja de compensación familiar]
              td 4 %.
              td 4 %.
              td Ley 21 de 1982.
            tr
              td #[b ICBF]
              td 3 %.
              td 0 %.
              td Ley 89 de 1988; Estatuto Tributario, art. 114-1.
            tr
              td #[b SENA]
              td 2 %.
              td 0 %.
              td Ley 21 de 1982; Estatuto Tributario, art. 114-1.
        .tabla-nota.p-3.bg-color-1
          p.mb-0 #[b Nota.] La exoneración aplica a trabajadores que devengan menos de diez salarios mínimos mensuales y a empleadores que cumplen las condiciones del artículo 114-1 del Estatuto Tributario.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aportes descontados al trabajador

      .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/15.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 Los aportes del trabajador a salud y pensión, el 4 % en cada caso, se descuentan de su salario y no aumentan el costo para el empleador. Su importancia en la planeación es distinta: determinan el salario neto que recibe la persona y deben reflejarse en la nómina. Confundir el costo para el empleador con el salario neto del trabajador es un error frecuente en presupuestos elaborados sin conocimiento de la estructura de la nómina.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Costo mensual total de un trabajador

      p.mb-5(data-aos='fade-right') Con los componentes anteriores puede construirse el costo mensual total de un operario. El ejemplo siguiente considera un trabajador con salario mínimo, una empresa exonerada en los términos del Estatuto Tributario y una tarifa de riesgos laborales de clase II.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 9.] Costo mensual para el empleador de un operario con salario mínimo en 2026
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9.mb-4.mb-lg-0
          .tabla-a.t-cus.mb-0
            table
              thead
                tr
                  th #[b Componente]
                  th #[b Cálculo]
                  th #[b Valor mensual (pesos)]
              tbody
                tr
                  td #[b Salario]
                  td Salario mínimo 2026.
                  td 1.750.905
                tr
                  td #[b Auxilio de transporte]
                  td Valor fijado para 2026.
                  td 249.095
                tr
                  td #[b Pensión]
                  td 1.750.905 × 12 %.
                  td 210.109
                tr
                  td #[b Riesgos laborales]
                  td 1.750.905 × 1,044 %.
                  td 18.279
                tr
                  td #[b Caja de compensación familiar]
                  td 1.750.905 × 4 %.
                  td 70.036
                tr
                  td #[b Cesantías]
                  td 2.000.000 ÷ 12.
                  td 166.667
                tr
                  td #[b Intereses sobre cesantías]
                  td 166.667 × 12 %.
                  td 20.000
                tr
                  td #[b Prima de servicios]
                  td 2.000.000 ÷ 12.
                  td 166.667
                tr
                  td #[b Vacaciones]
                  td 1.750.905 × 15 ÷ 360.
                  td 72.954
                tr
                  td #[b Costo total mensual]
                  td Suma de los componentes.
                  td 2.724.712
            .tabla-nota.p-3.bg-color-1
              p.mb-0 #[b Nota.] No incluye dotación ni pagos variables.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/16.png')

      p.mb-5(data-aos='fade-right') El resultado permite calcular el factor prestacional, que expresa cuántas veces el salario representa el costo total para el empleador.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/17.png')
        .col-sm-12.col-lg-7
          .bg-color-3.p-3.mb-4
            p.text-center.mb-0 #[b Factor prestacional = costo total mensual ÷ salario mensual.]
          p.mb-4 Para el operario del ejemplo, el factor es 2.724.712 ÷ 1.750.905 = 1,556. En otras palabras, por cada peso de salario, la empresa asume aproximadamente 0,56 pesos adicionales en auxilio de transporte, prestaciones, vacaciones y aportes. Si la empresa no estuviera exonerada, el costo mensual ascendería a 2.961.084 pesos y el factor a 1,691, por la suma de los aportes a salud, ICBF y SENA.
          .cajon.color-acento-contenido.p-4.mb-0
            p.mb-0 #[b Lectura del indicador:] el factor prestacional no es una constante del sector. Disminuye a medida que aumenta el salario, porque el auxilio de transporte es un valor fijo que deja de pagarse por encima de dos salarios mínimos, y cambia con la clase de riesgo, la exoneración y los pagos variables de cada periodo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Incidencia de los pagos variables

      .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5.mb-5.br-3(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/18.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column.br-2
          p.mb-0 Los recargos y las horas extras, al ser salario, generan aportes y prestaciones. Para una empresa exonerada y una clase de riesgo II, cada peso pagado por trabajo suplementario o recargo produce costos adicionales de 12 % en pensión, 1,044 % en riesgos laborales, 4 % en caja de compensación, 8,33 % en cesantías, 1 % en intereses sobre cesantías y 8,33 % en prima, es decir, un 34,71 % adicional. Las vacaciones no se afectan, porque se liquidan sin el trabajo suplementario. Aplicado al ejemplo del apartado 2.3, el pago semanal de 126.732 pesos por recargos y horas extras representa un costo total para la empresa de 126.732 × 1,3471 = 170.721 pesos.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Provisiones y su registro

      .row.justify-content-center.align-items-start.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/19.png')
        .col-sm-12.col-lg-7
          p.mb-4 Una provisión es el reconocimiento mensual de una obligación que se pagará en una fecha posterior. Prima, cesantías, intereses y vacaciones se causan día a día, pero se pagan semestral o anualmente o cuando el trabajador disfruta su descanso. Provisionarlas permite que el costo de cada mes refleje lo que realmente consumió la producción de ese mes y evita que los meses de junio, diciembre o febrero aparezcan con costos de mano de obra artificialmente altos. Horngren et al. (2012) señalan que los costos laborales asociados, incluidos los beneficios y las cargas sobre la nómina, deben incorporarse al costo de la mano de obra para que la información de costos sea completa y comparable.
          .cajon.color-secundario.p-4.mb-0
            p.mb-0 #[b Verificación necesaria:] la suma de las provisiones mensuales de un año debe coincidir, con diferencias explicables por cambios de salario o variaciones de pagos salariales, con lo efectivamente pagado por prima, cesantías, intereses y vacaciones. Una diferencia significativa indica errores en la base o en los porcentajes aplicados.

      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Mano de obra directa e indirecta

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/20.svg')
        .col-sm-12.col-lg-11
          p.mb-0 El costo laboral de una planta no se asigna completo a cada prenda de la misma manera. La contabilidad de costos distingue entre la mano de obra directa, que puede identificarse de forma económicamente factible con un producto u orden específica, y la mano de obra indirecta, que participa en la producción sin poder rastrearse de forma práctica hacia unidades concretas (Horngren et al., 2012). La clasificación no depende del cargo sino de la relación del trabajo con el producto y de la capacidad de medirla.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios de clasificación

      p.mb-5(data-aos='fade-right') En confección, la mano de obra directa comprende a quienes transforman físicamente el material en prenda: operarios de máquina, cortadores cuando su tiempo se asocia a la orden, planchadores y operarios de terminación cuyas operaciones tienen tiempo estándar asignado. La mano de obra indirecta comprende a quienes apoyan la producción de manera general: supervisores de módulo, mecánicos, auditores de calidad, programadores de producción, auxiliares de bodega y personal de aseo de planta.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 10.] Clasificación de cargos típicos de una planta de confección según su relación con el producto
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-25 #[b Cargo]
              th.wcus-25 #[b Clasificación habitual]
              th #[b Criterio de clasificación]
          tbody
            tr
              td #[b Operario de confección]
              td Mano de obra directa.
              td Su tiempo se asocia a operaciones con estándar y a órdenes de producción identificables.
            tr
              td #[b Cortador]
              td Mano de obra directa o indirecta.
              td Es directa cuando el tiempo de corte se registra por orden; es indirecta cuando atiende múltiples órdenes sin registro discriminado.
            tr
              td #[b Operario de terminación y empaque]
              td Mano de obra directa.
              td Ejecuta operaciones medibles sobre cada unidad o lote.
            tr
              td #[b Supervisor de módulo]
              td Mano de obra indirecta.
              td Coordina el trabajo de varios operarios sin transformar directamente el producto.
            tr
              td #[b Mecánico de planta]
              td Mano de obra indirecta.
              td Mantiene la maquinaria que utilizan varias órdenes y módulos.
            tr
              td #[b Auditor de calidad]
              td Mano de obra indirecta.
              td Verifica el producto sin agregar transformación física.
            tr
              td #[b Programador de producción]
              td Mano de obra indirecta.
              td Planea y controla el flujo de todas las órdenes de la planta.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .cajon.color-secundario.p-4.p-md-5.mb-0
            p.mb-0 #[b Error de interpretación:] el tiempo ocioso de un operario directo, por ejemplo durante una espera de material o una falla de máquina, no se carga como mano de obra directa del producto, porque no agregó transformación. La práctica contable lo registra como costo indirecto de fabricación (Horngren et al., 2012).

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Proyección del costo de mano de obra directa

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          p.mb-4 La proyección del costo de mano de obra directa para un pedido parte del personal asignado, del costo mensual total de cada trabajador y de la fracción del mes que el pedido ocupa. Se emplea el personal asignado y no el requerido, porque la empresa paga a todos los trabajadores vinculados al módulo, incluidos quienes cubren el ausentismo esperado.
          .bg-color-1.p-4.mb-4
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-cus
                p.mb-0 Costo de mano de obra directa del periodo = personal asignado × costo total mensual por trabajador × (días calendario del periodo ÷ 30).
          p.mb-0 El salario mensual se liquida sobre 30 días; en consecuencia, la fracción se calcula con días calendario. En el pedido de 6.000 camisas, el módulo tiene 31 operarios asignados con salario mínimo y el plazo de 10 días hábiles, en semanas de cinco días, ocupa dos semanas calendario, es decir, 14 días.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/21.png')

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar.hcus-2
            img(src='@/assets/curso/temas/t3/22.svg')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b Datos disponibles:] 31 operarios, costo total mensual de 2.724.712 pesos por operario y 14 días calendario.

        .col-sm-12.col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar.hcus-2
            img(src='@/assets/curso/temas/t3/23.svg')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b Costo mensual del módulo:] 31 × 2.724.712 = 84.466.072 pesos.

        .col-sm-12.col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar.hcus-2
            img(src='@/assets/curso/temas/t3/24.svg')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b Fracción del mes:] 14 ÷ 30 = 0,4667.

        .col-sm-12.col-md-6.col-lg.mb-4.mb-md-0
          .tarjeta-avatar.hcus-2
            img(src='@/assets/curso/temas/t3/25.svg')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b Costo del periodo:] 84.466.072 × 14 ÷ 30 = 39.417.500 pesos.

        .col-sm-12.col-md-6.col-lg
          .tarjeta-avatar.hcus-2
            img(src='@/assets/curso/temas/t3/26.svg')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b Interpretación:] el pedido consume 39.417.500 pesos de mano de obra directa, siempre que no se requieran horas extras ni recargos adicionales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Proyección del costo de mano de obra indirecta

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/27.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La mano de obra indirecta se proyecta con el mismo procedimiento, pero solo se asigna al pedido la proporción del tiempo que cada cargo dedica al módulo. Si el supervisor y el auditor atienden exclusivamente el módulo y el mecánico distribuye su tiempo entre dos módulos, el cálculo es el siguiente, con las mismas condiciones de exoneración y clase de riesgo empleadas para los operarios.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 11.] Proyección mensual de la mano de obra indirecta asignada a un módulo
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Cargo]
              th #[b Salario mensual (pesos)]
              th #[b Costo total mensual (pesos)]
              th #[b Proporción asignada]
              th #[b Costo asignado al módulo (pesos)]
          tbody
            tr
              td #[b Supervisor de módulo]
              td 3.800.000
              td 5.277.339
              td 100 %.
              td 5.277.339
            tr
              td #[b Mecánico de planta]
              td 2.800.000
              td 4.181.667
              td 50 %.
              td 2.090.834
            tr
              td #[b Auditor de calidad]
              td 2.300.000
              td 3.487.280
              td 100 %.
              td 3.487.280
            tr
              td #[b Total]
              td No aplica.
              td No aplica.
              td No aplica.
              td 10.855.453
        .tabla-nota.p-3.bg-color-1
          p.mb-0 Nota. Salarios supuestos con fines ilustrativos; el costo total incluye prestaciones, vacaciones, pensión, riesgos laborales de clase II y caja de compensación. El supervisor no recibe auxilio de transporte por devengar más de dos salarios mínimos.

      .row.justify-content-center.align-items-start.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-4.mb-lg-0
          p.mb-3 Para los 14 días del pedido, la mano de obra indirecta asignada es 10.855.453 × 14 ÷ 30 = 5.065.878 pesos. El costo total de mano de obra del pedido asciende a 39.417.500 + 5.065.878 = 44.483.378 pesos, equivalentes a 44.483.378 ÷ 6.000 = 7.414 pesos por camisa. La mano de obra indirecta representa el 11,4 % del total, proporción que aumenta cuando los módulos son pequeños, porque el costo del supervisor se reparte entre menos operarios.
          .cajon.color-secundario.p-4.mb-0
            p.mb-0 #[b Relación operativa:] si el pedido exige trabajo suplementario, su costo total, incluida la incidencia prestacional, se suma al de la mano de obra directa del periodo. Un pedido que se cumple con horas extras siempre cuesta más que el mismo pedido cumplido en jornada ordinaria con el personal suficiente, salvo que la contratación de personal adicional implique costos fijos superiores al trabajo suplementario requerido.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/28.png')

      .row.justify-content-center.align-items-center.bg-color-2.mb-0.g-0.br-1(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/29.png')
        .col-sm-12.col-lg-7.p-4.p-md-5
          .titulo-tercer-nivel.mb-4
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Limitaciones de la proyección
          p.mb-0 La proyección descrita supone que el personal permanece estable durante el periodo, que la eficiencia real coincide con la planeada y que no existen pagos variables distintos de los previstos. En la práctica, el costo real se aparta de la proyección por ausencias no remuneradas, incapacidades cuyo pago asume parcialmente el sistema de seguridad social, rotación de personal, ajustes salariales y variaciones de eficiencia. El costo proyectado debe contrastarse con la nómina liquidada al cierre de cada periodo, y las diferencias deben explicarse por causa para mejorar la precisión de las proyecciones siguientes.
</template>

<script>
export default {
  name: 'Tema3',
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
