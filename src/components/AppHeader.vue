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
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/restaurant">Restourant</router-link>
                    </li>
                    <li>
                        <router-link to="/about">Contacts</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </section>

    <!-- Hero Section -->
    <section class="w-full my-0 mx-auto relative">
        <img src="../data/images/sushi-jumbo.jpeg" alt="hero-img" class="max-h-96 w-full object-cover object-top">
        <button
            class="border bg-transparent border-primary-orange text-primary-orange px-2 py-1 tracking-wider text-3xl absolute z-10 top-1/2 left-1/2 hover:bg-primary-orange hover:text-white translate-y-[-50%] translate-x-[-50%]">PRENOTA</button>
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>



