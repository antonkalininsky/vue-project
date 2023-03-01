<template>
    <div class="main">
        <CycloChart class="cyclo" />
        <div class="legend-wrap">
            <div class="legend">
                <div class="legend__item">
                    <div class="color-box color-box--green"></div>
                    <div class="legend-text">Режим 1</div>
                </div>
                <div class="legend__item">
                    <div class="color-box color-box--yellow"></div>
                    <div class="legend-text">Режим 2</div>
                </div>
                <div class="legend__item">
                    <div class="color-box color-box--red"></div>
                    <div class="legend-text">Режим 3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CycloChart from "./CycloChart.vue";

export default {
    name: "CycloWin",
    components: {
        CycloChart
    },
};
</script>

<style scoped>
.main {
    width: 100%;
}

.cyclo {
    width: 95%;
    margin: 0 auto 0 auto;
}

.legend-wrap {
    width: 100%;
    margin: 20px 0 0 0;
    text-align: center;
}

.legend {
    background-color: white;
    width: 800px;
    height: 65px;
    margin: 0 auto;
    padding-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.legend__item {
    display: flex;
    flex-direction: row;
    justify-content: left;
}

.color-box {
    width: 40px;
    height: 40px;
    background-color: grey;
}

.color-box--green {
    background-color: green;
}

.color-box--yellow {
    background-color: yellow;
}

.color-box--red {
    background-color: red;
}

.legend-text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 15px 0 0 10px;
}
</style>
