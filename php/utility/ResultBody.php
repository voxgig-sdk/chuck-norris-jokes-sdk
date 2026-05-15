<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK utility: result_body

class ChuckNorrisJokesResultBody
{
    public static function call(ChuckNorrisJokesContext $ctx): ?ChuckNorrisJokesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
