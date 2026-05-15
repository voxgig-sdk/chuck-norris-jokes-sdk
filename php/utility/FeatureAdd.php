<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK utility: feature_add

class ChuckNorrisJokesFeatureAdd
{
    public static function call(ChuckNorrisJokesContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
