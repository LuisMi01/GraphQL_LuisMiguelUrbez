'use client'

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // El componente utiliza 'children' aquí
  return <div>{children}</div>;
};

export default Layout;