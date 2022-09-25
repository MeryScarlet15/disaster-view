import { colors } from '@/public/colors/colors';
import { zIndex } from '@/public/z-index/z-index';
import styled, { css } from 'styled-components'

const delayChilds = (childsLength: number) => {
  let delayChilds = "";

  for (let index = 0; index < childsLength; index++) {
    delayChilds = `
    ${delayChilds}

    &:nth-child(${index + 1}) {
      transition: 0.8s all  cubic-bezier(0.175, 0.885, 0.32, 1.275) ${
        0.3 + 0.2 * (index + 1)
      }s;
    }
    `;
  }

  return css`
    ${delayChilds}
  `;
};


const MainAsideContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: -100vh;
  opacity: 0;
  background: ${colors.background};
  z-index: ${zIndex.xl};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.8s all ease-in-out;

  .aside-nav {
    .aside-list {
      .aside-element {
        position: relative;
        top: -48px;
        opacity: 0;
        transition: 0.3s all ease-in;
        margin-bottom: 24px;

        .aside-text {
          color: ${colors.white};
          text-align: center;
        }

        .aside-button {
          width: 200px;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &.active {
    transition: 0.8s all ease-in-out;
    opacity: 1;
    top: 0;

    .aside-nav {
      .aside-list {
        .aside-element {
          top: 0;
          opacity: 1;
          transition: 0.8s all ease-in-out 0.8s;

          ${delayChilds(2)}
        }
      }
    }
  }
`

export default MainAsideContainer