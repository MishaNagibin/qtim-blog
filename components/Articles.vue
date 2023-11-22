<script lang="ts" setup>
import type { NsArticles } from "@/namespaces/NsArticles"

const props = defineProps<{
        articles: NsArticles.Article[]
        currentPage: number
    }>(),
    emits = defineEmits<{
        (e: "change-page", val: number): void
    }>(),
    data = reactive({
        limit: 8,
    }),
    calculated = {
        pages: computed((): number => {
            return Math.ceil(props.articles.length / data.limit)
        }),
        offset: computed((): number => {
            return calculated.pages.value > 0 ? data.limit * props.currentPage - data.limit : 0
        }),
        preparedArticles: computed((): NsArticles.Article[] => {
            return props.articles.slice(calculated.offset.value, data.limit * props.currentPage)
        }),
    }
</script>

<template>
    <div class="articles">
        <span>Articles</span>
        <div>
            <ArticleCard
                v-for="(a, i) of calculated.preparedArticles.value"
                :key="i"
                :article="a"
            />
        </div>
        <Pagination
            :current-page="currentPage"
            :total-pages="calculated.pages.value"
            @change-page="(val) => emits('change-page', val)"
        />
    </div>
</template>

<style lang="scss" scoped>
.articles {
    display: flex;
    flex-direction: column;

    & > span {
        color: map-get($base, main);
        font-size: 84px;
        line-height: 100%;
        margin: 0;
        margin-bottom: 59px;
    }

    & > div {
        display: flex;
        flex-wrap: wrap;
        gap: 32px 40px;
        transition: 0.3s ease-in-out;
        box-sizing: border-box;
        padding-bottom: 50px;
    }
}
</style>
