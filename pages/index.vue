<template>
  <div class="flex">
    <layout-submenu page-name="Principal" :menu="menu" />
    <nuxt-child />
  </div>
</template>

<script>
import LayoutSubmenu from "../components/layout/Submenu";

export default {
  name: "form",

  components: { LayoutSubmenu },
  layout:'login',

  data() {
    return {
      menu: [
     
        
        {
           
          name: "Formulario",
         
          path: "/form",
        },
          {
          
          name: "Rick and morty",
        
          path: "/form/rickmorty",
        },
      
     
      ],
    };
  },
};
</script>
