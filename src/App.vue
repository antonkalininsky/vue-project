<template>
    <router-view />
</template>

<script>
export default {
    name: "App",
    mounted() {
        this.$store.dispatch("timeRunner");
    }
};
</script>

<style>
/* global */
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: white;
}
</style>
