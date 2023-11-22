<script lang="ts" setup>
import type { NsArticles } from "@/namespaces/NsArticles"

const mainStore = useMainStore(),
    calculated = {
        articles: computed((): NsArticles.Article[] => {
            return mainStore.data.articles
        }),
        currentPage: computed((): number => {
            return mainStore.data.currentPage
        }),
    },
    methods = {
        changePage(val: number) {
            mainStore.methods.changeCurrentPage(val)
        },
    }

if (calculated.articles.value.length === 0) {
    mainStore.methods.getArticles()
}
</script>

<template>
    <main class="index">
        <div class="container">
            <Articles
                :articles="calculated.articles.value"
                :current-page="calculated.currentPage.value"
                @change-page="methods.changePage"
            />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.index {
    padding: 120px 112px 140px 112px;
    box-sizing: border-box;

    & > .container {
        margin: 0 auto;
    }
}
</style>
