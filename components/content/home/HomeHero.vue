<template>
  <div class="content-center space-y-8 border bg-primary py-20 text-center">
    <div class="space-y-2">
      <!-- headline -->
      <div class="text-md font-bold uppercase text-secondary">
        <slot name="headline"></slot>
      </div>
      <!-- title -->
      <h1 class="font-bold leading-none text-white">
        <ContentSlot
          name="title"
          unwrap="p" />
      </h1>
    </div>
    <!-- description -->
    <div class="text-md text-white">
      <ContentSlot
        name="description"
        unwrap="p" />
    </div>
    <!-- links -->
    <div class="flex items-center justify-center gap-4">
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script setup></script>
