import React, { useState } from 'react'
import BodyText from '../text/body-text';
import Heading1 from '../text/heading-1';
import Heading2 from '../text/heading-2';
import MainHeaderContainer from './main-header-style';

interface MainHeaderProps {
  onClickMenuButton: (active: boolean) => void
}

const useMenuButton = (props: MainHeaderProps) => {
  const [isActiveMenuButton, setIsActiveMenuButton] = useState<Boolean>(false)

  const handleClickMenuButton = () => {
    const newActiveValue = !isActiveMenuButton

    setIsActiveMenuButton(newActiveValue)
    props.onClickMenuButton(newActiveValue)
  }

  return {
    isActiveMenuButton,
    handleClickMenuButton
  }
}

const MainHeader: React.FC<MainHeaderProps> = (props: MainHeaderProps) => {
  const {
    onClickMenuButton
  } = props

  const {
    isActiveMenuButton,
    handleClickMenuButton
  } = useMenuButton(props)

  return <MainHeaderContainer className="main-header">
    <div
      className={`header-menu-button ${isActiveMenuButton ? "active" : ""}`}
      onClick={() =>
        handleClickMenuButton()
      }
    >
      <div className="line line-one"></div>
      <div className="line line-two"></div>
      <div className="line line-three"></div>
    </div>

    <Heading2 className="header-logo">
      <p>EARTHQUAKES</p>
    </Heading2>

    <nav className="header-nav">
      <ul className="header-list">
        <li className="header-element">
          <BodyText>
            Map
          </BodyText>
        </li>

        <li className="header-element">
          <BodyText>
            Seismic Risk
          </BodyText>
        </li>
      </ul>
    </nav>
  </MainHeaderContainer>
}

export default MainHeader; 