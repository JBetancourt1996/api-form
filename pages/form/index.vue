<template>
  <section class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 mt-12">
    <!-- Contenedor = container -->
    <div class="container items-center mx-auto px-5 py-12 lg:px-20">
      <!-- style div -->
      <div
        class="flex flex-col w-full max-w-md p-10 mx-auto my-12 transition duration-500 ease-out transform bg-white opacity-80 rounded-lg md:mt-0"
      >
        <div class="flex flex-col">
          <!-- margin 6 -->
          <span class="mx-auto text-lg font-semibold">Datos básicos</span>
          <div class="mt-2">
            <ValidationObserver v-slot="{ invalid }" href="form">
              <form class="space-y-6" @submit.prevent="submit('form', formApi)" :model="formApi">
                <div class="mt-1">
                  <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                    <input
                      v-model="formApi.name"
                      type="=text"
                      name="name"
                      placeholder="Nombre"
                      class="block w-full px-5 py-2 leading-none text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border-2 rounded-lg bg-gray-50"
                    />
                    <span class="text-rose-400 text-base">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class>
                  <ValidationProvider rules="required|email" v-slot="{ errors }">
                    <input
                      v-model="formApi.email"
                      placeholder="Correo"
                      type="text"
                      class="block w-full px-5 py-2 leading-none text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border-2 rounded-lg bg-gray-50"
                    />
                    <span class="text-rose-400 text-base">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mt-1">
                  <ValidationProvider rules="required|digits:8" v-slot="{ errors }">
                    <input
                      v-model="formApi.phone"
                      placeholder="Telefono"
                      class="block w-full px-5 py-2 leading-none text-base placeholder-gray-400 transition duration-500 ease-in-out transform border-2 rounded-lg bg-gray-50"
                    />
                    <span class="text-rose-400 text-base">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div>
                  <button
                    :disabled="invalid"
                    type="submit"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >Enviar</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider,

  },
  fetchOnServer: false,
  data() {
    return {
      dataSave: false,
      value: "",
      message: "",

      formApi: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    submit(formName, formApi) {
      const config = {
        headers: {
          Authorization: " Bearer 11|WtSjq2ZKMApxfJQcnhrKhMpTi8bhiSxaInb0dz1s",
        },
      };


      this.$axios.post("https://prize.manager.orangesoftco.com/api/v1/players", formApi, config).then((res) => {
        this.message = res.data.message;
        console.log(this.message)
        this.reset()



      });

      setTimeout(() => {
        this.dataSave = false;
      }, 4000)



    },
    reset() {
      const a = this.formApi.name = "";
      this.formApi.email = "";
      this.formApi.phone = "";

      return a;
    }
  }
}
</script>