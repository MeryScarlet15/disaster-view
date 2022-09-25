import { colors } from '@/public/colors/colors'
import styled from 'styled-components'

const EarthquakeInfoMobileContainer = styled.article`
  
  .earthquake-info-swiper {


    .earthquake-info-title {
      color: ${colors.white};
      width: 100%; 
      text-align: center; 
      margin-bottom: 16px; 
      padding-top: 8px; 

    }

    .earthquake-info {
      padding: 24px; 
      padding-top: 0; 
      display: flex; 
      align-items: flex-start; 
      justify-content: space-between;
      flex-wrap: wrap;
  
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

          &:last-child {
            margin-bottom: 0; 
          }
        }
      }
    }
  }

`

export default EarthquakeInfoMobileContainer