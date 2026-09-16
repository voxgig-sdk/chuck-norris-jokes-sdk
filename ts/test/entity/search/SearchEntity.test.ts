

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ChuckNorrisJokesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CHUCK_NORRIS_JOKES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CHUCK_NORRIS_JOKES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ChuckNorrisJokesSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CHUCK_NORRIS_JOKES_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"categories","req":false,"short":"Categories associated with the joke","type":"`$ARRAY`","index$":0},{"active":true,"format":"uri","name":"icon_url","req":true,"short":"URL to Chuck Norris avatar icon","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":true,"short":"Unique identifier for the joke","type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"url","req":true,"short":"Direct URL to the joke","type":"`$STRING`","index$":3},{"active":true,"name":"value","req":true,"short":"The actual Chuck Norris joke text","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"roundhouse","kind":"query","name":"query","orig":"query","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /jokes/search","json":"{\"operationId\":\"searchJokes\",\"parameters\":[{\"description\":\"The search query term\",\"example\":\"roundhouse\",\"in\":\"query\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"result\":[{\"icon_url\":\"https://api.chucknorris.io/img/avatar/chuck-norris.png\",\"id\":\"abc123\",\"url\":\"https://api.chucknorris.io/jokes/abc123\",\"value\":\"Chuck Norris can roundhouse kick through space and time.\"},{\"icon_url\":\"https://api.chucknorris.io/img/avatar/chuck-norris.png\",\"id\":\"def456\",\"url\":\"https://api.chucknorris.io/jokes/def456\",\"value\":\"The only thing faster than a Chuck Norris roundhouse kick is Chuck Norris.\"}],\"total\":2},\"schema\":{\"properties\":{\"result\":{\"description\":\"Array of jokes matching the search query\",\"items\":{\"properties\":{\"categories\":{\"description\":\"Categories associated with the joke\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"icon_url\":{\"description\":\"URL to Chuck Norris avatar icon\",\"format\":\"uri\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the joke\",\"type\":\"string\"},\"url\":{\"description\":\"Direct URL to the joke\",\"format\":\"uri\",\"type\":\"string\"},\"value\":{\"description\":\"The actual Chuck Norris joke text\",\"type\":\"string\"}},\"required\":[\"icon_url\",\"id\",\"url\",\"value\"],\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"description\":\"Total number of jokes found\",\"type\":\"integer\"}},\"required\":[\"total\",\"result\"],\"type\":\"object\"}}},\"description\":\"Successful response with search results\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type\",\"type\":\"string\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"path\":{\"description\":\"API path that generated the error\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp of the error\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - query parameter missing or invalid\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jokes/search","segments":[{"lit":"jokes"},{"lit":"search"}],"select":{"exist":["query"]},"transform":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":2}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ChuckNorrisJokesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CHUCK_NORRIS_JOKES_TEST_SEARCH_ENTID': idmap,
    'CHUCK_NORRIS_JOKES_TEST_LIVE': 'FALSE',
    'CHUCK_NORRIS_JOKES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CHUCK_NORRIS_JOKES_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.CHUCK_NORRIS_JOKES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CHUCK_NORRIS_JOKES_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ChuckNorrisJokesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
