<template lang="">
    <div class="main">
        <VueTable
            class="table"
            :settings="tableSettings"
            :src="tableData"
            :size="''"
        />
    </div>
</template>
<script>
import VueTable from "@/components/Table/VueTable.vue";
import { resSettings } from "@/vuex/resSettings";

export default {
    name: "IndTable2",
    data() {
        return {
            resSettings,
            tableSettings: {
                templateID: [
                    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
                    112,
                ],
                isHorizontal: true,
            },
        };
    },
    components: {
        VueTable,
    },
    computed: {
        tableData() {
            return {
                superheader: "Таблица 2",
                headers: this.tableSettings.templateID.map(
                    (x) => this.resSettings.find((y) => y.id === x).name
                ),
                data: this.shownData.map((x) => {
                    return x.resources;
                }),
            };
        },
        shownData() {
            return this.$store.getters.getCurrentProd;
        },
    },
};
</script>
<style scoped>
.main {
    /* margin: 10px; */

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table {
    width: fit-content;
}
</style>
