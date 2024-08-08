<template>
    <h1>store test component2</h1>
    <p>count : {{count}} </p>
    <v-btn color="red" @click="incrementCount">increment Count</v-btn>
</template>

<script>
export default{
    data(){
        return{
            count: 0
        }
    },
    methods:{
        incrementCount(){
            this.count++;
        }
    }
}

</script>
