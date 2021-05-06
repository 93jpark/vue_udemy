const app = Vue.createApp({
    data() {
        return {
            inputClass : '',
            userType : '',
            isVisible : false,
            inputBackgroundColor: ''
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            }
        },
        getUserType() {
            console.log('checking...')
            if (this.userType === 'user1') {
                console.log('it is user1')
                return 'user1'
            } else if (this.userType === 'user2') {
                console.log('it is user2')
                return 'user2'
            }
        },
        toggleParagraph() {
            if(this.isVisible) {
                return 'hidden';
            } else {
                return 'visible';
            }
        }

    },
    methods: {
        checkUserType(event) {
            this.userType = event.target.value;
        },
        init(event) {
            event.target.value = '';
        },
        tglBtn() {
            this.isVisible = !this.isVisible;
        },
    }
});

app.mount('#assignment');