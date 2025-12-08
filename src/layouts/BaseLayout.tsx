import type { Metadata } from 'next';
import { ReactNode, FC } from 'react';

export const metadata: Metadata = {
  title: 'Wizard of OS',
  description: 'Save the Forest before it is too late.',
};

const Navbar: FC<{ nav: ReactNode; isVisible: boolean }> = () => <></>;
const Main: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;
const Footer: FC<{ footer: ReactNode }> = () => <></>;
const Sidebar: FC<{ sidebar: ReactNode }> = () => <></>;

type LayoutProps = {
  children: ReactNode;
  layouts: {
    navbar: ReactNode | boolean | null;
    footer: ReactNode | boolean | null;
    sidebar: ReactNode | boolean | null;
  };
};

const BaseLayout: FC<LayoutProps> = ({
  children,
  layouts,
}: Readonly<{
  children: ReactNode;
  layouts: {
    navbar: ReactNode | boolean | null;
    footer: ReactNode | boolean | null;
    sidebar: ReactNode | boolean | null;
  };
}>) => {
  return (
    <html lang='de' suppressHydrationWarning>
      <body>
        <header>
          <nav>
            <Navbar nav={layouts.navbar} isVisible={!!layouts.navbar} />
          </nav>
        </header>
        <main>
          <Main>{children}</Main>
        </main>
        <aside>
          <nav>
            <Sidebar sidebar={layouts.sidebar} />
          </nav>
        </aside>
        <footer>
          <nav>
            <Footer footer={layouts.footer} />
          </nav>
        </footer>
      </body>
    </html>
  );
};

export default BaseLayout;
