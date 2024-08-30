import React, { useRef } from 'react';
import NavBar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import StickyCursor from '@/components/common/stickyCursor';

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const { children } = props;

    const stickyElement = useRef<HTMLDivElement | null>(null);

    return (
        <main>
            <NavBar ref={stickyElement} />
            <StickyCursor stickyElement={stickyElement} />
            <section className='min-h-[100dvh] pt-[60px] md:pt-[110px] bg-white'>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default Layout