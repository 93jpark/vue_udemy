<template>
    <section>
        <header>
            <h2>Props & Custom Events</h2>
        </header>
        <active-user v-on:add-user="addUser"></active-user>
        <user-data
            v-for="user in users"
            v-bind:key="user.username"
            v-bind:username="user.username"
            v-bind:age="user.age"
        ></user-data>

    </section>
</template>

<script>
export default {
    data() {
        return {
            users : [
                {
                    username: 'John Doe',
                    age: 30
                },
                {
                    username: 'Rachael Lee',
                    age: 22
                },
            ]
        };
    },
    methods: {
        addUser(name, age) {
            const newUser = {
                username: name,
                age: parseInt(age)
            }
            this.users.push(newUser);
        }
    }
}
</script>

<style>
header h2 {
    margin: auto;
    width: 50%;
    padding: 15px;
    text-align: center;
    background-color: salmon;
    border-radius: 50px 50px;
}
#app div {
    padding: 15px;
    line-height: 1.5;
    text-align: center;
    margin: 1rem auto;
    border: 1px solid black;
    width: 30%;
    border-radius: 50px 50px;
}
#app active-user div {
    padding: 20px;
}
</style>