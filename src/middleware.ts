import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role: string;
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);

    if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  } catch (error) {
    console.error("Ошибка при декодировании токена:", error);
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/account/:path*"],
};
