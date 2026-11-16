<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un esquema jerárquico sobre planeación de la mano de obra en confección, organizado en cuatro apartados principales: requerimientos de personal, programación de jornadas, costeo de la mano de obra y control de novedades. Incluye temas sobre capacidad operativa, necesidades de mano de obra, disponibilidad y asignación del personal, turnos, relevos, descansos, límites legales de la jornada laboral, trabajo suplementario, recargos, salarios, base prestacional, seguridad social, aportes, provisiones, mano de obra directa e indirecta, ausentismo, cambios de disponibilidad, formatos y protocolos de reporte.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema jerárquico sobre planeación de la mano de obra en confección. Organiza los contenidos en cuatro apartados: requerimientos de personal, programación de jornadas, costeo de la mano de obra y control de novedades, e incluye temas como capacidad operativa, turnos, salarios, seguridad social, ausentismo y protocolos de reporte.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
