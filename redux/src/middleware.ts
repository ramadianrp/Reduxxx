import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; 
import { readPayloadJose } from "./db/helpers/jwt";


export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/api/wishlists")) {
        const auth = cookies().get("Authorization")?.value;
        // console.log(auth, '<<<<< auuutthh');
        

        if (!auth) {
            return NextResponse.json(
                {
                    error: "Invalid or expired token"
                },
                {
                    status: 401
                }
            );
        }

        const [type, accessToken] = auth?.split(" ");
        if (type !== "Bearer") {
            return NextResponse.json(
                {
                    error: "Invalid token"
                },
                {
                    status: 401
                }
            );
        }

        const decoded = await readPayloadJose<{ _id: string, email: string }>(accessToken);
        // console.log(decoded, "<<< decoded");
        

        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-user-id", decoded._id);
        requestHeaders.set("x-user-email", decoded.email);

        // console.log(requestHeaders, "<<<< reqhead");
        

        const response = NextResponse.next({
            request: {
                headers: requestHeaders
            }
        });
        // console.log(response, "<<< response");
        
        return response;
    }

    if(request.nextUrl.pathname.startsWith("/wishlists")){
        const auth = cookies().get("Authorization")?.value;
        if(!auth){
            request.nextUrl.pathname = "/login";
            return NextResponse.redirect(request.nextUrl);
        }  
    };
};

export const config ={
    matcher: ["/api/wishlists/:path*", "/wishlists/:path*", "/api/products/:path*", "/products/:path*"],
}
