<script lang="ts" setup>
withDefaults(
    defineProps<{
        type?: "submit" | "reset" | "button"
        mode?: "default" | "main"
    }>(),
    {
        mode: "default",
        type: "button",
    },
)
</script>

<template>
    <button
        :class="[`--${mode}`]"
        :type="type"
    >
        <slot />
    </button>
</template>

<style lang="scss" scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: map-get($base, contrast);
    border-radius: 2px;
    transition: 0.3s ease-in-out;
    font-size: 20px;
    line-height: 100%;
    border: 2px solid transparent;
    text-decoration: none;
    text-align: center;
    width: fit-content;
    font-family: inherit;
    box-sizing: border-box;
    border-radius: 999px;
    height: 52px;
    user-select: none;

    &.--default {
        border: 2px solid rgba(0, 0, 0, 0.1);
        background-color: map-get($base, contrast);
        color: map-get($base, main);
        min-width: 52px;
    }

    &.--main {
        background-color: map-get($base, main);
        padding: 16px 32px;
        min-width: 32px;
    }

    &:hover {
        cursor: pointer;

        &.--default {
            background-color: map-get($neutral, 80);
        }

        &.--main {
            background-color: map-get($neutral, 200);
        }
    }
}
</style>
