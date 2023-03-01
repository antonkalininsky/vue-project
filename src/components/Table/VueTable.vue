<template>
    <table class="table" :style="{ 'font-size': tableSize.fontSize + 'px' }">
        <!-- superheaders -->
        <tr class="table-superheader" v-if="src.superheader !== ''">
            <td :colspan="colspan">
                {{ src.superheader }}
            </td>
        </tr>
        <!-- headers -->
        <tr class="table-header" v-if="settings.showHeaders">
            <td v-for="header in headers" :key="header">
                {{ header }}
            </td>
        </tr>
        <!-- empty message -->
        <tr v-if="data.length === 0 && !settings.isHorizontal">
            <td :colspan="colspan">Данные для отображения отсутствуют</td>
        </tr>
        <!-- data -->
        <tr v-for="(item1, index1) in data" :key="index1">
            <td
                v-for="(item2, index2) in item1"
                :key="index2"
                :class="{
                    warning: item2.status === 1,
                    danger: item2.status === 2,
                    sideheader: getValueType(item2.id) === 'sideheader',
                }"
            >
                {{ formValue(item2) }}
            </td>
            <td v-if="src.data.length === 0 && settings.isHorizontal">
                Данные для отображения отсутствуют
            </td>
        </tr>
    </table>
</template>

<script>
import { tableDefault } from "@/components/Table/tableDefault";

export default {
    name: "VueTable",
    props: {
        src: {
            type: Object,
            default: tableDefault,
        },
        settings: {
            type: Object,
            default: () => ({
                templateID: undefined,
                isHorizontal: false,
                showHeaders: true,
            }),
        },
        size: {
            type: String,
            default: "normal",
        },
    },
    computed: {
        tableSize() {
            let fontSize = 16;
            if (this.size === "small") {
                fontSize = 14;
            }
            if (this.size === "smaller") {
                fontSize = 12;
            }
            return {
                fontSize: fontSize,
            };
        },
        data() {
            let dat = [];
            // Темплейт таблицы - сортировка данных в нужные столбцы
            if (this.settings.templateID === undefined) {
                return this.src.data 
            } else {
                for (const dataRow of this.src.data) {
                    const newDataRow = [];
                    for (let i of this.settings.templateID) {
                        const item = dataRow.find((x) => x.id === i);
                        if (item === undefined) {
                            newDataRow.push({
                                id: 0,
                                value: "-",
                                status: 0,
                            });
                        } else {
                            newDataRow.push(item);
                        }
                    }
                    dat.push(newDataRow);
                }
            }

            // Пересборка если горизонтальная таблица
            if (!this.settings.isHorizontal) {
                return dat;
            } else {
                const newData = [];
                for (const i in this.src.headers) {
                    const row = [];
                    row.push({
                        id: 1,
                        value: this.src.headers[i],
                        status: 0,
                    });
                    for (const d of dat) {
                        row.push(d[i]);
                    }
                    newData.push(row);
                }
                return newData;
            }
        },
        headers() {
            if (!this.settings.isHorizontal) {
                return this.src.headers;
            } else {
                return [];
            }
        },
        colspan() {
            if (!this.settings.isHorizontal) {
                return this.src.headers.length;
            } else {
                return this.src.headers.length + 1;
            }
        }
    },
    methods: {
        formValue(item) {
            if (item.value === -1) {
                return "-";
            }
            switch (this.getValueType(item.id)) {
                case "int":
                    return Math.ceil(item.value);
                case "float":
                    return Number.parseFloat(item.value).toFixed(2);
                case "text":
                case "sideheader":
                case "link":
                default:
                    return item.value;
            }
        },
        getValueType(id) {
            if (id === undefined) {
                return;
            }
            return this.$store.getters.getResMap.find((x) => x.id === id).type;
        },
    },
};
</script>

<style scoped>
.table {
    margin: 0 auto;
    border-collapse: collapse;
    background-color: white;
}

.table td {
    padding: 10px 10px;
    border: 2px solid #35abec;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    /* font-size: 16px; */
}

.table td.warning {
    background-color: rgb(255, 255, 109);
}

.table td.danger {
    background-color: rgb(255, 91, 91);
}

.table td.sideheader {
    font-weight: bold;
}

.table-header td {
    font-weight: bold;
}

.table-superheader td {
    font-weight: bold;
    text-transform: uppercase;
}
</style>
