# ChuckNorrisJokes SDK

Fetch hand-curated Chuck Norris facts as JSON, with categories and free-text search

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Chuck Norris Jokes API

The [Chuck Norris Jokes API](https://api.chucknorris.io) is a free JSON service that returns hand-curated Chuck Norris facts. It is an independent project (not affiliated with Chuck Norris himself) and also ships Slack and Facebook Messenger integrations.

What you get from the API:

- A random joke via `/jokes/random`, returned as a JSON object with `id`, `value`, `icon_url`, `url`, and `categories`
- A list of available joke categories via `/jokes/categories`
- A category-filtered random joke via `/jokes/random?category={name}`
- Free-text search across the joke corpus via `/jokes/search?query={query}`

No API key or authentication is required. Public documentation does not specify rate limits, and CORS support is not advertised, so browser-side use may need a proxy.

## Try it

**TypeScript**
```bash
npm install chuck-norris-jokes
```

**Python**
```bash
pip install chuck-norris-jokes-sdk
```

**PHP**
```bash
composer require voxgig/chuck-norris-jokes-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/chuck-norris-jokes-sdk/go
```

**Ruby**
```bash
gem install chuck-norris-jokes-sdk
```

**Lua**
```bash
luarocks install chuck-norris-jokes-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ChuckNorrisJokesSDK } from 'chuck-norris-jokes'

const client = new ChuckNorrisJokesSDK({})

// List all categorys
const categorys = await client.Category().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o chuck-norris-jokes-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "chuck-norris-jokes": {
      "command": "/abs/path/to/chuck-norris-jokes-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Category** | The set of joke categories available in the corpus, listed via `GET /jokes/categories` and usable as the `category` query parameter on random-joke requests. | `/jokes/categories` |
| **Joke** | A single Chuck Norris fact resource with fields like `id`, `value`, and `icon_url`; fetch one at random via `GET /jokes/random` (optionally filtered by `?category=`). | `/jokes/random` |
| **Search** | Free-text lookup across the joke corpus via `GET /jokes/search?query={query}`, returning matching joke objects. | `/jokes/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from chucknorrisjokes_sdk import ChuckNorrisJokesSDK

client = ChuckNorrisJokesSDK({})

# List all categorys
categorys, err = client.Category(None).list(None, None)
```

### PHP

```php
<?php
require_once 'chucknorrisjokes_sdk.php';

$client = new ChuckNorrisJokesSDK([]);

// List all categorys
[$categorys, $err] = $client->Category(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/chuck-norris-jokes-sdk/go"

client := sdk.NewChuckNorrisJokesSDK(map[string]any{})

// List all categorys
categorys, err := client.Category(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "ChuckNorrisJokes_sdk"

client = ChuckNorrisJokesSDK.new({})

# List all categorys
categorys, err = client.Category(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("chuck-norris-jokes_sdk")

local client = sdk.new({})

-- List all categorys
local categorys, err = client:Category(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ChuckNorrisJokesSDK.test()
const result = await client.Category().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ChuckNorrisJokesSDK.test(None, None)
result, err = client.Category(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ChuckNorrisJokesSDK::test(null, null);
[$result, $err] = $client->Category(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Category(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ChuckNorrisJokesSDK.test(nil, nil)
result, err = client.Category(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Category(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Chuck Norris Jokes API

- Upstream: [https://api.chucknorris.io](https://api.chucknorris.io)

- Free to use service with no stated rate limits or authentication requirements
- Not officially affiliated with or endorsed by Chuck Norris
- Hosted via Jugendstil.io; jokes are community/hand-curated
- No explicit licence terms published for the joke corpus

---

Generated from the Chuck Norris Jokes API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
