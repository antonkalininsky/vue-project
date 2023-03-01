<template>
    <div class="main">
        <h3 class="graph-title" v-if="this.prodIDs.length === 0">Недостаточно данных для отображения!</h3>
        <template v-if="this.prodIDs.length !== 0">
            <div class="graph-box">
                <p> График:
                    <select name="" id="" v-model="currentGraph">
                        <option :value="key" v-for="key in prodIDs" :key="key"> {{ key + 1 }} </option>
                    </select>
                </p>
                <h3 class="graph-title"> {{ graphTitle[currentGraph] }} </h3>
                <Scatter class="graph" :data="dat" :options="options" />
            </div>
        </template>
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Scatter } from 'vue-chartjs'
import { options } from './lineConfig.js'

import * as graph1 from '@/data/graph_1.json'
import * as graph2 from '@/data/graph_2.json'
import * as graph3 from '@/data/graph_3.json'
import * as graph4 from '@/data/graph_4.json'
import * as graph5 from '@/data/graph_5.json'
import * as graph6 from '@/data/graph_6.json'
import * as prodData from '@/data/prodData.json'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export default {
    name: 'LineChart',
    components: {
        Scatter
    },
    data() {
        return {
            prodData,
            timeTriggers: [],
            graphs: [graph1, graph2, graph3, graph4, graph5, graph6],
            options,
            graphTitle: [],
            currentGraph: 0
        }
    },
    computed: {
        dat() {
            if (this.prodIDs.length === 0) {
                return {}
            } else
                return {
                    datasets: [{
                        fill: false,
                        borderColor: '#f87979',
                        backgroundColor: '#f87979',
                        data: this.graphs[this.currentGraph].data
                    }]
                }
        },
        prodIDs() {
            return Array.from(Array(this.timeTriggers.filter(x => x <= this.$store.getters.getTime).length).keys())
        }

    },
    mounted() {
        for (const graph of this.graphs) {
            this.graphTitle.push(graph.headers[1]);
        }

        // console.log(this.prodData);
        for (const data of Array.from(this.prodData)) {
            this.timeTriggers.push(data.creationMoment);
        }
    }
}
</script>

<style scoped>
.main {
    position: relative;

    height: 500px;
    width: 90%;
    background-color: white;
}

.graph-box {
    height: 500px;

}

.graph-title {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

.graph {
    background-color: white;
}
</style>