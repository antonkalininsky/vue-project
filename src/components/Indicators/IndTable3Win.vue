<template lang="">
    <div>
        IndTable3Win
        <br>
        your id is {{ $route.params.id }}

        <VueTable class="table" />
    </div>
</template>
<script>
import VueTable from "@/components/Table/VueTable.vue";
export default {
    components: {
        VueTable,
    },
    
}
</script>
<style lang="">
    
</style>