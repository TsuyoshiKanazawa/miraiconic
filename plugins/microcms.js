import { createClient } from 'microcms-js-sdk'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    const client = createClient({
        serviceDomain: config.public.microcmsServiceDomain,
        apiKey: config.public.microcmsApiKey,
    })
    nuxtApp.provide('microcms', client)
})