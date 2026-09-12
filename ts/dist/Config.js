"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ChuckNorrisJokes',
        slug: "chuck-norris-jokes",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api.chucknorris.io",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            category: {},
            joke: {},
            search: {},
        }
    };
    entity = {
        "category": {
            "fields": [],
            "name": "category",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/categories",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "lit": "categories"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "jokes",
                                "categories"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "joke": {
            "fields": [
                {
                    "name": "categories",
                    "short": "Categories associated with the joke",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "uri",
                    "name": "icon_url",
                    "req": true,
                    "short": "URL to Chuck Norris avatar icon",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for the joke",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "url",
                    "req": true,
                    "short": "Direct URL to the joke",
                    "type": "`$STRING`"
                },
                {
                    "name": "value",
                    "req": true,
                    "short": "The actual Chuck Norris joke text",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "joke",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "dev",
                                        "kind": "query",
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/random",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "lit": "random"
                                }
                            ],
                            "select": {
                                "$action": "random",
                                "exist": [
                                    "category"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.categories`"
                            },
                            "parts": [
                                "jokes",
                                "random"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search": {
            "fields": [
                {
                    "name": "categories",
                    "short": "Categories associated with the joke",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "uri",
                    "name": "icon_url",
                    "req": true,
                    "short": "URL to Chuck Norris avatar icon",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for the joke",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "url",
                    "req": true,
                    "short": "Direct URL to the joke",
                    "type": "`$STRING`"
                },
                {
                    "name": "value",
                    "req": true,
                    "short": "The actual Chuck Norris joke text",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "roundhouse",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jokes/search",
                            "segments": [
                                {
                                    "lit": "jokes"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.result`"
                            },
                            "parts": [
                                "jokes",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map