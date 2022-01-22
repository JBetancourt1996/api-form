<template>
  <div
    class="
      flex flex-col
      items-center
      py-6
      px-4
       bg-gradient-to-r from-indigo-500
      w-50
      border-r
      space-y-14
      h-screen
    "
  >
    <div class="flex items-center w-full space-x-2">
   
      <span class="font-semibold text-lg leading-none">{{ pageName }}</span>
    </div>
    <ul class="flex flex-col w-full space-y-1 bg-slsate-900">
      <nuxt-link
        v-for="(m, k) of menu"
        :key="k"
        tag="li"
        :to="{ path: m.path }"
        class="
          flex
       
          items-center
          py-3
          px-3
          hover:bg-blue-200 hover:text-blue-800
          text-gray-900 text-base
          rounded
          cursor-pointer
          space-x-2
        "
    
      >
        <span class="leading-none">{{ m.name }}</span>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Submenu",

  props: ["pageName", "menu"],

  methods: {


},
}
</script>