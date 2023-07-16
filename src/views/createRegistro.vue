<template>
              
  <slots>
    <Registro></Registro>
  </slots>

  
</template>

<script>
import Registro from "../components/RegistroComponente.vue"
export default {
    name: 'createRegistro',
    components: {
      Registro,
  },
    
}

</script>