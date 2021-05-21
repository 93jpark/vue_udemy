<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite === '1' ? '(fav)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>    
</template>

<script>
export default {
    /*
    props: [ // specify all props will be accpeted on this component
        'name',
        'phoneNumber',
        'emailAddress', // JS not accept '-'. so should be camel case.
        'isFavorite'
    ],
    */
   props: {
       name: {
           type: String,
           required: true
       },
       phoneNumber: {
           type: String,
           required: true
       },
       emailAddress: {
           type: String,
           required: true
       },
       isFavorite: {
           type: String,
           required: false,
           default: '0',
           validator: function(value) {
               return value === '1' || value === '0';
           }
       }
   },
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 90',
                    email: 'manuel@localhost.com'
                },
            friendIsFavorite: this.isFavorite,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
            this.phoneNumber
        },
        /* 
            props only can be changed through parent. (unidirectional data flow)
            data pssed from app to friend contact should only be changed in App, not in friendContact.

        */
        toggleFavorite() {
            /*
            if(this.isFavorite === '1') {
                this.isFavorite = 0;    
            } else {
                this.isFavorite = 1;
            }
            */
           if(this.friendIsFavorite === '1') {
                this.friendIsFavorite = '0';    
            } else {
                this.friendIsFavorite = '1';
            }
            
        }
    }
    
};
</script>