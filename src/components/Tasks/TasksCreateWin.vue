<template lang="">
    <div class="main">
        <form class="task-form" action="">
            <label class="input-block" for=""
                >Заголовок <input class="input" type="text"
            /></label>
            <label class="input-block" for="">
                Раздел
                <select class="input" name="" id="">
                    <option value="">Раздел 1</option>
                    <option value="">Раздел 2</option>
                    <option value="">Раздел 3</option>
                    <option value="">Раздел 4</option>
                </select>
            </label>
            <label class="input-block" for="">
                Кому
                <input class="input" type="text" />
            </label>
            <label class="input-block" for="">
                Дата отправки
                <input class="input" type="date" name="" id="" />
            </label>
            <label class="task-input-label" for="">Текст сообщения</label>
            <textarea
                class="task-input"
                name=""
                id=""
                cols="30"
                rows="10"
            >
            </textarea>
            <input class="input-block" type="button" value="Отправить" />
        </form>
    </div>
</template>

<script>
export default {
    name: "TasksCreateWin",
};
</script>

<style scoped>
/* task-window */
.task-form {
    width: 100vw;
}

.inline {
    display: inline-block;
}

.input-block {
    display: block;
    margin-bottom: 10px;
}

.task-input-label {
    display: block;
}

.task-input {
    width: 800px;
    height: 300px;
    text-align: start;
    resize: none;
} 
</style>
