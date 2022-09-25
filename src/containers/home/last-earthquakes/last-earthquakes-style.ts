import { colors } from '@/public/colors/colors'
import styled from 'styled-components'

const LastEarthquakesContainer = styled.article`
  padding: 16px 24px; 
  background: ${colors.background};
  border-radius: 16px; 

  .last-earthquakes-title {
    color: ${colors.white};
    margin-bottom: 8px; 
  }

`

export default LastEarthquakesContainer