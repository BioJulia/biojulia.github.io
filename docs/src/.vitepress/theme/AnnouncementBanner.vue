<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const storageKey = 'biojulia-juliacon2026-banner-dismissed'

onMounted(() => {
  // Check if user has previously dismissed the banner
  const isDismissed = localStorage.getItem(storageKey)
  if (isDismissed === 'true') {
    isVisible.value = false
  }
})

function dismiss() {
  isVisible.value = false
  localStorage.setItem(storageKey, 'true')
}
</script>

<template>
  <div v-if="isVisible" class="announcement-banner">
    <div class="announcement-content">
      <span class="announcement-icon">📢</span>
      <span class="announcement-text">
        <strong>JuliaCon 2026:</strong> Submit your BioJulia abstract!
        <a href="https://pretalx.com/juliacon-2026/talk/KUTGMY/" target="_blank" rel="noopener noreferrer">
          Submit here →
        </a>
      </span>
      <button @click="dismiss" class="announcement-close" aria-label="Dismiss announcement">
        ×
      </button>
    </div>
  </div>
</template>

<style scoped>
.announcement-banner {
  background: linear-gradient(90deg, #4c9aff 0%, #5b6eef 100%);
  color: white;
  padding: 0.75rem 1rem;
  text-align: center;
  position: relative;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.announcement-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.announcement-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.announcement-text {
  font-size: 0.95rem;
  line-height: 1.5;
}

.announcement-text strong {
  font-weight: 600;
}

.announcement-text a {
  color: white;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 500;
  transition: opacity 0.2s;
}

.announcement-text a:hover {
  opacity: 0.8;
}

.announcement-close {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  margin-left: auto;
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.announcement-close:hover {
  opacity: 0.7;
}

.announcement-close:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .announcement-banner {
    padding: 0.6rem 0.75rem;
  }

  .announcement-content {
    gap: 0.5rem;
  }

  .announcement-text {
    font-size: 0.875rem;
  }

  .announcement-icon {
    font-size: 1rem;
  }
}
</style>
