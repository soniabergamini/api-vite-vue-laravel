<script>

export default {
    name: "AppHomepage"
}

</script>

<template>
    <!-- Hero Section -->
    <section class="w-full my-0 mx-auto relative">
        <img src="../data/images/jumbosushi.jpeg" alt="hero-img" class="w-full object-cover object-center max-h-[700px]">
        <button
            class="border bg-transparent border-white text-white px-3 py-1.5 tracking-wider text-3xl absolute z-10 top-1/2 left-1/2 hover:bg-primary-orange hover:text-white hover:border-primary-orange translate-y-[-50%] translate-x-[-50%]">PRENOTA</button>
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>