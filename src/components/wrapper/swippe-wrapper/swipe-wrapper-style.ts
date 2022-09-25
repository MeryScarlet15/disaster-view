import { colors } from "@/public/colors/colors";
import styled from "styled-components";

interface Props {
  minHeight: string;
  maxHeight: string;
  colors?: {
    modalBackground?: string;
    background?: string;
    swipeButton?: string; 
  }
}

const SwippeWrapperContainer = styled.div<Props>`
  width: 100%;
  position: fixed;
  z-index: 30;

  .swipe-background {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100vh;
    background: ${props => props.colors?.modalBackground || 'transparent'};
    opacity: 0;
    transition: 0.2s all ease-in-out;
    display: none;

    &.open {
      display: block;
      transition: 0.2s all ease-in-out;
    }
  }

  .swipe-wrapper {
    position: fixed;
    top: calc(100vh - ${(props) => props.minHeight});
    width: 100%;
    left: 0;
    height: ${(props) => props.maxHeight};
    background: ${props => props.colors?.background || colors.lightBlack};
    border-radius: 16px 16px 0 0;
    max-height: ${(props) => props.maxHeight};
    padding-top: 8px;
    box-shadow: 0 0 25px 0 rgba(38, 55, 70, 0.1);
  }

  .content {
    height: ${(props) => props.maxHeight};
  }

  .swipe-wrapper-topbar {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-bottom: 4px;

    .swipe-button {
      height: 4px;
      width: 48px;
      border-radius: 8px;
      background: ${props => props.colors?.swipeButton || colors.darkGray};
    }
  }
`;

export default SwippeWrapperContainer;
