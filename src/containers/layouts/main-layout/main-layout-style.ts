import { breakpoints } from '@/public/breakpoints/breakpoints'
import styled from 'styled-components'

const MainLayoutContainer = styled.div`
  width: 100%; 
  
  .main-layout {
    width: 100%; 
    min-height: calc(100vh - 64px);
    padding-top: 64px; 

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      padding-top: 80px; 
      min-height: calc(100vh - 80px);

    }
  }

`

export default MainLayoutContainer