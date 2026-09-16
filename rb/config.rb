# ChuckNorrisJokes SDK configuration

module ChuckNorrisJokesConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ChuckNorrisJokes",
        "slug" => "chuck-norris-jokes",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.chucknorris.io",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "category" => {},
          "joke" => {},
          "search" => {},
        },
      },
      "entity" => {
        "category" => {
          "fields" => [],
          "name" => "category",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/categories",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "lit" => "categories",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "jokes",
                    "categories",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "joke" => {
          "fields" => [
            {
              "name" => "categories",
              "short" => "Categories associated with the joke",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uri",
              "name" => "icon_url",
              "req" => true,
              "short" => "URL to Chuck Norris avatar icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the joke",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "req" => true,
              "short" => "Direct URL to the joke",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "req" => true,
              "short" => "The actual Chuck Norris joke text",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "joke",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "dev",
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/random",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "lit" => "random",
                    },
                  ],
                  "select" => {
                    "$action" => "random",
                    "exist" => [
                      "category",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.categories`",
                  },
                  "parts" => [
                    "jokes",
                    "random",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "categories",
              "short" => "Categories associated with the joke",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uri",
              "name" => "icon_url",
              "req" => true,
              "short" => "URL to Chuck Norris avatar icon",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the joke",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "req" => true,
              "short" => "Direct URL to the joke",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "req" => true,
              "short" => "The actual Chuck Norris joke text",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "roundhouse",
                        "kind" => "query",
                        "name" => "query",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jokes/search",
                  "segments" => [
                    {
                      "lit" => "jokes",
                    },
                    {
                      "lit" => "search",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "query",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.result`",
                  },
                  "parts" => [
                    "jokes",
                    "search",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ChuckNorrisJokesFeatures.make_feature(name)
  end
end
