<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Feed } from '@/models/main/Feed';

export default defineComponent({
  props: {
    text: {
      type: String as PropType<Feed['text']>,
      default: '',
    },
    date: {
      type: String as PropType<Feed['date']>,
      default: '',
    },
  },
});
</script>

<template>
  <div class="card">
    <div class="card__text">{{ text }}</div>
    <div class="card__date">{{ date }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 25px 40px;
  display: flex;
  flex-direction: column;

  &__text {
    text-align: justify;
    font-size: 18px;
  }

  &__date {
    text-align: right;
    margin-top: 8px;
    font-size: 10px;
  }
}

@media (max-width: 768px) {
  .card {
    padding: 16px 20px;

    &__text {
      font-size: 15px;
    }
  }
}
</style>
