import { createClient } from 'newt-client-js'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    //console.log(config)
    const newtClient = createClient({
        spaceUid: config.public.spaceUid,
        token: config.public.cdnApiToken,
        apiType: 'cdn'
    })
    nuxtApp.provide('newtClient', newtClient)
})
