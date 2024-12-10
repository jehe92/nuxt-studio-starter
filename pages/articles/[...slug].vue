<template>
  <div
    class="container mx-auto"
    v-if="article">
    <!-- page header -->
    <div class="content-center space-y-8 border bg-primary py-20 text-center">
      <div class="space-y-2">
        <!-- headline -->
        <div class="text-md font-bold uppercase text-secondary">Artikel</div>
        <!-- title -->
        <h1 class="font-bold leading-none text-white">
          {{ article.title }}
        </h1>
      </div>
      <!-- description -->
      <div class="text-md text-white">
        {{ article.description }}
      </div>
    </div>
    <!-- page content -->
    <div class="grid grid-cols-4 gap-20 py-8">
      <div class="text-editor col-span-3 max-w-screen-lg">
        <ContentRenderer
          v-if="article && article.body"
          :value="article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
      <div class="col-span-1 space-y-2">
        <div class="font-bold">Table of Contents</div>
        <ul>
          <li
            class="text-md"
            v-for="articleLinks in article.body.toc.links">
            <nuxt-link
              :to="{ hash: `#${articleLinks.id}` }"
              class="hover:underline">
              {{ articleLinks.text }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Article } from "~/types";

  const route = useRoute();
  const { data: article } = await useAsyncData(route.path, () =>
    queryContent<Article>(route.path).findOne(),
  );

  if (!article.value) {
    throw createError({
      statusCode: 404,
      message: "Article not found",
      fatal: true,
    });
  }
</script>
