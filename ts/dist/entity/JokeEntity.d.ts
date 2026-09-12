import { ChuckNorrisJokesEntityBase } from '../ChuckNorrisJokesEntityBase';
import type { ChuckNorrisJokesSDK } from '../ChuckNorrisJokesSDK';
import type { Control } from '../types';
import type { Joke, JokeListMatch } from '../ChuckNorrisJokesTypes';
declare class JokeEntity extends ChuckNorrisJokesEntityBase<Joke> {
    constructor(client: ChuckNorrisJokesSDK, entopts: any);
    make(this: JokeEntity): JokeEntity;
    list(this: any, reqmatch?: JokeListMatch, ctrl?: Control): Promise<JokeEntity[]>;
}
export { JokeEntity };
