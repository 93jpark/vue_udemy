<template>
    <div>
        <form v-on:submit.prevent="submitData">
            <label>user name </label>
            <input type="text" v-model="username"><br>
            <label>age </label>
            <input type="text" v-model="age"><br>
            <button>submit</button>
        </form>
    </div>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            username: '',
            age: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-user',
                this.username,
                this.age
            )
        }
    }
}
</script>