<script lang="ts">
import { defineComponent, type PropType } from 'vue';

type ProjectItem = {
  name: string;
  description: string;
};

export default defineComponent({
  props: {
    projects: {
      type: Array as () => ProjectItem[],
      required: true,
    },
    activeIndex: {
      type: Number as PropType<number | null>,
      default: null,
    },
  },
  emits: ['select'],
  methods: {
    handleClick(index: number) {
      this.$emit('select', index);
    },
  },
});
</script>

<template>
  <div class="projects-sidebar">
    <button
      v-for="(project, i) in projects"
      :key="i"
      :class="['project-btn', { active: activeIndex === i }]"
      @click="handleClick(i)"
    >
      {{ project.name }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.projects-sidebar {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-btn {
  background-color: rgb(white, 0.7);
  border: none;
  border-radius: 40px;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  cursor: pointer;

  &.active {
    border-radius: 40px 0 0 40px;
  }
}

@media (max-width: 768px) {
  .projects-sidebar {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .project-btn {
    padding: 10px 20px;
    font-size: 14px;

    &.active {
      border-radius: 40px;
    }
  }
}
</style>
