<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar conceptos técnicos sobre requerimientos de personal, jornadas, costeo laboral y control de novedades en confección industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué expresa el requerimiento de personal dentro de la planeación de confección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de colores disponibles para exhibición comercial',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad y tipo de recursos humanos necesarios',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La preferencia estética definida por el cliente final',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación física del producto terminado en bodega',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce la relación entre carga productiva, tiempo disponible y perfiles requeridos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 2,
          texto: '¿Qué representa el SAM en la planeación de la mano de obra?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El salario mensual asignado a cada operario',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El sistema administrativo usado para programar turnos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El minuto estándar permitido para fabricar una unidad',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El seguimiento automático de materiales en proceso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se identifica el SAM como base para calcular la necesidad de personal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 3,
          texto:
            '¿Qué define la capacidad operativa de mano de obra en una planta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los minutos estándar que un grupo puede producir',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los uniformes requeridos para cada cargo operativo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los pedidos comerciales registrados durante el mes',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los colores aprobados para una referencia específica',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se relaciona capacidad operativa con tiempo disponible, eficiencia y minutos estándar.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 4,
          texto:
            '¿Por qué no debe planearse el personal únicamente con la capacidad de diseño?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque elimina la necesidad de registrar novedades',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque convierte todas las pausas en producción efectiva',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reemplaza los estándares por metas comerciales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque supone condiciones ideales que no ocurren siempre',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se comprende que la capacidad de diseño no refleja restricciones reales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 5,
          texto:
            '¿Cuál fórmula permite calcular los minutos estándar requeridos para un pedido?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unidades del pedido multiplicadas por SAM de la prenda',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Operarios nominales divididos entre turnos disponibles',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Horas nocturnas multiplicadas por recargo legal',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ausencias programadas divididas entre días hábiles',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce la fórmula básica para calcular la carga estándar del pedido.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 6,
          texto:
            '¿Por qué el requerimiento de operarios debe redondearse hacia arriba?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque la eficiencia histórica siempre supera la meta',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque el ausentismo desaparece al iniciar producción',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque una fracción de persona no puede asignarse',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque los recargos reemplazan el personal faltante',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se comprende que la dotación debe expresarse en personas completas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 7,
          texto:
            '¿Qué permite identificar el requerimiento por operación o tipo de máquina?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El precio comercial final de cada referencia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los perfiles técnicos necesarios para cada proceso',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La fecha exacta de pago de prestaciones',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los colores utilizados en la ficha comercial',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se identifica la necesidad de descomponer la dotación por perfil técnico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 8,
          texto: '¿Qué diferencia al personal nominal del personal disponible?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El disponible corresponde a quienes pueden laborar efectivamente',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El nominal incluye solo trabajadores con turnos nocturnos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El disponible reúne solamente cargos administrativos externos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El nominal descuenta ausencias programadas e imprevistas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se diferencia personal vinculado de personal efectivamente disponible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 9,
          texto:
            '¿Cómo se ajusta el personal a asignar por ausentismo esperado?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Multiplicando el requerimiento por el salario mensual',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dividiendo el requerimiento entre uno menos la tasa',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Restando los días festivos del pedido programado',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sumando todos los recargos al costo directo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se aplica el ajuste correcto para cubrir el ausentismo esperado.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 10,
          texto: '¿Qué indica un nivel alto en una matriz de habilidades?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que la persona ejecuta operaciones críticas con eficiencia superior',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que la persona no ha recibido entrenamiento operativo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el cargo queda excluido de la jornada legal',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que la operación debe retirarse del plan productivo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se interpreta la matriz de habilidades para asignar operaciones críticas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 11,
          texto:
            '¿Qué criterio debe respetarse al asignar personal a operaciones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La apariencia visual del tablero institucional',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La preferencia personal por un horario informal',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación total de relevos entre turnos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La correspondencia entre habilidad y complejidad operativa',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se reconoce la relación entre habilidad, complejidad y asignación operativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la finalidad productiva de programar jornadas en confección?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir únicamente el color de las órdenes productivas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar recargos sin revisar el requerimiento real',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asegurar cobertura continua para la carga prevista',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la matriz de habilidades del personal',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se comprende la programación de jornadas como cobertura de la carga prevista.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 13,
          texto:
            '¿Qué implica abrir un segundo turno en una planta de confección?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar las mismas máquinas durante más horas',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de supervisión técnica',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suprimir el control de calidad del proceso',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir automáticamente los costos laborales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se identifica que el segundo turno amplía el uso de maquinaria instalada.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la jornada ordinaria máxima semanal vigente desde julio de 2026?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuarenta y ocho horas en cualquier distribución semanal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuarenta y dos horas distribuibles en cinco o seis días',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Treinta y seis horas sin descanso semanal remunerado',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cincuenta horas con autorización automática permanente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce la jornada semanal máxima indicada en el componente.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 15,
          texto:
            '¿Qué horario corresponde a la franja nocturna según el componente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De cinco de la tarde a cinco de la mañana',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De ocho de la noche a ocho de la mañana',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De siete de la noche a seis de la mañana',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'De nueve de la noche a siete de la mañana',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se identifica la franja nocturna aplicable para programar turnos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 16,
          texto:
            '¿Qué caracteriza al trabajo suplementario dentro de la programación laboral?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Horas que sobrepasan la jornada pactada o legal',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Horas ordinarias ubicadas dentro de la franja diurna',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pausas activas incluidas en salud ocupacional',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Descansos semanales remunerados por la empresa',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se diferencia el trabajo suplementario de la jornada ordinaria.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 17,
          texto:
            '¿Qué componente debe incluir el costeo laboral además del salario pactado?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el valor comercial de las prendas terminadas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el número de máquinas disponibles',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente el consumo mensual de materiales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Prestaciones, aportes, recargos, provisiones y beneficios',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se reconoce que el costo laboral incluye componentes adicionales al salario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 18,
          texto:
            '¿Qué integra la base prestacional para prima y cesantías cuando aplica?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el auxilio de transporte sin salario devengado',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Salario devengado y auxilio de transporte correspondiente',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente las deducciones de salud y pensión',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente las vacaciones disfrutadas durante el año',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se identifica la base prestacional aplicable a prima y cesantías.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 19,
          texto:
            '¿Qué distingue a la mano de obra directa en una planta de confección?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Apoya la producción sin transformar físicamente materiales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transforma materiales y puede asociarse a órdenes',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Coordina varios módulos sin ejecutar operaciones estándar',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registra novedades sin participar en el proceso productivo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se distingue la mano de obra directa por su relación medible con la orden.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
        {
          id: 20,
          texto:
            '¿Qué función cumple el control de novedades dentro de la planeación laboral?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los formatos usados por gestión humana',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar el cálculo de requerimientos técnicos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asignar recargos sin verificar la jornada legal',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actualizar capacidad, costo, asignación y programación',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se comprende que las novedades actualizan capacidad, costo y programación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente formativo para fortalecer la comprensión técnica.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra apropiación de los contenidos relacionados con planeación de mano de obra, jornadas, costos laborales y control de novedades.',
      mensaje_final_reprobado:
        'No se ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad.',
    },
  }),
}
</script>
