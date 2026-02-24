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

    const getBg = () => {
        if(router.pathname === '/contact' || router.pathname === '/404') {
            return 'bg-black';
        } else if(router.pathname === '/about') {
            return 'bg-[#222]';
        } else if(router.pathname === '/work') {
            return 'bg-white';
        }

        return 'bg-white';
    }

    return (
        <main>
            <NavBar ref={stickyElement} />
            <StickyCursor stickyElement={stickyElement} />
            <section className={`min-h-[100vh] pt-[60px] lg:pt-[110px] ${getBg()} font-[arial] transition-colors delay-[2s] duration-700`}>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default Layout