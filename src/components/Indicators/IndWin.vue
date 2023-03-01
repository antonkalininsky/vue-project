<template>
    <div class="main">
        <nav class="nav">
            <div class="area-selector">
                <div class="area-header list-item">
                    Выберите вид для отображения
                </div>
                <ul class="area-list list">
                    <li
                        class="area__item list-item"
                        :class="{ active: area.isActive }"
                        v-for="area in areas"
                        :key="area.id"
                        @click="setArea(area.id)"
                    >
                        {{ area.name }}
                    </li>
                </ul>
            </div>
            <div class="view-selector">
                <div class="view-header list-item">
                    Выберите информацию для отображения
                </div>
                <ul class="view-list list">
                    <li
                        class="view__item list-item"
                        :class="{ active: view.isActive }"
                        v-for="view in views"
                        :key="view.id"
                        @click="setView(view.id)"
                    >
                        {{ view.name }}
                    </li>
                </ul>
            </div>
        </nav>
        <router-view class="indicators" />
    </div>
</template>
<script>
export default {
    name: "IndWin",
    data() {
        return {
            currentArea: "",
            currentView: "",
            areas: [
                {
                    id: 0,
                    name: "Вид 1",
                    isActive: false,
                },
                {
                    id: 1,
                    name: "Вид 2",
                    isActive: false,
                },
                {
                    id: 2,
                    name: "Вид 3",
                    isActive: false,
                },
            ],
            views: [
                {
                    id: 0,
                    name: "Таблица 1",
                    isActive: false,
                },
                {
                    id: 1,
                    name: "Таблица 2",
                    isActive: false,
                },
            ],
        };
    },
    methods: {
        setArea(id) {
            this.currentArea = `${id}`;
            this.areas.forEach((x) => {
                x.isActive = false;
                if (x.id === id) {
                    x.isActive = true;
                }
            });
            if (this.currentView === '') {
                this.setView(0);        
            }
            this.setRoute();
        },
        setView(id) {
            this.currentView = `table${id}`;
            this.views.forEach((x) => {
                x.isActive = false;
                if (x.id === id) {
                    x.isActive = true;
                }
            });
            if (this.currentArea === '') {
                this.setArea(0);        
            }
            this.setRoute();
        },
        setRoute() {
            if (this.currentArea === "" || this.currentView === "") return;
            this.$router.push({
                path: `/user/ind/${this.currentArea}/${this.currentView}`,
            });
        },
    },
    mounted() {
    },
};
</script>
<style scoped>
.main {
    display: grid;
    grid-template-columns: 13% auto;

    background-color: white;
    user-select: none;
}

.nav {
    padding-right: 10px;
    border-right: 2px solid black;
}

.area-selector {
    margin-bottom: 100px;
}

.area-header,
.view-header {
    font-weight: bold;
}

.list {
    list-style-type: circle;
    list-style-position: inside;
}

.list-item {
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    cursor: pointer;
    width: fit-content;
}

.list-item.active {
    text-decoration: underline;
}

.indicators {
    margin-left: 10px;
}
</style>
