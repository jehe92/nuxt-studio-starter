<template>
  <!-- Vue Way -->
  <!-- <HomeHero>
    <template #headline>Headline</template>
    <template #title>This is my title</template>
    <template #description>This is my description</template>
    <template #links>
      <app-button
        btn-style="secondary"
        to="/about">
        Über uns
      </app-button>
      <app-button
        btn-style="secondary"
        to="/about">
        Über uns 2
      </app-button>
    </template>
  </HomeHero> -->

  <!-- Nuxt content way -->
  <ContentRenderer
    v-if="pageData"
    :value="pageData" />
</template>

<script setup>
  // Nuxt content way
  const { data: pageData } = await useAsyncData("home", () =>
    queryContent("/").findOne(),
  );
  if (!pageData.value) {
    throw createError({
      statusCode: 404,
      message: "Page not found",
      fatal: true,
    });
  }
</script>
