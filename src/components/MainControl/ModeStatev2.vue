<template lang="">
    <div class="mode">
        <div class="mode-display">
            <div
                class="mode__item"
                v-for="mode in modes"
                :key="mode.id"
                @click="setActiveMode(mode.id)"
                :class="{ active: mode.isActive }"
            >
                {{ mode.name }}
            </div>
        </div>
        <!-- /mode-display -->
        <div
            class="mode-settings"
            v-if="this.$store.getters.getCurrentMode === 1"
        >
            <button class="mode-button" @click="incrementTime(-10)">&#60;&#60;&#60;</button>
            <button class="mode-button" @click="incrementTime(-1)">&#60;</button>
            <input
                class="input-range"
                type="range"
                min="0"
                :max="this.$store.getters.getTimeLimit"
                step="1"
                name=""
                id=""
                v-model="rangeValue"
            />
            <button class="mode-button" @click="incrementTime(1)">&#62;</button>
            <button class="mode-button" @click="incrementTime(10)">&#62;&#62;&#62;</button>
        </div>
    </div>
</template>

<script>
import { modes } from "./modes";

export default {
    name: "ModeState",
    data() {
        return {
            modes,
            rangeValue: 0,
            buttonFlag: false,
        };
    },
    methods: {
        setActiveMode(id) {
            this.$store.commit("setMode", id);
            this.modes.forEach((x) => {
                x.isActive = false;
                if (x.id === id) {
                    x.isActive = true;
                }
            });
        },
        incrementTime(num) {
            this.$store.commit("incrementTime", parseInt(num));
            this.buttonFlag = true;
            this.rangeValue = this.$store.getters.getTime;
            this.buttonFlag = false;
        },
    },
    watch: {
        rangeValue() {
            if (this.buttonFlag !== true) {
                this.$store.commit("setTime", parseInt(this.rangeValue));
            }
        },
    },
    mounted() {
        this.modes.at(0).isActive = true;
    },
};
</script>
<style scoped>
.mode {
    position: fixed;
    top: 0;

    height: 40px;
    width: 100%;
    border-bottom: 2px solid black;

    user-select: none;
}

.mode-display {
    width: 100%;
    height: 40px;
    background-color: white;

    display: flex;
    flex-direction: row;
}

.mode__item {
    width: 50%;
    box-sizing: border-box;
    border-right: 2px solid black;

    padding-top: 10px;
    text-align: center;

    text-decoration: none;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.1s linear;
}

.mode__item:last-child {
    border-right: unset;
}

.mode__item.active {
    background-color: #d7d9f4;
}

.mode__item:hover {
    background-color: #d7d9f4;
}

.mode-settings {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 1.5px;
    width: 100%;
    height: 30px;
    background-color: white;
    border-bottom: 2px solid black;
}

.mode-settings * {
    margin: 0 2px;
}

.input-range {
    align-self: center;
    justify-self: center;
    width: 400px;
    cursor: pointer;
}

.mode-button {
    width: 35px;
    height: 20px;
    background-color: white;
    font-weight: bold;
    border-radius: 10px;
    border: 1px black solid;
    cursor: pointer;
}

.mode-button:hover {
    border: 3px black solid;
}

.mode-button:active {
    background-color: lightgray;
}
</style>
