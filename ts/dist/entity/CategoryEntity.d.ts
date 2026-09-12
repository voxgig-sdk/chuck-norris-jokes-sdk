import { ChuckNorrisJokesEntityBase } from '../ChuckNorrisJokesEntityBase';
import type { ChuckNorrisJokesSDK } from '../ChuckNorrisJokesSDK';
import type { Control } from '../types';
import type { Category, CategoryListMatch } from '../ChuckNorrisJokesTypes';
declare class CategoryEntity extends ChuckNorrisJokesEntityBase<Category> {
    constructor(client: ChuckNorrisJokesSDK, entopts: any);
    make(this: CategoryEntity): CategoryEntity;
    list(this: any, reqmatch?: CategoryListMatch, ctrl?: Control): Promise<CategoryEntity[]>;
}
export { CategoryEntity };
