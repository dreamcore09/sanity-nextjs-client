export type SanityApiVersion = 'v1' | 'vX' | 'v2021-03-25' | 'v2021-10-21' | 'v2022-03-07';
export type SanityQueryPerspective = 'raw' | 'previewDrafts' | 'published' | 'drafts';
export type SanityApiHost = 'api.sanity.io' | 'apicdn.sanity.io';

export interface SanityConfig {
    apiHost: SanityApiHost
    apiKey?: string
    apiVersion? : SanityApiVersion
    projectId: string
    dataSet: string
}

export type SanityResult<T> = {
    query: string;
    result: T[];
    syncTags: string;
    ms: number;
}