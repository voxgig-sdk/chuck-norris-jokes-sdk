<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK base feature

class ChuckNorrisJokesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ChuckNorrisJokesContext $ctx, array $options): void {}
    public function PostConstruct(ChuckNorrisJokesContext $ctx): void {}
    public function PostConstructEntity(ChuckNorrisJokesContext $ctx): void {}
    public function SetData(ChuckNorrisJokesContext $ctx): void {}
    public function GetData(ChuckNorrisJokesContext $ctx): void {}
    public function GetMatch(ChuckNorrisJokesContext $ctx): void {}
    public function SetMatch(ChuckNorrisJokesContext $ctx): void {}
    public function PrePoint(ChuckNorrisJokesContext $ctx): void {}
    public function PreSpec(ChuckNorrisJokesContext $ctx): void {}
    public function PreRequest(ChuckNorrisJokesContext $ctx): void {}
    public function PreResponse(ChuckNorrisJokesContext $ctx): void {}
    public function PreResult(ChuckNorrisJokesContext $ctx): void {}
    public function PreDone(ChuckNorrisJokesContext $ctx): void {}
    public function PreUnexpected(ChuckNorrisJokesContext $ctx): void {}
}
