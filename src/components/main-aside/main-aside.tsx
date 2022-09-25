import React from 'react'
import BodyText from '../text/body-text'
import MainAsideContainer from './main-aside-style'

interface MainAsideProps {
  isActive: boolean;
}

const MainAside: React.FC<MainAsideProps> = (props: MainAsideProps) => {
  const { isActive } = props;
  return <MainAsideContainer className={`${isActive ? "active" : ""}`}>
    <nav className="aside-nav">
      <ul className="aside-list">
        <li className='aside-element'>
          <BodyText className="aside-text">
            Map
          </BodyText>
        </li>

        <li className='aside-element'>
          <BodyText className="aside-text">
            Seismic Risk
          </BodyText>
        </li>
      </ul>

    </nav>
  </MainAsideContainer>
}

export default MainAside