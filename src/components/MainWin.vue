<template>
    <div class="main">
        <div class="welcome-msg">
            <h1>Добро пожаловать!</h1>
            <h2>Выберите раздел для просмотра или измените режим работы</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainWin',
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.welcome-msg {
    text-align: center;
    padding-top: 150px;
}

h1,
h2 {
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    margin-bottom: 100px;
}

</style>