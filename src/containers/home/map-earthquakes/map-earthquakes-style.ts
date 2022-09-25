import { breakpoints } from '@/public/breakpoints/breakpoints'
import { colors } from '@/public/colors/colors'
import styled from 'styled-components'

const MapEarthquakesContainer = styled.article`
  padding: 8px 24px; 
  .map-earthquakes-topbar {
    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: flex;
      align-items: center; 
      justify-content: space-between;  
    }

    .map-earthquakes-title {
      color: ${colors.white};
    }
  }

  .map-earthquakes {
    width: 100%; 
    height: calc(100vh - 232px); 
  }
`

export default MapEarthquakesContainer