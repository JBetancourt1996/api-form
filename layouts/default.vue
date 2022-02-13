<template>
    <div
        class="flex flex-row font-body text-sm min-w-screen min-h-screen bg-gray-100 text-gray-900"
    >
        <Menu1 />
        <nuxt class="flex-1 bg-zblack" />
    </div>
</template>
<script>
import Menu1 from '../components/layout/menu'
export default {
    name: "default",
    components: { Menu1 }

}
</script>