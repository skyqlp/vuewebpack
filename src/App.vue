<template>
    <div class="app">
        <div class="mydiv">{{value}}</div>
        <Mycomponents></Mycomponents>
    </div>
</template>

<script>
import Mycomponents from './components/My-Components.vue'

export default {
    data() {
        return {
            value: '123'
        }
    },
    components: {
        Mycomponents
    }
}
</script>

<style scoped>
    .mydiv {
        font-size: 20px;
        color: red;
    }
</style>