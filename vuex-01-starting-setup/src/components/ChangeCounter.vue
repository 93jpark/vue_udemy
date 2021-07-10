<template>
    <div>
        <button @click="addOne">Add 1</button>
        <button @click="addNum">Add +</button>
    </div>
</template>

<script>
export default {
    methods: {
        addOne() {
            this.$store.commit('increment');
        },
        addNum() {
            this.$store.commit('increase', {
                    type: number,
                    value: 10
                }  
            );
        }
        
    }
}
</script>