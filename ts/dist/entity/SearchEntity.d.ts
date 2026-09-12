import { ChuckNorrisJokesEntityBase } from '../ChuckNorrisJokesEntityBase';
import type { ChuckNorrisJokesSDK } from '../ChuckNorrisJokesSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../ChuckNorrisJokesTypes';
declare class SearchEntity extends ChuckNorrisJokesEntityBase<Search> {
    constructor(client: ChuckNorrisJokesSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
