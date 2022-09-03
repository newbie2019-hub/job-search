<template>
  <header
    class="sticky flex justify-center w-full px-4 py-6 text-sm bg-white border-b-2"
  >
    <div class="flex items-center w-full lg:max-w-6xl gap-x-4">
      <a :href="url" class="mr-6 text-lg font-medium">{{ company }}</a>
      <nav>
        <ul class="flex w-full font-medium gap-x-10">
          <li v-for="menu in menuItems" :key="menu">
            <a href="#">{{ menu }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "MainNav",
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
    };
  },
  mounted() {},
  methods: {},
};
</script>
