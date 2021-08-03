<template>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
    components: {
        CoachForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            // this makes browser move on coaches. but, it allows to go back to register form
            //this.$router.push('/coaches');  
            this.$router.replace('/coaches'); // this not allow go back to form, but same function with above one.
        }
    }
}
</script>
