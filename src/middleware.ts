// import { NextResponse,NextRequest } from 'next/server'
// import acceptLanguage from 'accept-language'
// import { fallbackLng, languages, cookieName } from './app/i18n/settings'

// //acceptLanguage.languages(languages)

//  export const config = {
// //   // matcher: '/:lng*'
// matcher: ['/', '/(de|en)/:path*']
//    //matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
//  }

// export function middleware(req: NextRequest) {
//   console.log("req : " + req);
//   let lng: string | null = null
//   if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value || null)
//   if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language') || null)
//   if (!lng) lng = fallbackLng


//   // Redirect if lng in path is not supported
//   console.log(lng)
//   console.log(languages.forEach((loc)=>{console.log(loc)}))
//   console.log(languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)))
//   console.log(req.nextUrl)
//   if (
//     !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
//     !req.nextUrl.pathname.startsWith('/_next')
//   ) {
//     return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
//   }
//   console.log(1)
//   if (req.headers.has('referer')) {
//     const refererUrl = new URL(req.headers.get('referer')!)
//     const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
//     const response = NextResponse.next()
//     if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
//     return response
//   }
//   console.log(2)
//   return NextResponse.next()
// }

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ko','ja','th','ch'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ko|en|ja|th|ch)/:path*']
};