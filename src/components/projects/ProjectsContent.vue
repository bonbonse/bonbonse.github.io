<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
    photo: {
      type: String,
      default: '',
    },
  },
});
</script>

<template>
  <div class="projects-content">
    <div class="card">
      <img v-if="photo" class="card__photo" :src="photo" alt="photo" />
      <div class="card__text">{{ text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-content {
  flex: 1;

  .card {
    background-color: rgb(white, 0.7);

    &__photo {
      width: 100%;
      display: block;
      border-radius: 20px 20px 0 0;
    }

    &__text {
      padding: 25px 40px;
      font-size: 18px;
      text-align: justify;
    }
  }
}

@media (max-width: 768px) {
  .projects-content {
    .card {
      &__text {
        padding: 16px 20px;
        font-size: 15px;
      }
    }
  }
}
</style>
