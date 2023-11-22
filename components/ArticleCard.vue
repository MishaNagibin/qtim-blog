<script lang="ts" setup>
import type { NsArticles } from "@/namespaces/NsArticles"

const props = defineProps<{
        article: NsArticles.Article
    }>(),
    methods = {
        errorImage() {
            props.article.image = "/image.png"
        },
    }
</script>

<template>
    <div class="article-card">
        <img
            :src="article.image"
            @error="methods.errorImage"
        />
        <div>
            <span>{{ article.preview }}</span>
            <NuxtLink :to="{ name: 'article-id', params: { id: article.id } }">Read more</NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.article-card {
    display: flex;
    flex-direction: column;
    width: 280px;
    gap: 24px;
    transition: 0.3s ease-in-out;

    & > img {
        max-width: 280px;
        max-height: 280px;
        width: 100%;
        height: 100%;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 12px;

        & > span {
            display: -webkit-box;
            overflow: hidden;
            color: map-get($base, main);
            text-overflow: ellipsis;
            font-size: 20px;
            line-height: 120%;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }

        & > a {
            visibility: hidden;
            color: map-get($violet, 100);
            font-size: 20px;
            line-height: 120%;
            text-decoration: none;
            transition: 0.3s ease-in-out;

            &:hover {
                cursor: pointer;
                color: map-get($purple, 100);
            }
        }
    }

    &:hover {
        transform: translateY(-20px);

        & > div {
            & > a {
                visibility: visible;
            }
        }
    }
}
</style>
