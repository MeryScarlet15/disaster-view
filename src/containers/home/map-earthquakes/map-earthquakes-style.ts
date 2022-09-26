import { breakpoints } from '@/public/breakpoints/breakpoints'
import { colors } from '@/public/colors/colors'
import styled from 'styled-components'

const MapEarthquakesContainer = styled.article`

  @media screen and (min-width: ${breakpoints.ipadPro}px){
    padding: 8px 24px; 
  }

  .map-earthquakes-topbar {
    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: flex;
      align-items: center; 
      justify-content: space-between; 
      margin-bottom: 8px;  
    }

    .map-earthquakes-title {
      color: ${colors.white};
      display: none; 

      @media screen and (min-width: ${breakpoints.ipadPro}px){
        display: block; 
      }
    }
  }

  .map-earthquakes {
    width: 100%; 
    height: 100vh; 

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      height: calc(100vh - 232px); 
    }
  }
`

export default MapEarthquakesContainer