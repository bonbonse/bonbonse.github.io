<script lang="ts">
import { defineComponent } from 'vue';

type RouterLinkItem = {
    caption: string;
    link: string;
    is_active: boolean;
};

export default defineComponent({
    data() {
        return {
            routerLinkItems: [
                { caption: 'Главная', link: '/', is_active: true },
                { caption: 'Проекты', link: '/projects', is_active: false },
            ] as RouterLinkItem[],
        };
    },
    methods: {
        handleSelectRouterLink(selectedRouterLink: RouterLinkItem) {
            this.routerLinkItems.map((item) => item.is_active = item == selectedRouterLink);
        }
    },
});
</script>

<template>
    <div class="sidebar">
        <nav class="nav">
            <router-link 
                v-for="item in routerLinkItems" 
                :key="item.caption"
                :to="item.link" 
                :class="['nav-link', item.is_active ? 'active' : '']"
                @click.prevent="handleSelectRouterLink(item)"
            >{{ item.caption }}</router-link>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    font-size: 31px;
    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: left;
        .nav-link {
            color: white;
            text-decoration: none;
            white-space: nowrap;
        }
        .active {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px 0 0 10px;
            padding: 15px;
            padding-right: 30px;
        }
    }
}

@media (max-width: 768px) {
    .sidebar {
        font-size: 18px;
        nav {
            flex-direction: row;
            gap: 8px;
            .nav-link {
                padding: 10px 16px;
                border-radius: 10px;
            }
            .active {
                border-radius: 10px;
                padding: 10px 16px;
            }
        }
    }
}
</style>