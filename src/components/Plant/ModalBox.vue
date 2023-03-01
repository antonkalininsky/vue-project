<template>
    <Teleport to='body'>
        <div v-if="openModal" class="modal">
            <h3 class="modal-header">Введите параметры</h3>
            <div class="inputs">
                <p class="input__item"><span class="input-label">Параметр 1</span><input type="text" name="" id="" class="modal-input"></p>
                <p class="input__item"><span class="input-label">Параметр 2</span><input type="text" name="" id="" class="modal-input"></p>
                <p class="input__item"><span class="input-label">Параметр 3</span><input type="text" name="" id="" class="modal-input"></p>
            </div>
            <div class="buttons">
                <button @click="openModal = false" class="modal-button">Принять</button>
                <button @click="openModal = false" class="modal-button">Отмена</button>
            </div>
        </div>
    </Teleport>
</template>

<script>

export default {
    name: 'ModalBox',
    data() {
        return {
            openModal: false
        }
    },
    methods: {
        toggleModal() {
            this.openModal = !this.openModal;
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);

    text-align: center;

    width: 350px;
    height: 200px;
    background-color: white;
    outline: 2px solid black;
}

.modal-header {
    margin: 20px 0;
}

.inputs {
    margin-bottom: 20px;
}

.input__item {
    margin-bottom: 5px;
}

.input-label {
    margin-right: 20px;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
}
.modal-button {
    cursor: pointer;
    width: 80px;
    height: 30px;
}
</style>