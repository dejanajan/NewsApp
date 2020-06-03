export interface Source {
    id: number;
    name: string;
    description: string;
    url: string;
    language: string;
    country: string; 
}

export interface Response {
    status: string;
    totalResults: number;
    sources: Source[];
}

export interface SrcTop {
    source: SubSource[];
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface RspTop {
    status: string;
    totalResults: number;
    articles: SrcTop[];
}

export interface SubSource {
    id: string | number;
    name: string;
}