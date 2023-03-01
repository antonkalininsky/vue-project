<template>
    <ModeStatev2 class="top-panel" />
    <RouterView class="main-window" :class="{ 'main-window-plus' : toggleMargin  }"/>
    <NavMain class="bot-panel" />
</template>

<script>
import ModeStatev2 from "@/components/MainControl/ModeStatev2.vue";
import NavMain from "@/components/MainControl/NavMain.vue";

export default {
    name: "UserWin",
    components: {
        NavMain,
        ModeStatev2,
    },
    data() {
        return {
            toggleMargin: false
        }
    },
    computed: {
        currentMode() {
            return this.$store.getters.getCurrentMode
        }
    },
    watch: {
        currentMode() {
            if (this.currentMode === 0) {
                this.toggleMargin = false;
            } else {
                this.toggleMargin = true;
            }
        }
    }
};
</script>

<style scoped>
.main-window {
    max-width: 100vw;
    height: 100vw;
    max-height: calc(100vh - 80px);
    height: 100vh;
    margin: 40px 0 40px 0;
    padding: 10px;
    box-sizing: border-box;

    overflow: hidden;
}

.main-window-plus {
    max-height: calc(100vh - 110px);
    margin: 70px 0 40px 0;
}
</style>
