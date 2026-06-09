<script lang="ts">
import ContentWrapper from '@/components/layout/ContentWrapper.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    ContentWrapper,
  },
  data() {
    return {
      photo: new URL('@/assets/photo.jpg', import.meta.url).href,
    }
  },
})

</script>

<template>
  <ContentWrapper>
    <div class="main">
      <div class="profile">
        <img class="profile__photo" :src="photo" alt="photo">
        <div class="profile__info">
          <div class="profile__name">Бондарь Семен</div>
          <div class="profile__description">Программист, человек, филантроп</div>
        </div>
      </div>
      <div class="card">
        <p class="card__text">Какой-нибудь текст</p>
      </div>
    </div>
  </ContentWrapper>
</template>

<style lang="scss" scoped>
.main {
  padding: 2rem;
}

.profile {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  text-align: left;

  &__photo {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: 24px;
    font-weight: 600;
  }

  &__description {
    font-size: 20px;
    color: $text-dark;
  }
}

.card {
  border: 1px solid $border-light;
  border-radius: 16px;
  padding: 1.5rem;

  &__text {
    margin: 0;
  }
}
</style>
