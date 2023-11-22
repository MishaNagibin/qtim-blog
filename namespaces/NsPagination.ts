export namespace NsPagination {
    export interface Props {
        totalPages: number
        currentPage: number
    }
    export interface Emits {
        (e: "change-page", value: number): void
    }
}