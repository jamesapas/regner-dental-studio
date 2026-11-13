import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'Regner Dental Studio | Creating Smiles That Last',description:'Discover personalized dental care, services, sample prices, and appointment requests at Regner Dental Studio.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
