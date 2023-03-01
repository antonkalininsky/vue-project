<template>
    <div class="plant__item" :style="plantStyling(id)">
        <strong>{{ plantsNames.get(id) }}</strong>
        <p class="plant-state">
            <u>Инфо1</u>:
            {{ getStateName(id) }}
        </p>
        <p class="cont-state">
            <u>Инфо2</u>:
            {{ getProdStateName(id) }}
        </p>
        <div class="plant-buttons">
            <button
                class="plant-button"
                v-if="getDisplaySettings(id).res"
                @click="changeRoute('/res', id)"
            >
                Ресурсы
            </button>
            <button
                class="plant-button"
                v-if="getDisplaySettings(id).graph"
                @click="changeRoute('/graph', id)"
            >
                График
            </button>
            <button
                class="plant-button"
                v-if="getDisplaySettings(id).param"
            >
                Параметры
            </button>
        </div>
        <!-- plant-buttons -->
    </div>
    <!-- plant__item -->
</template>

<script>

export default {
    name: 'PlantUnit',
    props: {
        id: Number
    },
    data() {
        return {
        }
    },
    methods: {
        changeRoute(link, id) {
            this.$store.commit("setRoute", link);
            this.$router.push({
                path: link,
                query: {
                    id: id,
                },
            });
        },
        colorizePlant(state) {
            if ((state === 0) | (state === 2)) {
                return "#ddd";
            } else if (state === 1) {
                return "lightgreen";
            } else if (state === 3) {
                return "yellow";
            }
        },
        plantStyling(id) {
            return {
                "grid-column": this.plantsSettings.find((x) => x.plantID === id)
                    .pos.X,
                "grid-row": this.plantsSettings.find((x) => x.plantID === id)
                    .pos.Y,
                "background-color": this.colorizePlant(
                    this.shownData.find((x) => x.plantID === id).state
                ),
            };
        },
        getDisplaySettings(id) {
            return this.plantsSettings.find((x) => x.plantID === id).display;
        },
        getStateName(id) {
            return this.stateNames.get(
                this.shownData.find((x) => x.plantID === id).state
            );
        },
        getProdStateName(id) {
            return this.prodStateNames.get(
                this.shownData.find((x) => x.plantID === id).containerContent
            );
        },
    },
    computed: {
        shownData() {
            return this.$store.getters.getCurrentData;
        },
        plantsNames() {
            return this.$store.getters.getPlantsNames;
        },
        stateNames() {
            return this.$store.getters.getStateNames;
        },
        plantsSettings() {
            return this.$store.getters.getPlantsSetting;
        },
        prodStateNames() {
            return this.$store.getters.getProdStateNames;
        }
    },
};
</script>

<style scoped>
.plant__item {
    box-sizing: border-box;

    position: relative;
    width: 200px;
    height: 120px;
    background-color: white;
    outline: 2px solid black;

    padding-top: 10px;
    text-decoration: none;
    text-align: center;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
}

.plant-state {
    margin-top: 5px;
    font-size: 12px;
}

.cont-state {
    margin-top: 5px;
    font-size: 12px;
}

.plant-buttons {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.plant-button {
    width: 33.333%;
    height: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
}
</style>
