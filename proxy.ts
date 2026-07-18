import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Admin panel is unfinished — hide it behind a 404 until it's ready.
// Remove this file (or the matcher) to make /admin reachable again.
export function proxy(request: NextRequest) {
	return NextResponse.rewrite(new URL('/admin-hidden', request.url));
}

export const config = {
	matcher: '/admin/:path*',
};
