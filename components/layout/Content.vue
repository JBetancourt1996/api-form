<template>
  <div class="flex flex-col flex-1 p-6 relative h-screen">
    <layout-breadcrumb :path="breadcrumb" />
    <h1 class="uppercase text-lg mb-2">{{ PageTitle }}</h1>
    <slot />
  </div>
</template>

<script>
import LayoutBreadcrumb from "./Breadcrumb";


export default {
  name: "Content",
  components: { LayoutBreadcrumb },
  props: ["PageTitle", "breadcrumb"],
};
</script>
