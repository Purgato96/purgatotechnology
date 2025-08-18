<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class NoCacheForInertia
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if ($request->header('X-Inertia')) {
            $response->headers->set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
            $response->headers->set('Pragma', 'no-cache');
            $response->headers->set('Expires', '0');
            $response->headers->set('Vary', 'X-Inertia, X-Inertia-Version, Accept');
        }

        return $response;
    }
}
