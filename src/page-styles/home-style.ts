import { breakpoints } from '@/public/breakpoints/breakpoints'
import { colors } from '@/public/colors/colors'
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
    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: none; 
    }
  }

  .section-earthquake-info {
    display: none; 
    width: 411px; 
    margin-right: 32px; 

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: block; 
    }
  }

  .section-earthquake-map {
    border-radius: 16px; 
    background: ${colors.background};
    min-height: calc(100vh - 176px);
    width: calc(100% - 411px - 96px);
  }
`

export default HomeContainer