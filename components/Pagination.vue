<script lang="ts" setup>
import type { NsPagination } from "@/namespaces/NsPagination"

const props = withDefaults(defineProps<NsPagination.Props>(), {
        totalPages: 1,
        currentPage: 1,
    }),
    emits = defineEmits<NsPagination.Emits>(),
    calculated = {
        pagesNumbersToShow: computed(() => {
            const acc: number[] = []

            if (props.currentPage < 5) {
                if (props.totalPages <= 5) {
                    for (let i = 1; i <= props.totalPages; i++) {
                        acc.push(i)
                    }
                } else {
                    for (let i = 1; i <= props.totalPages; i++) {
                        if (i <= 4 || i === props.totalPages) {
                            acc.push(i)
                        }

                        if (i > 5 && i < props.totalPages && !acc.includes(NaN)) {
                            acc.push(NaN)
                        }
                    }
                }
            } else if (props.currentPage < props.totalPages - 3) {
                acc.push(1)
                acc.push(NaN)
                acc.push(props.currentPage - 1)
                acc.push(props.currentPage)
                acc.push(props.currentPage + 1)
                acc.push(NaN)
                acc.push(props.totalPages)
            } else {
                acc.push(1)
                acc.push(NaN)
                acc.push(props.totalPages - 3)
                acc.push(props.totalPages - 2)
                acc.push(props.totalPages - 1)
                acc.push(props.totalPages)
            }

            return acc
        }),
    }
</script>

<template>
    <ul class="ui-pagination">
        <li
            v-if="totalPages >= 2 && currentPage > 1"
            class="item carret left"
            @click="emits('change-page', currentPage - 1)"
        >
            <span class="icon arrow-right" />
        </li>
        <template
            v-for="(number, i) in calculated.pagesNumbersToShow.value"
            :key="i"
        >
            <li
                v-if="!isNaN(number)"
                :class="['item', { active: number === currentPage }]"
                @click="emits('change-page', number)"
            >
                <span>
                    {{ number }}
                </span>
            </li>
            <li
                v-else
                class="item dots"
            >
                <span> ... </span>
            </li>
        </template>
        <li
            v-if="totalPages >= 2 && currentPage < totalPages"
            class="item carret"
            @click="emits('change-page', currentPage + 1)"
        >
            <span class="icon arrow-right" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.ui-pagination {
    display: flex;
    column-gap: 12px;
    list-style: none;
    margin: 0;
    padding: 0;
    user-select: none;

    & > .item {
        display: flex;
        width: 44px;
        height: 44px;
        padding: 11px 17px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: map-get($base, main);
        text-align: center;
        font-size: 16px;
        line-height: 50%;
        box-sizing: border-box;
        border-radius: 12px;
        background: map-get($neutral, 80);
        transition: 0.3s ease-in-out;

        & > span {
            &:not(.icon) {
                display: flex;
                width: 15px;
                height: 11px;
                flex-direction: column;
                justify-content: flex-end;
                flex-shrink: 0;
            }
        }

        &:hover {
            &:not(.active, .dots) {
                cursor: pointer;
                background-color: map-get($neutral, 60);
            }
        }

        &.dots {
            background-color: map-get($base, contrast);
            letter-spacing: 3px;
            font-size: 20px;
            padding-bottom: 0;
        }

        &.active {
            background-color: map-get($base, main);
            color: map-get($base, contrast);
        }

        &.carret {
            background-color: map-get($base, contrast);
            border: 1px solid map-get($neutral, 60);

            &:hover {
                cursor: pointer;
                background-color: map-get($neutral, 60);
            }

            & > .icon {
                background-color: map-get($base, main);
            }

            &.left {
                & > .icon {
                    transform: rotate(180deg);
                }
            }
        }
    }
}
</style>
