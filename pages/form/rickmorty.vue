<template>
  <layout-content page-title="api morty">
    <div class="flex flex-wrap relative mt-2 p-2 justify-center content-center bg-gray-700 h-3/4">
      <div class="principal w-10/12 bg-gray-700 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="w-full bg-gray-500 flex rounded h-36" v-for="item of arrys" :key="item.id">
          <img :src="`${item.image}`" alt class="w-5/12 h-36 rounded-l bg-cover bg-center" />
          <div class="w-full h-36 flex flex-col justify-between px-2 text-white">
            <div class="h-10 leading-none bg-greesn-500">
              <div></div>
              <p class="font-semibold text-sm sm:text-lg">{{ item.name }}</p>
              <div
                class="inline-block text-sm h-2 w-2 bg-green-600 rounded-full"
                v-if="item.status === 'Alive'"
              ></div>
              <div
                class="inline-block text-sm h-2 w-2 bg-red-600 rounded-full"
                v-if="item.status === 'Dead'"
              ></div>
              <div
                class="inline-block text-sm h-2 w-2 bg-gray-400 rounded-full"
                v-if="item.status === 'unknown'"
              ></div>
              <p class="text-xs inline-block font-medium">{{ item.status }} - {{ item.species }}</p>
            </div>

            <div class="h-10 leading-none pt-2 bsg-green-500">
              <p class="text-xs text-gray-400 font-semibold">Last know location:</p>
              <p class="text-xs leading-none text-gray-200 font-semibold">{{ item.location.name }}</p>
            </div>

            <div class="h-12 leading-none pt-2 mb-2">
              <p class="text-xs text-gray-400 font-semibold">First seen in:</p>
              <p class="text-xs text-gray-200 font-semibold">{{ item.origin.name }}</p>
            </div>
          </div>
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
        this.arrys = result.data.results
        const six = this.arrys.slice(1, 7)
        this.arrys = six;
      })
      .catch((err) => {
        this.err = err.response.data.message;
      })

  },
  fetchOnServer: false,
  data() {
    return {
      arrys: []
    }
  }

}
</script>