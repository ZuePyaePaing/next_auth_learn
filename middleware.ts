import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    // Return null to allow access to API authentication routes
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      // Redirect to default login redirect URL if user is already logged in
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    // Allow access to authenticated routes if user is not logged in
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    // Redirect to login page if user is not logged in and accessing non-public routes
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  // Allow access to public routes
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
