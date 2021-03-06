export default {
    /*
    ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css'
    ],

    /*
    ** Router property -  https://nuxtjs.org/guides/features/file-system-routing#the-router-property
    */
    router: {
        // linkActiveClass: 'my-custom-active-link',
        // linkExactActiveClass: 'my-custom-exact-active-link',
        linkPrefetchedClass: 'nuxt-link-prefetched'
    } 
}