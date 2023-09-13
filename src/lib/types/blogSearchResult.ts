export interface BlogMetadata {
    id: number;
    title: string;
    created_at: Date;
    description: string;
    slug: string;
    image: string;
    tags: string[];
}

export interface BlogSearchResult {
    blogs: BlogMetadata[];
    pageCount: number;
}