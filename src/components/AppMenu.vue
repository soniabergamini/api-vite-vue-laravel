<script>
import AppRamen from './menu/AppRamen.vue';
import AppBento from './menu/AppBento.vue';
import AppSushi from './menu/AppSushi.vue';

export default {
    name: "AppMenu",
    components: {
        AppBento,
        AppRamen,
        AppSushi
    }
}

</script>

<template>
    <div>MENU</div>
    <!-- Nav Menu Links -->
    <div class="h-full">
        <ul class="flex gap-[1em] text-[0.75rem] md:text-xs h-full items-center">
            <li>
                <router-link class="text-xl" to="/menu/sushi">Sushi</router-link>
            </li>
            <li>
                <router-link class="text-xl" to="/menu/ramen">Ramen</router-link>
            </li>
            <li>
                <router-link class="text-xl" to="/menu/bento">Bento</router-link>
            </li>
        </ul>
    </div>

    <router-view></router-view>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
</style>