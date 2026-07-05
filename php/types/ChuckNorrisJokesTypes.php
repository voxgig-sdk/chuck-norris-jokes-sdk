<?php
declare(strict_types=1);

// Typed models for the ChuckNorrisJokes SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Category entity data model. */
class Category
{
}

/** Request payload for Category#list. */
class CategoryListMatch
{
}

/** Joke entity data model. */
class Joke
{
    public ?array $category = null;
    public string $icon_url;
    public string $id;
    public string $url;
    public string $value;
}

/** Request payload for Joke#list. */
class JokeListMatch
{
    public ?array $category = null;
    public ?string $icon_url = null;
    public ?string $id = null;
    public ?string $url = null;
    public ?string $value = null;
}

/** Search entity data model. */
class Search
{
    public ?array $category = null;
    public string $icon_url;
    public string $id;
    public string $url;
    public string $value;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?array $category = null;
    public ?string $icon_url = null;
    public ?string $id = null;
    public ?string $url = null;
    public ?string $value = null;
}

