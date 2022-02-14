<template>
  <div class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
    <div class="flex flex-col mx-8 my-4 space-y-4">
      <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 bg-gray-800 px-3 py-2">
        <div class="bg-gray-500 text-white rounded" v-for="item of arrys" :key="item.id">
          <div class="flex justify-between">
            <img :src="`${item.image}`" alt class="w-32 h-36 rounded-l bg-cover bg-center" />
            <div class="w-full flex flex-col justify-between text-white">
              <div class="h-10 leading-none bg-greesn-500 mx-2">
                <p class="font-semibold text-sm lg:text-base">{{ item.name }}</p>
                <div
                  class="inline-block h-2 w-2 text-sm rounded-full"
                  :class="item.status === 'Alive' ? 'bg-green-500 ' : item.status === 'Dead' ? 'bg-red-500' : item.status === 'unknown' ? ' bg-gray-400' : ''"
                ></div>
                <p class="text-xs inline-block font-medium">{{ item.status }} - {{ item.species }}</p>
              </div>

              <div class="h-10 leading-none pt-2 mx-2 bsg-green-500">
                <p class="text-xs text-gray-400 font-semibold">Last know location:</p>
                <p class="text-xs leading-none text-gray-200 font-semibold">{{ item.location.name }}</p>
              </div>

              <div class="h-12 leading-none pt-2 mb-2 mx-2">
                <p class="text-xs text-gray-400 font-semibold">First seen in:</p>
                <p class="text-xs text-gray-200 font-semibold">{{ item.origin.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        this.arrys = result.data.results.slice(1, 7)
      })
      .catch((err) => {
        console.error(this.err = 'error promise')
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