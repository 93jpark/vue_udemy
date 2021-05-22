<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
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
   props: { // props can be validated thorugh making them as object
        id: {
            type: String,
            required: true
        },
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
           type: Boolean,
           required: false,
           default: false,
           
        }
   },
    //emits: ['toggle-favorite'], // simple definition of emits
   // emits are user-defined event can let parent can listen event
   emits: {
       'toggle-favorite' : function(id) {
           if (id) {
               return true;
           } else {
               console.warn('ID is missing!');
               return false;
           }
       },
       'delete' : function() {
           return true;
       },
   },
    data() {
        return {
            detailsAreVisible: false,
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
           /*
           if(this.friendIsFavorite === '1') {
                this.friendIsFavorite = '0';    
            } else {
                this.friendIsFavorite = '1';
            }
            */
           this.$emit('toggle-favorite', this.id); // parent component can listen this event through emit method.
            
        },
        deleteFriend() {
            this.$emit('delete', this.id);
        }
    }
    
};
</script>