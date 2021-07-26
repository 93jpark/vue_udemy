export default {
    increment(context) {
        console.log('below is inside of context')
        console.log(context);
        setTimeout(function (){
            context.commit('increment');
        }, 2000);
    },
    increase(context, payload) {
        setTimeout(function (){
            context.commit('increment', payload);
        }, 2000);
    }, 
}