<template lang="">
    <div class="main">
        <VueTable
            class="table"
            :src="tableData"
            :settings="tableSettings"
            :size="''"
        />
    </div>
</template>
<script>
import VueTable from "@/components/Table/VueTable.vue";

export default {
    name: "IndTable1",
    components: {
        VueTable,
    },
    data() {
        return {
            tableSettings: {
                templateID: [1, 2, 3, 500, 501, 502],
                showHeaders: true
            },
        };
    },
    methods: {
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
        tableData() {
            const dat = [];
            for (const [key, value] of this.plantsNames) {
                const datRow = [];
                datRow.push({
                    id: 1,
                    value: value,
                    status: 0,
                });
                datRow.push({
                    id: 2,
                    value: this.getStateName(key),
                    status: 0,
                });
                datRow.push({
                    id: 3,
                    value: this.getProdStateName(key),
                    status: 0,
                });
                dat.push([
                    ...datRow,
                    ...this.shownData.find((x) => x.plantID === key).res,
                ]);
            }
            return {
                superheader: "Таблица 1",
                headers: [
                    "Хедер 1",
                    "Хедер 2",
                    "Хедер 3",
                    "Хедер 4",
                    "Хедер 5",
                    "Хедер 6",
                ],
                data: dat,
            };
        },
        shownData() {
            return this.$store.getters.getCurrentData;
        },
        plantsNames() {
            return this.$store.getters.getPlantsNames;
        },
        stateNames() {
            return this.$store.getters.getStateNames;
        },
        prodStateNames() {
            return this.$store.getters.getProdStateNames;
        },
    },
};
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
