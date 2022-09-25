import { colors } from '@/public/colors/colors'
import styled from 'styled-components'

const EarthquakeInfoDesktopContainer = styled.article`
  background: ${colors.background};
  padding: 24px; 
  border-radius: 16px; 

  .earthquake-info-title {
    color: ${colors.white};
    width: 100%; 
    margin-bottom: 16px; 
    padding-top: 8px; 
  }

  .earthquake-info {
    padding-top: 0; 

    .earthquake-info-element {
      min-width: 40%; 
      margin-bottom: 16px; 

      .earthquake-info-label {
        font-weight: 700;
        margin-bottom: 8px;
        color: ${colors.white}; 
      }

      .earthquake-info-text{
        color: ${colors.white};
        margin-bottom: 4px; 
      }
    }
  }

`

export default EarthquakeInfoDesktopContainer