import { createRouter, createWebHistory } from "vue-router";
import AppContacts from './components/AppContacts.vue';
import AppHomepage from './components/AppHomepage.vue';
import AppMenu from "./components/AppMenu.vue";
import AppSushi from "./components/menu/AppSushi.vue";
import AppBento from "./components/menu/AppBento.vue";
import AppRamen from "./components/menu/AppRamen.vue";


// 1. Define route components. These can be imported from other files
// const Homepage = { template: '<div>Homepage</div>' }
// const Contacts = { template: '<div>Contacts</div>' }

// 2. Define some routes. Each route should map to a component. We'll talk about nested routes later.
const routes = [
    { path: '/homepage', component: AppHomepage, name: 'homepage' },
    { path: '/contacts', component: AppContacts, name: 'contacts' },
    { 
        path: '/menu', 
        component: AppMenu, 
        name: 'menu', 
        children:[
            { path: '/menu/sushi', component: AppSushi, name: 'sushi'},
            { path: '/menu/ramen', component: AppRamen, name: 'ramen'},
            { path: '/menu/bento', component: AppBento, name: 'bento'}
        ]
    },
]

// 3. Create the router instance and pass the `routes` option. You can pass in additional options here, but let's keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), routes
}) 

export default router