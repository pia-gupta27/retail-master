export const authConfig = {
    providers:[],
    pages: {
        signIn: "/login",
    },
    callbacks:{
        async authorized({ req, token }) {
            const isLoggedIn = !!token;  // Check if the token is available, which indicates the user is logged in
            const isOnDashboard = req.url.startsWith("/dashboard");

            if (isOnDashboard) {
                return isLoggedIn;  // Only allow access to dashboard if logged in
            }

            if (isLoggedIn) {
                return true;  // Allow access to other pages if logged in
            }

            return false;
        },
    },
};


/*if(isOnDashboard){
    if(isLoggedIn) return true;
    return false;
}else if(isLoggedIn){
    return Response.redirect(new URL("/dashboard",request.nextUrl));
}
return true;*/