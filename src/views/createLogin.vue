<template>
    <slot>
        <login></login>     
    </slot>    


</template>

<script>
import login from '../components/LoginComponent.vue'
export default {
    name: 'createLogin',
    components: {
         login,
    },
}
</script>