<template>
  <component
    :is="to ? nuxtLinkComponent : 'button'"
    :to="to"
    class="rounded-btn focus:rounded-btn relative text-center text-md !font-bold leading-tight no-underline lg:text-lg"
    :class="btnStyleObject"
    :role="to ? 'link' : 'button'"
    :title="title"
    :type="to ? 'text/html' : type === 'icon-only' ? 'button' : type"
    :target="
      target === 'blank' || to?.startsWith('http') || to?.startsWith('www')
        ? '_blank'
        : '_self'
    "
    :disabled="disabled">
    <div class="flex items-center space-x-3">
      <!-- prefix icon -->
      <nuxt-icon
        class="text-md"
        :name="prefixIcon"
        v-if="prefixIcon && prefixIcon !== ''"></nuxt-icon>
      <!-- button text -->
      <template v-if="type !== 'loading'">
        <template v-if="type === 'icon-only'">
          <slot></slot>
        </template>
        <template v-else>
          <span>
            <slot></slot>
          </span>
        </template>
      </template>
      <template v-else>
        <app-loader
          size="sm"
          color="white"></app-loader>
      </template>
      <!-- suffix icon -->
      <nuxt-icon
        class="text-md"
        :name="suffixIcon"
        v-if="suffixIcon && suffixIcon !== ''"></nuxt-icon>
    </div>
  </component>
</template>
<script setup>
  const nuxtLinkComponent = defineNuxtLink({});
  const props = defineProps({
    btnStyle: {
      type: String,
      validator(value) {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
      default: "primary",
    },
    type: {
      type: String,
      validator(value) {
        return ["submit", "button", "icon-only", "loading"].includes(value);
      },
      default: "button",
    },
    to: {
      type: String,
      default: null,
    },
    // size: {
    // 	type: String,
    // 	validator(value) {
    // 		return ['md', 'lg'].includes(value)
    // 	},
    // 	default: 'md'
    // },
    block: {
      required: false,
      type: Boolean,
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
    prefixIcon: {
      type: String,
      default: null,
      required: false,
    },
    suffixIcon: {
      type: String,
      default: null,
      required: false,
    },
    target: {
      type: String,
      required: false,
      default: "self",
      validator(value) {
        return ["blank", "self"].includes(value);
      },
    },
    title: {
      required: false,
      type: String,
    },
  });

  const btnStyleObject = computed(() => ({
    "bg-btn-primary-bg !text-btn-primary-text hover:bg-btn-primary-hover hover:text-btn-primary-text-hover ":
      props.btnStyle === "primary",
    "bg-btn-secondary-bg !text-btn-secondary-text hover:bg-btn-secondary-hover hover:text-btn-secondary-text-hover ":
      props.btnStyle === "secondary",
    "bg-btn-tertiary-bg !text-btn-tertiary-text hover:bg-btn-tertiary-hover hover:text-btn-tertiary-text-hover ":
      props.btnStyle === "tertiary",
    "py-3 px-6 lg:py-4 lg:px-8":
      props.type === "button" || props.type === "submit" || props.type === "loading",
    "focus-style":
      props.type === "button" || props.type === "submit" || props.type === "icon-only",
    "inline-block": props.to,
    "flex justify-center items-center":
      !props.to || (props.to && props.type === "icon-only"),
    "w-full flex justify-center items-center": props.block,
  }));
</script>
