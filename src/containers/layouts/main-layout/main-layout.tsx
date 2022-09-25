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
    <MainHeader
      onClickMenuButton={(active: boolean) => setIsActiveAside(active)}
    />

    <MainAside isActive={isActiveAside} />

    <main
      className={`main-layout ${mainClassName || ''}`}
    >
      {props.children}
    </main>
  </MainLayoutContainer>
}

export default MainLayout;