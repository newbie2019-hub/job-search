<template>
  <button type="button" :class="btnType">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      default: "Button",
      required: true,
    },
    btnType: {
      type: String,
      default: "primary",
      required: false,
      validator(val) {
        return ["success", "error", "warning", "primary"].includes(val);
      },
    },
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-2 font-medium duration-150 ease-in-out whitespace-nowrap hover:shadow-md;
}

.success {
  @apply text-white bg-green-500 hover:bg-green-600 rounded;
}

.error {
  @apply text-white bg-red-500 hover:bg-red-600 rounded;
}

.warning {
  @apply text-white bg-orange-500 hover:bg-orange-600 rounded;
}

.primary {
  @apply text-white bg-blue-500 hover:bg-blue-600 rounded;
}

.secondary {
  @apply text-white bg-gray-500 hover:bg-gray-600 rounded;
}
</style>
