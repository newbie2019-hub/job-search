<template>
  <div>
    <MainNav />
    <HeroSection />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    MainNav,
  },
};
</script>

<style></style>
