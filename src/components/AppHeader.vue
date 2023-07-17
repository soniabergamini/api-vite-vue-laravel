<script>

export default {
    name: "AppHeader"
}

</script>

<template>
    <!-- Header Nav -->
    <section class="bg-white my-0 mx-auto flex justify-center">
        <nav class="flex justify-between max-w-5xl w-full">

            <!-- DC Brand Logo -->
            <div class="p-[0.8em]">
                <a href="#">
                    <img src="../assets/img/dc-logo.png" alt="dc-logo" class="max-w-[70%]">
                </a>
            </div>

            <!-- Nav Menu Links -->
            <div class="h-full">
                <ul class="flex gap-[1em] text-[0.5rem] md:text-xs h-full items-center">
                    <li v-for="item in navItems">
                        <a href="#">{{ item.toUpperCase() }}</a>
                    </li>
                </ul>
            </div>

        </nav>
    </section>

    <!-- Hero Section -->
    <section class="w-full my-0 mx-auto">
        <img src="../data/images/sushi-jumbo.jpeg" alt="hero-img" class="max-h-96 w-full object-cover object-top">
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>



<!-- <router-link to="/">Go to Home</router-link>
<router-link to="/about">Go to About</router-link> -->