<template>
  <layout-content
    page-title="Formulario"
    :breadcrumb="[
      { name: '', to: '/form' },
    ]"
  >
     <NuxtLink class=" py-4 w-24 text-center leading-none rounded text-base  bg-indigo-400" to="/">Principal</NuxtLink>
   <section class="">
    <!-- Contenedor = container -->
    <div class="container items-center px-5 py-12 lg:px-20">
      <!-- style div -->
      <div
        class="
          flex flex-col
          w-full
          max-w-md
          p-10
          mx-auto
          my-12
          transition
          duration-500
          ease-out
          transform
          bg-white
          rounded-lg
          md:mt-0
        "
      >
        <div class="w-full bg-gray-s700 flex justify-center">
         
        </div>
        <div class="w-full mt-8 bg-gray-700 flex justify-center"></div>
        <!-- div margin 8 -->
        <div class="justify-centers bg-wbluse-300">
          <!-- margin 6 -->
          <div class="mt-6 bg-wblue-600">
            <ValidationObserver  v-slot="{ passes }"  href="observer" tag="form" @submit.prevent="submit()">
                <form   class='space-y-6' >
              <div class="mt-1">
               <ValidationProvider rules="required|alpha" v-slot="{errors}">
                   <input
                 v-model="formApi.nameOne"
                  type="=text"
                  name="name"
                  placeholder="Nombre"
                  class="
                    block
                    w-full
                    px-5
                    py-2
                    leading-none
                    text-base text-neutral-600
                    placeholder-gray-300
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 
                    rounded-lg
                    bg-gray-50
                  "
                />
                   <span>{{errors[0]}}</span>
               </ValidationProvider>
              </div>
              
              <div class="">
                  
                  
                        <ValidationProvider rules="required|email" v-slot="{errors}">
                             <input v-model="formApi.email" v-validate="'email'" data-vv-as="email" name="email_field" placeholder="Correo" type="text" 
                              class="
                    block
                    w-full
                    px-5
                    py-2
                    leading-none
                    text-base text-neutral-600
                    placeholder-gray-300
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 
                    rounded-lg
                    bg-gray-50
                  ">
                    <span>{{errors[0]}}</span>
                        </ValidationProvider>  
                  
              </div>
              <div class="mt-1">
             <ValidationProvider rules="required|phone" v-slot="{errors}">
                         <input
                         v-model="formApi.phone"
                  type="tel"
                  v-validate="'numeric'" data-vv-as="field" name="numeric_field"
                 
                  placeholder="Telefono"
                  id=""
                  class="
                    block
                    w-full
                    px-5
                    py-2
                    leading-none
                    text-base text-neutral-600
                    placeholder-gray-300
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 
                    rounded-lg
                    bg-gray-50
                  "
                />
                <span>{{errors[0]}}</span>
             </ValidationProvider>
              </div>
              <div>
                <button
                 :disabled="passes"
                  type="submit"
                  class="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-10
                    py-4
                    text-base
                    font-medium
                    text-center text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-green-600
                    rounded-xl
                    hover:bg-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
                >
                  Sign in
                </button>
              </div>
            </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </section>
  </layout-content>
</template>
<script>

import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";

export default  {
  components:{ ValidationProvider,
  ValidationObserver},
  
 data(){
   return{
       formApi:{
          nameOne:'',
     email:'',
      phone:''
       }
   }
 },
methods:{
 
  async submit () {
      const isValid = await this.$refs.form.validate();
      if (console.log(!isValid)) {
        // ABORT!!
      }

 
 }

  
}
}
</script>