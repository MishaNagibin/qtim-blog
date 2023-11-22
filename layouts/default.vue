<template>
    <Header />
    <NuxtPage />
    <Footer />
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "TT Commons";
}

html {
    height: 100%;
}

*::-webkit-scrollbar {
    display: none;
}

#__nuxt {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100%;
}

.container {
    max-width: 1440px;
    width: 100%;
}
</style>
