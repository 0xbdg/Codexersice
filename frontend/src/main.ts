import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Editor from './Pages/Editor.vue'
import Index from './Pages/Index.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/editor', component: Editor },
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')



