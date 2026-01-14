<script setup>
import DefaultTheme from 'vitepress/theme'
import AnnouncementBanner from './AnnouncementBanner.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <AnnouncementBanner />
    </template>
  </Layout>
</template>
