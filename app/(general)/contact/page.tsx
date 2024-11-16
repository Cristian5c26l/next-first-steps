import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact us',
 description: 'Contact us by sending an email to vercel@gmail.com. Esta es la página de contacto de la empresa',
};


export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}