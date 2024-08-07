import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


const isProtectedRoute = createRouteMatcher([
  // '/dashboard(.*)',
  // '/form(.*)',
  "/",
  "/api(.*)",  // protect all API routes
]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};