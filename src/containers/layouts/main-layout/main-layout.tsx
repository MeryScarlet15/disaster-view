import MainAside from '@/components/main-aside/main-aside';
import MainHeader from '@/components/main-header/main-header';
import React, { useState } from 'react'
import MainLayoutContainer from './main-layout-style';

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {

  const [isActiveAside, setIsActiveAside] = useState<boolean>(false)

  return <MainLayoutContainer className="main-layout-container">
    <MainHeader
      onClickMenuButton={(active: boolean) => setIsActiveAside(active)}
    />

    <MainAside isActive={isActiveAside} />

    <main className="main-layout">
      {props.children}
    </main>
  </MainLayoutContainer>
}

export default MainLayout;