<template>
  <div class="w-full h-16 bg-white border-b-2">
    <div
      v-if="onJobResultsPage"
      class="flex items-center w-full h-full px-4 mx-auto lg:max-w-7xl"
      data-test="job-count"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="mr-4" />
      <span>
        <span class="font-medium text-green-500">154</span>
        jobs matched
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>
