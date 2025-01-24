import { TopMenu, Menu, Main, Footer } from "@/components/ui";
import type { Metadata } from "next";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}){
    return(
        
        <main>
            <TopMenu />
            <Menu/>
            {children}
            <Footer/>
            
        </main>
    );
}
