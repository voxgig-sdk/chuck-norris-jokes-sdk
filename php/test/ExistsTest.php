<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK exists test

require_once __DIR__ . '/../chucknorrisjokes_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ChuckNorrisJokesSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
