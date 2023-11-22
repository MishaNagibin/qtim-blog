import articles from "@/api/articles"
import type { NsArticles } from "@/namespaces/NsArticles"

export const useMainStore = defineStore("main", () => {
    const data = reactive({
            articles: [] as NsArticles.Article[],
            article: undefined as NsArticles.Article | undefined,
            currentPage: 1,
        }),
        methods = {
            changeCurrentPage(val: number) {
                data.currentPage = val
            },
            getArticle(id: number) {
                articles
                    .getArticle(id)
                    .then((a) => {
                        data.article = a
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            },
            getArticles() {
                articles
                    .get()
                    .then((a) => {
                        data.articles = a
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            },
        }

    return { data, methods }
})
