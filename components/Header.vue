<template>
    <div class="header">
        <div class="container">
            <NuxtLink to="/">
                <img src="/logo.svg" />
            </NuxtLink>
            <div class="menu">
                <NuxtLink to="">Works</NuxtLink>
                <NuxtLink to="">About</NuxtLink>
            </div>
            <div class="buttons">
                <Button>
                    <span class="icon language" />
                </Button>
                <Button mode="main"><span>Let’s work</span></Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 121px;
    flex-shrink: 0;
    background-color: map-get($base, contrast);

    & > .container {
        display: flex;
        align-items: center;
        gap: 105px;
        padding: 0 40px;

        & > .menu {
            display: flex;
            gap: 58px;
            margin-left: auto;

            & > a {
                color: map-get($base, main);
                font-size: 20px;
                line-height: 100%;
                cursor: pointer;
            }
        }

        & > .buttons {
            display: flex;
            align-items: center;
            gap: 16px;
        }
    }
}
</style>
