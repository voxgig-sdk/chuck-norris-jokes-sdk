"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('JokeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CHUCK_NORRIS_JOKES_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CHUCK_NORRIS_JOKES_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ChuckNorrisJokesSDK.test();
        const ent = testsdk.Joke();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CHUCK_NORRIS_JOKES_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'joke.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "categories", "req": false, "short": "Categories associated with the joke", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "format": "uri", "name": "icon_url", "req": true, "short": "URL to Chuck Norris avatar icon", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for the joke", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "uri", "name": "url", "req": true, "short": "Direct URL to the joke", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "value", "req": true, "short": "The actual Chuck Norris joke text", "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "joke", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "dev", "kind": "query", "name": "category", "orig": "category", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /jokes/random", "json": "{\"operationId\":\"getRandomJoke\",\"parameters\":[{\"description\":\"Filter jokes by category\",\"example\":\"dev\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"icon_url\":\"https://api.chucknorris.io/img/avatar/chuck-norris.png\",\"id\":\"4mP0hJgjQN2l2eKkoJ6sDQ\",\"url\":\"https://api.chucknorris.io/jokes/4mP0hJgjQN2l2eKkoJ6sDQ\",\"value\":\"Water boils faster when Chuck Norris is watching it.\"},\"schema\":{\"properties\":{\"categories\":{\"description\":\"Categories associated with the joke\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"icon_url\":{\"description\":\"URL to Chuck Norris avatar icon\",\"format\":\"uri\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the joke\",\"type\":\"string\"},\"url\":{\"description\":\"Direct URL to the joke\",\"format\":\"uri\",\"type\":\"string\"},\"value\":{\"description\":\"The actual Chuck Norris joke text\",\"type\":\"string\"}},\"required\":[\"icon_url\",\"id\",\"url\",\"value\"],\"type\":\"object\"}}},\"description\":\"Successful response with a random Chuck Norris joke\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"path\":{\"description\":\"API path that generated the error\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Category not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/jokes/random", "segments": [{ "lit": "jokes" }, { "lit": "random" }], "select": { "$action": "random", "exist": ["category"] }, "transform": { "req": "`reqdata`", "res": "`body.categories`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "joke", "name__orig": "joke", "Name": "Joke", "name_": "joke", "name-": "joke", "NAME": "JOKE", "index$": 1 }, { "active": true, "entity": "joke", "key$": "BasicJokeFlow", "kind": "basic", "name": "BasicJokeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "joke_ref01" } }], "index$": 0 }] }, 'Joke');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let joke_ref01_data = Object.values(setup.data.existing.joke)[0];
        // LIST
        const joke_ref01_ent = client.Joke();
        const joke_ref01_match = {};
        const joke_ref01_list = (await joke_ref01_ent.list(joke_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/joke/JokeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ChuckNorrisJokesSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['joke01', 'joke02', 'joke03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CHUCK_NORRIS_JOKES_TEST_JOKE_ENTID': idmap,
        'CHUCK_NORRIS_JOKES_TEST_LIVE': 'FALSE',
        'CHUCK_NORRIS_JOKES_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CHUCK_NORRIS_JOKES_TEST_JOKE_ENTID'];
    const live = 'TRUE' === env.CHUCK_NORRIS_JOKES_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CHUCK_NORRIS_JOKES_TEST_JOKE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ChuckNorrisJokesSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CHUCK_NORRIS_JOKES_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=JokeEntity.test.js.map