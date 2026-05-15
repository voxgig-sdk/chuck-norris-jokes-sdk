<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ChuckNorrisJokesMakeContext
{
    public static function call(array $ctxmap, ?ChuckNorrisJokesContext $basectx): ChuckNorrisJokesContext
    {
        return new ChuckNorrisJokesContext($ctxmap, $basectx);
    }
}
