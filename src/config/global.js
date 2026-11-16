export default {
  global: {
    Name: 'Planeación de la mano de obra en confección',
    Description:
      'El componente aborda la determinación del personal requerido en confección según la capacidad operativa, la programación de turnos y jornadas conforme a la legislación laboral colombiana, el costeo de la mano de obra directa e indirecta, y el control de las novedades de personal que afectan la planeación.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Requerimientos de personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Capacidad operativa y necesidades de mano de obra',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Disponibilidad y asignación del personal',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programación de jornadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Turnos, relevos y descansos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Límites legales de la jornada laboral',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Trabajo suplementario y recargos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Costeo de la mano de obra',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Salarios y base prestacional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Seguridad social, aportes y provisiones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Mano de obra directa e indirecta',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Control de novedades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ausentismo y cambios de disponibilidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Formatos y protocolos de reporte',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Ausentismo',
      significado:
        'inasistencia de un trabajador durante el tiempo que el cronograma le asignó, cualquiera que sea su causa, con efecto directo sobre la capacidad disponible.',
    },
    {
      termino: 'Auxilio de transporte',
      significado:
        'pago mensual fijado por el gobierno nacional para quienes devengan hasta dos salarios mínimos, que no es salario, pero integra la base de prima y cesantías.',
    },
    {
      termino: 'Base prestacional',
      significado:
        'valor de referencia sobre el que se liquidan las prestaciones sociales de un trabajador en un periodo determinado.',
    },
    {
      termino: 'Cesantías',
      significado:
        'prestación social equivalente a un mes de salario por año de servicio, que el empleador consigna en un fondo a nombre del trabajador.',
    },
    {
      termino: 'Eficiencia de planeación',
      significado:
        'proporción esperada de minutos de presencia que se convierte en minutos estándar producidos, estimada a partir del desempeño histórico.',
    },
    {
      termino: 'Factor prestacional',
      significado:
        'cociente entre el costo laboral total de un trabajador y su salario, utilizado para proyectar el costo de la mano de obra.',
    },
    {
      termino: 'Hora extra',
      significado:
        'hora trabajada por encima de la jornada ordinaria pactada o de la máxima legal, remunerada con recargo.',
    },
    {
      termino: 'Ingreso base de cotización',
      significado:
        'valor mensual sobre el cual se calculan los aportes a salud, pensión, riesgos laborales y parafiscales.',
    },
    {
      termino: 'Jornada ordinaria',
      significado:
        'tiempo de trabajo convenido entre las partes o, en su defecto, el máximo que permite la ley.',
    },
    {
      termino: 'Mano de obra directa',
      significado:
        'trabajo que transforma físicamente los materiales y puede asociarse de forma medible con una orden o producto.',
    },
    {
      termino: 'Mano de obra indirecta',
      significado:
        'trabajo de apoyo, coordinación o control que interviene en la producción sin poder rastrearse de forma práctica a unidades específicas.',
    },
    {
      termino: 'Matriz de habilidades',
      significado:
        'registro que cruza a cada trabajador con las operaciones o máquinas que domina y con su nivel de desempeño en cada una.',
    },
    {
      termino: 'Polivalencia',
      significado:
        'capacidad de un operario para ejecutar varias operaciones o manejar distintos tipos de máquina con calidad conforme y rendimiento aceptable.',
    },
    {
      termino: 'Provisión',
      significado:
        'reconocimiento periódico de una obligación laboral que se causa de manera continua y se paga en una fecha posterior.',
    },
  ],
  referencias: [
    {
      referencia:
        'Babu, V. R. (2012). Industrial engineering in apparel production [Ingeniería industrial en la producción de prendas de vestir]. Woodhead Publishing India.',
    },
    {
      referencia:
        'Código Sustantivo del Trabajo [CST]. (1950). Decretos Ley 2663 de 1950 y 3743 de 1950. Diario Oficial No. 27.622 (7 de junio de 1951).',
    },
    {
      referencia:
        'Decreto 159 de 2026. (2026, 19 de febrero). Por el cual se fija transitoriamente el salario mínimo mensual legal del año 2026. Diario Oficial No. 53.403.',
    },
    {
      referencia:
        'Decreto 780 de 2016. (2016, 6 de mayo). Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Diario Oficial No. 49.865.',
    },
    {
      referencia:
        'Decreto 1469 de 2025. (2025, 29 de diciembre). Por el cual se fija el salario mínimo mensual legal. Diario Oficial No. 53.350.',
    },
    {
      referencia:
        'Decreto 1470 de 2025. (2025, 29 de diciembre). Por el cual se fija el auxilio de transporte. Diario Oficial No. 53.350.',
    },
    {
      referencia:
        'Decreto 1772 de 1994. (1994, 3 de agosto). Por el cual se reglamenta la afiliación y las cotizaciones al Sistema General de Riesgos Profesionales. Diario Oficial No. 41.477.',
    },
    {
      referencia:
        'Estatuto Tributario. Decreto 624 de 1989. (1989, 30 de marzo). Por el cual se expide el Estatuto Tributario de los Impuestos Administrados por la Dirección General de Impuestos Nacionales. Diario Oficial No. 38.756.',
    },
    {
      referencia:
        'Heizer, J., Render, B., & Munson, C. (2020). Operations management: Sustainability and supply chain management [Administración de operaciones: sostenibilidad y gestión de la cadena de suministro] (13.ª ed., edición global). Pearson.',
    },
    {
      referencia:
        'Horngren, C. T., Datar, S. M., & Rajan, M. V. (2012). Contabilidad de costos: Un enfoque gerencial (14.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kanawaty, G. (Ed.). (1996). Introducción al estudio del trabajo (4.ª ed. rev.). Oficina Internacional del Trabajo.',
    },
    {
      referencia:
        'Ley 1 de 1963. (1963, 1 de febrero). Por la cual se dictan normas sobre reajustes de salarios, se conceden unas autorizaciones al Gobierno y se dictan otras disposiciones. Diario Oficial No. 31.004.',
    },
    {
      referencia:
        'Ley 21 de 1982. (1982, 22 de enero). Por la cual se modifica el régimen del subsidio familiar y se dictan otras disposiciones. Diario Oficial No. 35.939.',
    },
    {
      referencia:
        'Ley 50 de 1990. (1990, 28 de diciembre). Por la cual se introducen reformas al Código Sustantivo del Trabajo y se dictan otras disposiciones. Diario Oficial No. 39.618.',
    },
    {
      referencia:
        'Ley 52 de 1975. (1975, 18 de diciembre). Por la cual se reconocen los intereses anuales a las cesantías de los trabajadores particulares. Diario Oficial No. 34.475.',
    },
    {
      referencia:
        'Ley 89 de 1988. (1988, 29 de diciembre). Por la cual se asignan recursos al Instituto Colombiano de Bienestar Familiar y se dictan otras disposiciones. Diario Oficial No. 38.635.',
    },
    {
      referencia:
        'Ley 100 de 1993. (1993, 23 de diciembre). Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. Diario Oficial No. 41.148.',
    },
    {
      referencia:
        'Ley 797 de 2003. (2003, 29 de enero). Por la cual se reforman algunas disposiciones del sistema general de pensiones previsto en la Ley 100 de 1993 y se adoptan disposiciones sobre los regímenes pensionales exceptuados y especiales. Diario Oficial No. 45.079.',
    },
    {
      referencia:
        'Ley 1122 de 2007. (2007, 9 de enero). Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones. Diario Oficial No. 46.506.',
    },
    {
      referencia:
        'Ley 1280 de 2009. (2009, 5 de enero). Por la cual se adiciona el numeral 10 del artículo 57 del Código Sustantivo del Trabajo y se establece la licencia por luto. Diario Oficial No. 47.223.',
    },
    {
      referencia:
        'Ley 1581 de 2012. (2012, 17 de octubre). Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587.',
    },
    {
      referencia:
        'Ley 2101 de 2021. (2021, 15 de julio). Por medio de la cual se reduce la jornada laboral semanal de manera gradual, sin disminuir el salario de los trabajadores y se dictan otras disposiciones. Diario Oficial No. 51.736.',
    },
    {
      referencia:
        'Ley 2114 de 2021. (2021, 29 de julio). Por medio de la cual se amplía la licencia de paternidad, se crea la licencia parental compartida, la licencia parental flexible de tiempo parcial, se modifica el artículo 236 y se adiciona el artículo 241A del Código Sustantivo del Trabajo, y se dictan otras disposiciones. Diario Oficial No. 51.750.',
    },
    {
      referencia:
        'Ley 2466 de 2025. (2025, 25 de junio). Por medio de la cual se modifica parcialmente normas laborales y se adopta una reforma laboral para el trabajo decente y digno en Colombia. Diario Oficial No. 53.160.',
    },
    {
      referencia:
        'Mesa, F. R., & Kaempffer, A. M. (2004). 30 años de estudio sobre ausentismo laboral en Chile: Una perspectiva por tipos de empresas. Revista Médica de Chile, 132(9), 1100–1108.',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019, 13 de febrero). Resolución 0312 de 2019: Por la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Diario Oficial No. 50.872.',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2025, 22 de septiembre). Circular 0102 de 2025: Circular interna sobre el trámite de autorización de trabajo suplementario, Ley 2466 de 2025.',
    },
    {
      referencia:
        'Unidad de Gestión Pensional y Parafiscales (UGPP). (2026). ABC trabajadores dependientes que devengan salario integral.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
