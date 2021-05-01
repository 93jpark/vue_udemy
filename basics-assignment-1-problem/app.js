const app = Vue.createApp({
    data(){
        return {
            myAge: 10,
            myName: 'Joonwoo Park',
            imgURL: 'https://cdn.lifestyleasia.com/wp-content/uploads/2018/08/10161743/polo-bear-polo-equipment-dick-tahsin-1024x683.jpg'
        };
    },
    methods: {
        getRanNum(){
            const randomNumber = Math.random();
            return randomNumber;
        }
    }

});

app.mount("#assignment");