<template>
  <div
    class="
      flex flex-row
      font-body
      text-sm
      min-w-screen min-h-screen
      bg-gray-100
      text-gray-900
    "
  >
    <!-- <layout-submenu /> -->
      <nuxt class="flex-1" />
  </div>
</template>
<script>
// import layoutSubmenu from "../components/layout/";
export default {
  name: "DefaultLayout",
  components: {
    // layoutSubmenu,
  },
};
</script>