import api from "@/utils/api"
import type { NsArticles } from "@/namespaces/NsArticles"

function get() {
    return api.get<NsArticles.Article[]>("posts")
}

function getArticle(id: number) {
    return api.get<NsArticles.Article>(`posts/${id}`)
}

export default {
    get,
    getArticle,
}
