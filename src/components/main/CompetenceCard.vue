<script lang="ts">
import { defineComponent } from 'vue';
import BaseIcon from '@/components/base/BaseIcon.vue';

export default defineComponent({
  components: { BaseIcon },
  props: {
    caption: {
        type: String,
        required: false,
        default: "",
    },
    content: {
        type: String,
        required: false, 
        default: "",
    },
    secondCaption: {
        type: String,
        required: false,
        default: "",
    },
  }
})

</script>

<template>
    <div class="card">
        <BaseIcon class="card__icon" icon="link_arrow" />
        <div class="card__second-caption">{{ secondCaption }}</div>
        <div class="card__content">{{ content }}</div>
        <div class="card__caption">{{ caption }}</div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 25px 40px;
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 85px;
    position: relative;
    transition: box-shadow 0.3s, background-color 0.3s;

    &:hover {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        background-color: rgba(255, 255, 255, 0.15);
    }

    &__icon {
        position: absolute;
        top: 10px;
        right: 15px;
    }

    &__caption {
        font-size: 18px;
        font-weight: 700;
    }
    &__second-caption {
        font-size:  27px;
        font-weight: 700;
    }
    &__content {
        display: flex;
        flex: 1;
        font-size:  14px;
    }
}
</style>
