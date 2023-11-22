<script lang="ts" setup>
const data = reactive({ imgSrc: "" }),
    mainStore = useMainStore(),
    id = Number(useRoute().params.id),
    article = computed(() => mainStore.data.article),
    methods = {
        errorImage() {
            data.imgSrc = "/image2.png"
        },
    }

if (article.value === undefined || Number(article.value.id) !== id) {
    await mainStore.methods.getArticle(id)
}

watch(
    () => article.value?.image,
    (n) => {
        data.imgSrc = n ?? ""
    },
)
</script>

<template>
    <main class="article">
        <div class="container">
            <h1>{{ article?.title }}</h1>
            <img
                :src="data.imgSrc"
                @error="methods.errorImage"
            />
            <div class="desc">
                <span>About</span>
                <span> {{ article?.description }}</span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.article {
    padding: 119px 112px 80px 112px;
    box-sizing: border-box;

    & > .container {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 80px;

        & > h1 {
            color: map-get($base, main);
            font-size: 84px;
            line-height: 100%;
            margin: 0;
            font-style: normal;
            font-weight: 400;
        }

        & > img {
            max-width: 1216px;
            max-height: 700px;
            width: 100%;
            height: 100%;
        }

        & > .desc {
            display: flex;
            flex-direction: column;
            gap: 32px;
            color: map-get($base, main);

            & > span {
                &:first-of-type {
                    font-size: 16px;
                    line-height: 100%;
                }

                &:last-of-type {
                    font-size: 36px;
                    line-height: 124%;
                    max-width: 695px;
                }
            }
        }
    }
}
</style>
