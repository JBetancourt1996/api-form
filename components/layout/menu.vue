<template>
    <div class="flex w-dcreen h-12">
        <ul class="flex w-full bg-sladte-500 space-y-1">
            <nuxt-link
                v-for="(m, k) of menu"
                :key="k"
                tag="div"
                :to="{ path: m.path }"
                class="flex w-fusll items-center py-1 px-3 cursor-pointer"
            >
                <span class="text-lg font-semibold text-white">{{ m.name }}</span>
            </nuxt-link>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            menu: [
                {

                    name: "Home",
                    path: "/",
                },
                {

                    name: "Formulario",
                    path: "/form",
                },
                {

                    name: "Api-morty",

                    path: "/form/rickmorty",
                },



            ],
        };
    },
};
</script>