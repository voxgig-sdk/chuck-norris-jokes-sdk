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

/** Match filter for Category#list (any subset of Category fields). */
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

/** Match filter for Joke#list (any subset of Joke fields). */
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

/** Match filter for Search#list (any subset of Search fields). */
class SearchListMatch
{
    public ?array $category = null;
    public ?string $icon_url = null;
    public ?string $id = null;
    public ?string $url = null;
    public ?string $value = null;
}

