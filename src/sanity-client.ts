import { SanityConfig, SanityQueryPerspective, SanityResult } from "./sanity-client-types";

export class SanityClient {
    private config: SanityConfig

    constructor(config: SanityConfig) {
        this.config = config
    }

    query = async <T>(query : string, perspective : SanityQueryPerspective = 'published')  => {
        const apiUrl = queryUriBuilder(this.config, query, perspective);
        const headers : HeadersInit = this.config?.apiKey ? { 'Authorization' : `Bearer ${this.config?.apiKey}`} : { };
        const data = await fetch(apiUrl.href, { headers: headers });
        const result : SanityResult<T> = await data.json();
        return result;
    }
}

export const queryUriBuilder = (config: SanityConfig, query: string, perspective : SanityQueryPerspective) => {
    return new URL(`https://${config?.projectId}.${config?.apiHost}/${config?.apiVersion}/data/query/${config?.dataSet}?query=${encodeURIComponent(query)}&perspective=${perspective}`);
}