<template>
  <div separator-class="el-icon-arrow-right" class="mb-4">
    <div
      class="text-xs"
      v-for="(p, k) of path"
      :key="k"
      :to="p.to"
      >{{ p.name }}</div
    >
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["path"],
};
</script>
