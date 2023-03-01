<template>
    <div class="main">
        <div class="plants-column">
            <div class="plants-header">Предыдущие блоки</div>
            <div class="plants-group">
                <PlantUnit v-for="plant in prevPlants" :key="plant" :id="plant" />
            </div>
        </div>
        <div class="plants-column">
            <div class="plants-header">Текущие блоки</div>
            <div class="plants-group">
                <PlantUnit v-for="plant in currentPlants" :key="plant" :id="plant" />
            </div>
        </div>
        <div class="plants-column">
            <div class="plants-header">Следующие блоки</div>
            <div class="plants-group">
                <PlantUnit v-for="plant in nextPlants" :key="plant" :id="plant" />
            </div>
        </div>
    </div>
</template>

<script>
import PlantUnit from "@/components/Plant/PlantUnit.vue";

export default {
    name: "UchWin",
    data() {
        return {
            currentPlants: [],
            prevPlants: [],
            nextPlants: [],
        };
    },
    components: {
        PlantUnit,
    },
    mounted() {
        for (const id of this.plantsNames.keys()) {
            const pos = this.plantsSettings.find(
                (x) => x.plantID === id
            ).uchPos;
            if (pos === "current") {
                this.currentPlants.push(id);
            } else if (pos === "next") {
                this.nextPlants.push(id);
            } else if (pos === "prev") {
                this.prevPlants.push(id);
            }
        }
    },
    methods: {},
    computed: {
        plantsNames() {
            return this.$store.getters.getPlantsNames;
        },
        plantsSettings() {
            return this.$store.getters.getPlantsSetting;
        },
    },
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.plants-column {
    padding: 0 30px;

    display: grid;
    grid-template-rows: 5% auto;

    height: 100%;
}

.plants-column:first-child {
    border-right: 3px dotted black;
}
.plants-column:last-child {
    border-left: 3px dotted black;
}

.plants-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
}

.plants-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
