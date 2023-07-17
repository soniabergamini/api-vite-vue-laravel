<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHomepage from './components/AppHomepage.vue';
import AppContacts from './components/AppContacts.vue';

// import { store } from './data/store';
// import axios from 'axios';

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppHomepage,
    AppContacts
  },
  data() {
    return {
      // store,
      siteExample: 'https://www.tatsumi.it/',
    }
  }
}
</script>

<template>
  <header>

    <!-- NavBar -->
    <AppHeader />

  </header>
  <main>

    <!-- Router Content -->
    <router-view></router-view>

  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
