<script lang="ts">
import { defineComponent } from 'vue';

const icons = import.meta.glob('@/assets/icons/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: undefined,
    },
    height: {
      type: [String, Number],
      default: undefined,
    },
  },
  computed: {
    svgContent(): string {
      const entry = Object.entries(icons).find(([k]) => k.endsWith(`/${this.icon}.svg`));
      let svg = entry ? entry[1] : '';
      if (svg && (this.width || this.height)) {
        svg = svg.replace(/<svg\b/, (match) => {
          const attrs: string[] = [];
          if (this.width != null) attrs.push(`width="${this.width}"`);
          if (this.height != null) attrs.push(`height="${this.height}"`);
          return `${match} ${attrs.join(' ')}`;
        });
      }
      return svg;
    },
  },
});
</script>

<template>
  <span class="base-icon" v-html="svgContent" />
</template>

<style lang="scss" scoped>
.base-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
