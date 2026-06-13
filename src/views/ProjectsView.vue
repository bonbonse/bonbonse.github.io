<script lang="ts">
import ContentWrapper from '@/components/layout/ContentWrapper.vue';
import ProjectsSidebar from '@/components/projects/ProjectsSidebar.vue';
import ProjectsContent from '@/components/projects/ProjectsContent.vue';
import { defineComponent } from 'vue';

type ProjectItem = {
  name: string;
  description: string;
};

export default defineComponent({
  components: {
    ContentWrapper,
    ProjectsSidebar,
    ProjectsContent,
  },
  data() {
    return {
      activeIndex: null as number | null,
      projects: [
        { name: 'Проект 1', description: 'Описание первого проекта. Здесь будет подробная информация о том, чем я занимался в этом проекте, какие технологии использовал и каких результатов достиг.' },
        { name: 'Проект 2', description: 'Описание второго проекта. Интересная задача с нестандартным решением, которое позволило добиться отличных показателей производительности.' },
        { name: 'Проект 3', description: 'Описание третьего проекта. Командная работа над крупным сервисом, где я отвечал за архитектуру бэкенда и координацию разработки.' },
        { name: 'Проект 4', description: 'Описание четвертого проекта. Пет-проект, который вырос в полноценный продукт с тысячами пользователей.' },
      ] as ProjectItem[],
    };
  },
  computed: {
    activeProject(): ProjectItem | null {
      return this.activeIndex != null ? this.projects[this.activeIndex] ?? null : null;
    },
  },
  methods: {
    selectProject(index: number) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
});
</script>

<template>
  <ContentWrapper>
    <div class="projects-page">
      <ProjectsSidebar
        :projects="projects"
        :active-index="activeIndex"
        @select="selectProject"
      />
      <ProjectsContent
        v-if="activeProject"
        :text="activeProject.description"
        photo="/src/assets/photo.jpg"
      />
    </div>
  </ContentWrapper>
</template>

<style lang="scss" scoped>
.projects-page {
  padding: 2rem;
  display: flex;
  height: 100%;
  gap: 24px;
}

@media (max-width: 768px) {
  .projects-page {
    padding: 1rem;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
