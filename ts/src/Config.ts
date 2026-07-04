
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.chucknorris.io',

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
              "active": true,
              "args": {},
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
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "joke": {
      "fields": [
        {
          "active": true,
          "name": "category",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "icon_url",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "value",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        }
      ],
      "name": "joke",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "dev",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "active": true,
          "name": "category",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "icon_url",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "value",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "roundhouse",
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
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

