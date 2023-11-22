<template>
    <div class="footer">
        <div class="container">
            <span class="title">Is there a project?</span>
            <div>
                <div class="info">
                    <span class="subtitle">Let’s work together</span>
                </div>
                <div class="contacts">
                    <div>
                        <span>For all questions</span>
                        <div>
                            <NuxtLink href="tel:79202780068">+7 (920) 278—00—68</NuxtLink>
                            <NuxtLink href="mailto:qtim@agency.com">qtim@agency.com</NuxtLink>
                        </div>
                    </div>
                    <div>
                        <span>Office in Russia</span>
                        <div>
                            <span>139 Ruben Station Lake Drew, NM 52678</span>
                            <Button mode="main">
                                <span class="icon arrow" />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <span>Office in Dubai</span>
                        <div>
                            <span>139 Ruben Station Lake Drew, NM 52678</span>
                            <Button mode="main">
                                <span class="icon arrow" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="links">
                    <NuxtLink to="">Facebook</NuxtLink>
                    <NuxtLink to="">Instagram</NuxtLink>
                    <NuxtLink to="">Telegram</NuxtLink>
                </div>
                <Button mode="main">Go</Button>
                <div class="links">
                    <NuxtLink to="">Behance</NuxtLink>
                    <NuxtLink to="">Linkedn</NuxtLink>
                    <NuxtLink to="">Privacy Policy</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    margin-top: auto;
    background-color: map-get($violet, 100);
    height: 900px;
    overflow: hidden;

    & > .container {
        padding: 140px 112px 0 112px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: space-between;
        height: 100%;
        margin: auto;

        & > .title {
            font-size: 16px;
            line-height: 120%;
            letter-spacing: 0.16px;
        }

        & > div {
            display: flex;
            justify-content: space-between;

            &:last-of-type {
                max-height: 179px;
            }

            & > .info {
                display: flex;
                flex-direction: column;
                gap: 56px;
                color: map-get($base, main);
                max-width: 464px;
                width: 100%;

                & > .subtitle {
                    font-size: 112px;
                    line-height: 100%;
                    position: relative;
                    display: inline-block;

                    &::after,
                    &::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 25px;
                        width: 100%;
                        height: 1px;
                        background-color: map-get($base, main);
                    }

                    &::before {
                        bottom: 60%;
                    }
                }
            }

            & > .contacts {
                display: flex;
                flex-direction: column;
                gap: 36px;
                color: map-get($base, main);
                font-size: 16px;
                line-height: 120%;
                letter-spacing: 0.16px;
                padding-right: 233px;

                & > div {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    max-width: 152px;

                    & > div {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;

                        & > a {
                            color: map-get($base, main);
                            text-decoration: none;
                        }

                        & > button {
                            width: 32px;
                            height: 32px;
                            padding: 8px 16px;
                            border: none;

                            & > .icon {
                                width: 9px;
                                height: 9px;
                            }
                        }

                        &:first-of-type {
                            gap: 4px;
                        }
                    }
                }
            }

            & > .links {
                display: flex;
                align-items: flex-end;
                gap: 32px;
                padding-bottom: 30px;

                & > a {
                    color: map-get($base, main);
                    font-size: 16px;
                    line-height: 120%;
                    letter-spacing: 0.16px;
                    position: relative;
                    height: fit-content;
                    cursor: pointer;

                    &::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 1px;
                        background-color: map-get($base, main);
                    }
                }
            }

            & > button {
                font-size: 32px;
                width: 358px;
                height: 358px;
                border-radius: 358px;
                border: none;
                padding-bottom: 90px;
            }
        }
    }
}
</style>
