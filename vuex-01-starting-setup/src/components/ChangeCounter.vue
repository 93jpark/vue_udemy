<template>
    <div>
        <button @click="incmt">Add 1</button>
        <button @click="incs({value: 10})">Add +</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     //this.$store.commit('increment');
        //     this.$store.dispatch('increment');
        // },
        // addNum() {
        //     this.$store.commit({
        //             type: 'increase',
        //             value: 10
        //         }  
        //     );
        // }
        // ...mapActions(['increment', 'increase'])
        ...mapActions('numbers',
            {
                incmt: 'increment',
                incs: 'increase'
            }
        )
    }
}
</script>