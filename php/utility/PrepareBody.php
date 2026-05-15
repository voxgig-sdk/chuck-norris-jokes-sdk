<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK utility: prepare_body

class ChuckNorrisJokesPrepareBody
{
    public static function call(ChuckNorrisJokesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
