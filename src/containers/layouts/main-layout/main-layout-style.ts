import { breakpoints } from '@/public/breakpoints/breakpoints'
import { colors } from '@/public/colors/colors'
import { zIndex } from '@/public/z-index/z-index'
import styled from 'styled-components'

const MainLayoutContainer = styled.div`
  width: 100%; 

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
  
  .main-layout {
    max-width: 100vw;
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