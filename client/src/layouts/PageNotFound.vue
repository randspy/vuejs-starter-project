<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { DefaultRoute, DefaultRoutePageName } from '@/router/routes.config'
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <img src="@/assets/page-not-found.svg" alt="404" class="w-[min(100%,40rem)]" />
    <p class="mb-2 text-center text-lg">The page you are looking for does not exist.</p>
    <Button asChild>
      <RouterLink :to="DefaultRoute">Go to {{ DefaultRoutePageName }}</RouterLink>
    </Button>
  </div>
</template>
