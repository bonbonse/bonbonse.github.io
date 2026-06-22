<template>
    <div class="app-content-wrapper">
        <slot />
    </div>
</template>

<style lang="scss">
.app-content-wrapper {
    border-radius: 20px;
    width: 80%;
    height: 95%;
    background-color: rgba(255, 255, 255, 0.1);
    overflow-y: auto;
}

@media (max-width: 768px) {
    .app-content-wrapper {
        width: 100%;
        height: auto;
        border-radius: 12px;
    }
}
</style>