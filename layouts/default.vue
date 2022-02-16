<template>
    <div
        class="flex flex-col font-body text-sm min-w-screen min-h-screen bg-gray-100 text-gray-900"
    >
        <Menu />

        <nuxt class="flex-1" />
    </div>
</template>
<script>
import Menu from '../components/layout/menu'
export default {
    name: "default",
    components: { Menu }

}
</script>