<template>
  <div>
    <TopFv id="top" />
    <TopScroll id="about" v-if="!useIsMobile().value" />
    <TopSpAbout id="about" v-if="useIsMobile().value" />
    <TopSpService id="service" v-if="useIsMobile().value" />
    <TopSpFeatures id="features" v-if="useIsMobile().value" />
    <TopCasestudy id="casestudy" v-if="!useIsMobile().value" />
    <TopSpCasestudy id="casestudy" v-if="useIsMobile().value" />
    <TopFaq id="faq" v-if="!useIsMobile().value" />
    <TopSpFaq id="faq" v-if="useIsMobile().value" />
    <TopNews id="news" />
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
</style>

