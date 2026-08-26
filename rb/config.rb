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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
                  "parts" => [
                    "jokes",
                    "categories",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
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
                  "parts" => [
                    "jokes",
                    "random",
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
                  "parts" => [
                    "jokes",
                    "search",
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
