export interface Pagination {
    page?: number;
    limit?: number;
    sort?: {
        field: string;
        by: "ASC" | "DESC";
    }[];
    search?: {
        field: string;
        value: string;
    }[];
}
