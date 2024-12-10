<template>
  <div class="">
    <div
      :class="styleObject"
      class="animate-spin rounded-full border-solid border-t-transparent"></div>
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      required: false,
      default: "md",
      validator(value) {
        return ["md", "sm"].includes(value);
      },
    },
    color: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
    },
  });

  const styleObject = computed(() => ({
    "h-20 w-20  border-8": props.size === "md",
    "h-[22px] w-[22px] border-4": props.size === "sm",
    "border-primary": props.color === "primary",
    "border-tertiary": props.color === "tertiary",
    "border-secondary": props.color === "secondary",
  }));
</script>
