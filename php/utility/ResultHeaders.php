<?php
declare(strict_types=1);

// ChuckNorrisJokes SDK utility: result_headers

class ChuckNorrisJokesResultHeaders
{
    public static function call(ChuckNorrisJokesContext $ctx): ?ChuckNorrisJokesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
