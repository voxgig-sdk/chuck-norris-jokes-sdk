<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK configuration

class ChuckNorrisJokesConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ChuckNorrisJokes",
                "slug" => "chuck-norris-jokes",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.chucknorris.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "category" => [],
                    "joke" => [],
                    "search" => [],
                ],
            ],
            "entity" => [
        'category' => [
          'fields' => [],
          'name' => 'category',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/jokes/categories',
                  'parts' => [
                    'jokes',
                    'categories',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'joke' => [
          'fields' => [
            [
              'name' => 'categories',
              'short' => 'Categories associated with the joke',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'icon_url',
              'req' => true,
              'short' => 'URL to Chuck Norris avatar icon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the joke',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'short' => 'Direct URL to the joke',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'value',
              'req' => true,
              'short' => 'The actual Chuck Norris joke text',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'joke',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'dev',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/jokes/random',
                  'parts' => [
                    'jokes',
                    'random',
                  ],
                  'select' => [
                    '$action' => 'random',
                    'exist' => [
                      'category',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.categories`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [
            [
              'name' => 'categories',
              'short' => 'Categories associated with the joke',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'icon_url',
              'req' => true,
              'short' => 'URL to Chuck Norris avatar icon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the joke',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'short' => 'Direct URL to the joke',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'value',
              'req' => true,
              'short' => 'The actual Chuck Norris joke text',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'roundhouse',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/jokes/search',
                  'parts' => [
                    'jokes',
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.result`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ChuckNorrisJokesFeatures::make_feature($name);
    }
}
