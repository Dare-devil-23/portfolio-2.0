import React, { useRef } from 'react';
import NavBar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import StickyCursor from '@/components/common/stickyCursor';
import { useRouter } from 'next/router';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const { children } = props;
    const router = useRouter();
    const stickyElement = useRef<HTMLDivElement | null>(null);

    return (
        <main>
            <NavBar ref={stickyElement} />
            <StickyCursor stickyElement={stickyElement} />
            <section className={`min-h-[100dvh] pt-[60px] lg:pt-[110px] ${router.route === "/contact" ? "bg-black" :"bg-white"} transition-colors delay-[2s] duration-700`}>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default Layout