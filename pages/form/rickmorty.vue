<template>
 <layout-content
    page-title="api morty"
    :breadcrumb="[
      { name: '', to: '/form/rickmorty' },
    ]"
  >
     <NuxtLink class=" py-4 w-24 text-center text-base leading-none rounded  bg-indigo-400" to="/">Principal</NuxtLink>
           <div class=" h-screen flex flex-wrap mt-5 justify-center content-center">
    <div class=" h-5/6 w-2/3 flex  flex-wrap justify-center p-4 gap-6 bg-black text-white">
        <div class=" flex gap-4 py-8 px-8  h-40  w-1/4   text-xs bg-gray-400 " v-for="item  in caracter" :key="item.id <= 6">
           <div class=" "><div><img class="h-24  w-24" v-bind:src="item.image"  alt=""></div></div>
           <div > <div>{{item.name}}</div>
           <div>{{item.status}}</div>
           <div>{{item.location.name}}</div></div>
         
        </div>
    </div>
  </div>
   </layout-content>
</template>

<script>
export default {
    fetch() {
    const result = () => {
      return this.$axios.get("https://rickandmortyapi.com/api/character");
    };

    Promise.all([result()])
      .then((res) => {
        const [result] = res;
           this.caracter = result.data.results
            const sext = this.caracter.slice(1, 7)
            this.caracter = sext;

        
       
      })
      .catch((err) => {
        this.err = err.response.data.message;
      })
      
  },
  data(){
    return{
     caracter:[]
    }
  },
  methods:{
  }

}
</script>