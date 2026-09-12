import { CategoryEntity } from './entity/CategoryEntity';
import { JokeEntity } from './entity/JokeEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './ChuckNorrisJokesTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ChuckNorrisJokesEntityBase } from './ChuckNorrisJokesEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ChuckNorrisJokesSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Category(entopts?: Record<string, any>): CategoryEntity;
    Joke(entopts?: Record<string, any>): JokeEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ChuckNorrisJokesSDK;
    tester(testopts?: any, sdkopts?: any): ChuckNorrisJokesSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ChuckNorrisJokesSDK;
export { stdutil, config, BaseFeature, ChuckNorrisJokesEntityBase, ChuckNorrisJokesSDK, SDK, };
