import { Context } from './Context';
declare class ChuckNorrisJokesError extends Error {
    isChuckNorrisJokesError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ChuckNorrisJokesError };
