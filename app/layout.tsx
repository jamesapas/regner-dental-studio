import type { Metadata } from 'next';import './globals.css';
const title='Regner Dental Studio | Creating Smiles That Last',description='Discover personalized dental care, services, sample prices, and appointment requests at Regner Dental Studio.',siteUrl=process.env.NEXT_PUBLIC_SITE_URL;
export const metadata:Metadata={metadataBase:siteUrl?new URL(siteUrl):undefined,title,description,icons:{icon:'/favicon.svg'},openGraph:{type:'website',url:'/',siteName:'Regner Dental Studio',title,description,locale:'en_US'},twitter:{card:'summary_large_image',title,description}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
