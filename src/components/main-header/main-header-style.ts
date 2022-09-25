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

  .header-menu-button {
    position: fixed;
    top: 20px;
    left: 16px;
    width: 24px;
    z-index: ${zIndex.xxl};
    height: 24px;
    cursor: pointer;
    transition: 0.5s all ease-in-out;

    @media screen and (min-width: ${breakpoints.ipadPro}px){
      display: none; 
    }

    .line {
      width: 100%;
      height: 4px;
      background: ${colors.white};
      margin-bottom: 4px;
      transition: 0.5s all ease-in-out;
      &.line-one {
        position: absolute;
        top: 0;
      }

      &.line-two {
        position: absolute;
        top: 8px;
        width: 60%;
        opacity: 1;
      }

      &.line-three {
        position: absolute;
        bottom: 0;
      }
    }

    &.active {
      transition: 0.5s all ease-in-out;
      .line {
        transition: 0.5s all ease-in-out;

        &.line-one {
          top: initial;
          bottom: 16px;
          transform: rotate(45deg);
        }

        &.line-two {
          opacity: 0;
        }

        &.line-three {
          bottom: 16px;

          transform: rotate(-45deg);
        }
      }
    }
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