<template>
    <div class="main">
        <nav class="nav">
            <div class="list-header text">Выберите пункт для работы:</div>
            <ul class="list">
                <li
                    class="list-item text"
                    v-for="item in listItems"
                    :key="item.id"
                    :class="{ active: item.isActive }"
                    @click="setView(item.id)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </nav>
        <!-- /nav -->
        <router-view class="work-area" />
    </div>
</template>

<script>
export default {
    name: "TasksWin",
    data() {
        return {
            listItems: [
                {
                    id: 0,
                    name: "Создать",
                    isActive: false,
                    routeName: 'createTask'
                },
                {
                    id: 1,
                    name: "Ваши сообщения",
                    isActive: false,
                    routeName: 'yourTasks'
                },
                {
                    id: 2,
                    name: "Сообщения вам",
                    isActive: false,
                    routeName: 'yourReports'
                },
            ],
        }
    },
    methods: {
        setView(id) {
            this.listItems.forEach((x) => {
                x.isActive = false;
                if (x.id === id) {
                    x.isActive = true;
                    this.$router.push({ name: x.routeName });
                }
            });
        },
    }
};
</script>

<style scoped>
.main {
    display: grid;
    grid-template-columns: 12% auto;
    background-color: white;
}

.nav {
    padding-right: 10px;
    border-right: 2px solid black;
}

.text {
    font-family: Arial, Helvetica, sans-serif;
}

.list-header {
    font-weight: bold;
    margin-bottom: 10px;
}

.list {
    list-style-type: circle;
    list-style-position: inside;
}

.list-item {
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    width: fit-content;
}

.list-item.active {
    text-decoration: underline;
}

.work-area {
    margin-left: 10px;
}
</style>
