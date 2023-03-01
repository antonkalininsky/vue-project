<template>
    <div class="main">
        <LineChart class="chart" />
    </div>
</template>

<script>
import LineChart from './LineChart.vue';

export default {
    name: 'GraphWin',
    components: {
        LineChart
    }
}
</script>

<style scoped>
.chart {
    margin: 0 auto;
}
</style>