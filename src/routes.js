import { createRouter, createWebHistory } from "vue-router";
import AppContacts from './components/AppContacts.vue';
import AppHomepage from './components/AppHomepage.vue';

// 1. Define route components. These can be imported from other files
// const Homepage = { template: '<div>Homepage</div>' }
// const Contacts = { template: '<div>Contacts</div>' }

// 2. Define some routes. Each route should map to a component. We'll talk about nested routes later.
const routes = [
    { path: '/', component: AppHomepage, name: 'homepage' },
    { path: '/contacts', component: AppContacts, name: 'contacts' },
]

// 3. Create the router instance and pass the `routes` option. You can pass in additional options here, but let's keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), routes
}) 

export default router