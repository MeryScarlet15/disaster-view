import React, { useState } from 'react'
import BodyText from '../text/body-text';
import Heading1 from '../text/heading-1';
import Heading2 from '../text/heading-2';
import MainHeaderContainer from './main-header-style';


const MainHeader: React.FC = () => {

  return <MainHeaderContainer className="main-header">


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