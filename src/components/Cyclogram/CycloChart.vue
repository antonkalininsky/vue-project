<template>
  <div class="main">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './cycloConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'CycloChart',
  components: {
    Bar
  },
  data() {
    return chartConfig
  }
}
</script>

<style scoped>
.main {
  height: 470px;
  width: 900px;
  background-color: white;
}
</style>