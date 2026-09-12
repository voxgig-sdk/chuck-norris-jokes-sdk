export interface Category {
}
export interface CategoryListMatch {
}
export interface Joke {
    categories?: any[];
    icon_url: string;
    id: string;
    url: string;
    value: string;
}
export interface JokeListMatch {
    category?: string;
    $action?: string;
    [action: string]: any;
}
export interface Search {
    categories?: any[];
    icon_url: string;
    id: string;
    url: string;
    value: string;
}
export interface SearchListMatch {
    query: string;
}
