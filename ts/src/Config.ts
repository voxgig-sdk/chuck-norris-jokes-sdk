
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ChuckNorrisJokes',
        slug: "chuck-norris-jokes",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.chucknorris.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      category: {
      },

      joke: {
      },

      search: {
      },

    }
  }


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
              "parts": [
                "jokes",
                "categories"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "jokes",
                "random"
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
              }
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
              "parts": [
                "jokes",
                "search"
              ],
              "select": {
                "exist": [
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.result`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

