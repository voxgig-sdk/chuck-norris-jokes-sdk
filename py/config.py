# ChuckNorrisJokes SDK configuration


def make_config():
    return {
        "main": {
            "name": "ChuckNorrisJokes",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.chucknorris.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "category": {},
                "joke": {},
                "search": {},
            },
        },
        "entity": {
      "category": {
        "fields": [],
        "name": "category",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/jokes/categories",
                "parts": [
                  "jokes",
                  "categories",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "joke": {
        "fields": [
          {
            "name": "category",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "icon_url",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "value",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "joke",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/jokes/random",
                "parts": [
                  "jokes",
                  "random",
                ],
                "select": {
                  "$action": "random",
                  "exist": [
                    "category",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "category",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "icon_url",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "value",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "search",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/jokes/search",
                "parts": [
                  "jokes",
                  "search",
                ],
                "select": {
                  "exist": [
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
