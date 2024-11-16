import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Discover our pricing plans that fit with your needs. Esta es la página de precios de mi servicio',
};


export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}