<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 La confección industrial es una actividad intensiva en trabajo humano. Aunque la maquinaria de coser ha incorporado automatismos de corte de hilo, posicionamiento de aguja y control electrónico de puntada, la manipulación de las piezas, su alineación y su conducción bajo el prensatelas siguen dependiendo de la habilidad de cada operario. Por esa condición, el número de personas, su distribución en el tiempo y su costo determinan en gran medida la capacidad de una planta, su cumplimiento de entregas y su competitividad.

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png') 
      .col-sm-12.col-lg-7
          p.mb-3 Planear la mano de obra exige integrar variables de naturaleza distinta. Los minutos estándar de cada prenda, la eficiencia histórica de los módulos y el ausentismo esperado definen cuántas personas se necesitan. La jornada máxima, las franjas diurna y nocturna, los descansos y los límites al trabajo suplementario, fijados por la legislación laboral colombiana, definen cómo pueden programarse. Salarios, prestaciones, aportes y recargos definen cuánto cuesta esa programación. Un error en cualquiera de esos frentes se traslada a los demás: una eficiencia sobrestimada produce déficit de personal, el déficit obliga a programar horas extras, y las horas extras elevan el costo y pueden exceder los límites legales.

          p.mb-0 El recorrido técnico avanza desde la cuantificación del personal requerido según la capacidad operativa y su  ajuste por disponibilidad, hacia la programación de turnos, relevos y descansos dentro del marco normativo vigente en 2026. El control de las novedades de personal cierra el ciclo, porque convierte el registro diario de ausencias y ajustes en la información con la que se planea el periodo siguiente.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
