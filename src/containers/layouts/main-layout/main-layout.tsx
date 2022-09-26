import MainAside from '@/components/main-aside/main-aside';
import MainHeader from '@/components/main-header/main-header';
import React, { useState } from 'react'
import MainLayoutContainer from './main-layout-style';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  mainClassName?: string;
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const {
    className,
    mainClassName,
  } = props;

  const [isActiveAside, setIsActiveAside] = useState<boolean>(false)

  return <MainLayoutContainer
    className={`main-layout-container ${className || ''}`}
  >
    <div
      className={`header-menu-button ${isActiveAside ? "active" : ""}`}
      onClick={() =>
        setIsActiveAside(!isActiveAside)
      }
    >
      <div className="line line-one"></div>
      <div className="line line-two"></div>
      <div className="line line-three"></div>
    </div>

    <MainHeader />

    <MainAside isActive={isActiveAside} />

    <main
      className={`main-layout ${mainClassName || ''}`}
    >
      {props.children}
    </main>
  </MainLayoutContainer>
}

export default MainLayout;