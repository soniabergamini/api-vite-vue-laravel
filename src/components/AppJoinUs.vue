<script>

export default {
    name: "AppJoinUs"
}

</script>

<template>
    <div class="flex gap-5 py-2 px-4">
        <!-- Form -->
        <section class="w-full mx-auto h-[550px]">
            <h2 class="font-bold text-3xl">🍣 Desideri Prenotare?</h2>
            <small>Puoi compilare il modulo qui sotto, ti contatteremo per confermare la tua prenotazione:</small>
            <form action="#" class="flex flex-col gap-3">
                <div>
                    <label class="block text-2xl" for="formName">Nome e Cognome</label>
                    <input type="text" name="formName" id="formName" placeholder="Mario Rossi">
                </div>
                <div>
                    <label class="block text-2xl" for="formEmail">Email</label>
                    <input type="email" name="formEmail" id="formEmail" placeholder="mariorossi@gmail.com">
                </div>
                <div>
                    <label for="formPhone" class="block text-2xl">Phone</label>
                    <input type="tel" name="formPhone" id="formPhone" placeholder="123456789">
                </div>
                <div>
                    <label for="formRequest" class="text-2xl block">Richiesta</label>
                    <textarea name="formRequest" id="formRequest" cols="70" rows="2"
                        placeholder="Vorrei prenotare un tavolo per 5 persone per Sabato sera..."></textarea>
                </div>
                <div>
                    <label for="adults" class="text-2xl block">Adulti</label>
                    <select name="adults" id="adults">
                        <option disabled selected>Seleziona il numbero di adulti</option>
                        <option v-for="n in 5" value="{{ n }}"></option>
                    </select>
                </div>
                <div>
                    <label for="children" class="text-2xl block">Bambini</label>
                    <select name="children" id="children">
                        <option disabled selected>Seleziona il numbero di bambini</option>
                        <option v-for="n in 5" value="{{ n }}"></option>
                    </select>
                </div>
                <button type="submit"
                    class="text-3xl border bg-primary-orange text-white px-3 py-1.5 border-primary-orange hover:bg-white hover:text-primary-orange hover:border-primary-orange">Invia
                    il messaggio 🍱</button>
            </form>
        </section>

        <!-- Map -->
        <section>
            <h2 class="font-bold text-3xl">Ristorante Tatsumi - Prenota subito</h2>
            <p class="text-xl my-2">Via Contrari, 7, 44121 Ferrara FE <a href="tel:+0532.1776932"
                    class="font-bold hover:text-primary-orange">Tel. 0532.1776932</a></p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.39183665254!2d11.6217604!3d44.8348467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e4e6a524f9f19%3A0x834c5c8af3b3e0ed!2sTatsumi!5e0!3m2!1sit!2sit!4v1689628195712!5m2!1sit!2sit"
                width="650" height="550" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

input,
textarea,
option {
    font-size: 22px;
}
</style>