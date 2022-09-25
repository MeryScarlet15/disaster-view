import { breakpoints } from '@/public/breakpoints/breakpoints'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 

  .earthquake-info-mobile {
    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: none; 
    }
  }

  .earthquake-info-section {
    display: none; 
    width: 411px; 
    padding: 48px 32px; 

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: block; 
    }

  }
`

export default HomeContainer