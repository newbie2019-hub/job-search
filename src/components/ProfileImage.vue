<template>
  <img
    :src="imageLink"
    alt=""
    class="object-contain w-8 h-8 bg-blue-500 rounded-full"
  />
</template>
<script>
export default {
  data() {
    return {
      imageLink: "https://robohash.org/set=set6",
    };
  },
};
</script>
