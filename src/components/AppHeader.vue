<script>

export default {
    name: "AppHeader"
}

</script>

<template>
    <!-- Header Nav -->
    <section class="bg-white my-0 mx-auto flex justify-center">
        <nav class="flex justify-between max-w-5xl w-full h-20">

            <!-- Logo -->
            <div class="p-[0.8em]">
                <a href="#">
                    <img src="../data/images/logo.png" alt="logo" class="max-w-[70%] max-h-full">
                </a>
            </div>

            <!-- Nav Menu Links -->
            <div class="h-full">
                <ul class="flex gap-[1em] text-[0.75rem] md:text-xs h-full items-center">
                    <li>
                        <router-link class="text-xl" to="/homepage">Home</router-link>
                    </li>
                    <li>
                        <router-link class="text-xl" to="/menu">Menu</router-link>
                    </li>
                    <li>
                        <router-link class="text-xl" to="/contacts">Contacts</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </section>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
</style>



