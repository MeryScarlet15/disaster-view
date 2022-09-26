import { breakpoints } from '@/public/breakpoints/breakpoints'
import { colors } from '@/public/colors/colors'
import { zIndex } from '@/public/z-index/z-index'
import styled from 'styled-components'

const HomeContainer = styled.div`

  .main-layout {
    &.main-home {
      padding: 128px 32px;
      padding-bottom: 48px; 
      display: flex; 
      align-items: flex-start; 
    }
  }

  .earthquake-info-mobile {
    z-index: ${zIndex.l};
    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: none; 
    }
  }

  .section-earthquake-info {
    display: none; 
    width: 411px; 
    margin-right: 32px; 

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: flex;
      flex-direction: column; 
      justify-content: space-between;  
      min-height: calc(100vh - 176px);

    }

    .article-last-earthquakes {
      margin-bottom: 24px; 
    }
  }

  .section-earthquake-map {
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    height: 100vh;

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      position: initial; 
      border-radius: 16px; 
      background: ${colors.background};
      min-height: calc(100vh - 176px);
      max-height: calc(100vh - 176px);
      width: calc(100% - 411px - 96px);
    }
    
  }
`

export default HomeContainer