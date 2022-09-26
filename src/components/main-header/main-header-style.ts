import { breakpoints } from '@/public/breakpoints/breakpoints'
import { colors } from '@/public/colors/colors'
import { zIndex } from '@/public/z-index/z-index'
import styled from 'styled-components'

const MainHeaderContainer = styled.header`
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 64px; 
  padding: 18px 16px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  background: ${colors.lightBlack};
  border-bottom: 1px solid ${colors.darkGray};

  @media screen and (min-width: ${breakpoints.ipadPro}px){
    padding: 26px 32px; 
    height: 80px; 
    justify-content: flex-start; 
  }



  .header-logo {
    color: ${colors.white};
    width: 100%;
    display: flex; 
    justify-content: center; 

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      max-width: 20%; 
      display: block; 
    } 
  }

  .header-nav {
    display: none;
    width: 100%; 

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: block; 
    }

    .header-list {
      width: 100%; 
      display: flex; 
      align-items: center; 
      justify-content: flex-end; 

      .header-element {
        margin-right: 48px;
        color: ${colors.gray};
        transition: 0.2s all ease-in-out; 

        &:hover {
          cursor: pointer; 
          color: ${colors.white};
          transition: 0.2s all ease-in-out; 
        }
      }

    }
  }

  
`

export default MainHeaderContainer