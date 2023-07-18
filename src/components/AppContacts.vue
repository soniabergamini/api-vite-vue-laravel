<script>
import AppJoinUs from './AppJoinUs.vue';

export default {
    name: "AppContacts",
    components: {
        AppJoinUs
    }
}

</script>

<template>
    <!-- Jumbotron -->
    <section class="w-full mx-auto relative">
        <img src="../data/images/map-contacts.jpg" alt="hero-img" class="w-full object-cover object-center h-full">
        <button
            class="border bg-transparent border-white text-white px-3 py-1.5 tracking-wider text-3xl absolute z-10 top-1/2 left-1/2 hover:bg-primary-orange hover:text-white hover:border-primary-orange translate-y-[-50%] translate-x-[-50%]">CONTATTACI</button>
    </section>

    <!-- Restaurant About Info -->
    <section class="text-center text-2xl py-16">
        Tatsumi Ristorante giapponese a Ferrara centro per gustare un ottimo Sushi All You Can Eat
        Cerchi i migliori ristoranti Ferrara? Ti aspettiamo da Tatsumi, Ristorante cinese e thailandese con il menu All
        You Can Eat, a pranzo e a cena
        Vuoi scoprire qualcosa di diverso da osterie, trattorie o ristoranti tipici? Tatsumi, Ristorante centro Ferrara,
        per mangiare i migliori piatti della cucina giapponese, cinese e thailandese
    </section>
    <AppJoinUs />
</template>



<style lang="scss" scoped>
@use '../style.scss' as *;
</style>
