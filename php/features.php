<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ChuckNorrisJokesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ChuckNorrisJokesBaseFeature();
            case "test":
                return new ChuckNorrisJokesTestFeature();
            default:
                return new ChuckNorrisJokesBaseFeature();
        }
    }
}
