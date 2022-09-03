<template>
  <header
    class="sticky flex justify-center w-full h-16 px-4 py-6 text-sm bg-white border-b-2"
  >
    <div class="flex items-center justify-between w-full lg:max-w-7xl gap-x-4">
      <nav class="flex items-center w-full">
        <a :href="url" class="mr-8 text-lg font-medium whitespace-nowrap">{{
          company
        }}</a>
        <ul class="flex w-full font-medium gap-x-8">
          <li v-for="menu in menuItems" :key="menu">
            <a href="#">{{ menu }}</a>
          </li>
        </ul>
      </nav>
      <ActionButton
        v-if="!isLoggedIn"
        data-test="login-button"
        @click="loginUser"
      />
      <ProfileImage v-else data-test="profile-image" />
    </div>
  </header>
</template>
<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
export default {
  name: "MainNav",
  components: { ActionButton, ProfileImage },
  data() {
    return {
      company: "Google Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "How we hire",
        "Locations",
        "Life at Google",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  mounted() {},
  methods: {
    loginUser() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
