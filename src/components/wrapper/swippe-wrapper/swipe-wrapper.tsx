import React, { useState } from "react";
import SwippeWrapperContainer from "./swipe-wrapper-style";
import anime from "animejs";

interface SwipeWrapperProps {
  children?: any;
  className?: string;
  minHeight: number;
  maxHeight: number;
  isOnClick?: boolean;
  colors?: {
    modalBackground?: string;
    background?: string;
    swipeButton?: string
  }
}

const useSwipe = (props) => {
  const { minHeight, maxHeight } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const calcSwipePosition = (event): number => {
    const windowHeight: number = window.innerHeight;
    const fingerPosition: number = event.touches[0].clientY;
    const isBigger = windowHeight - fingerPosition > maxHeight;
    const isLower = windowHeight - fingerPosition < minHeight;

    return isBigger
      ? windowHeight - maxHeight
      : isLower
        ? windowHeight - minHeight
        : fingerPosition;
  };

  const handleClick = (event) => {
    const windowHeight: number = window.innerHeight;
    let positionTop = windowHeight - maxHeight;
    console.log(isOpen);
    if (isOpen) {
      positionTop = windowHeight - minHeight;
      setIsOpen(false);
      anime({
        targets: ".swipe-background",
        opacity: 0,
      });
    } else {
      setIsOpen(true);
      anime({
        targets: ".swipe-background",
        opacity: 1,
      });
    }

    anime({
      targets: ".swipe-wrapper",
      top: positionTop,
    });
  };

  const handleTouchMove = (event) => {
    anime({
      targets: ".swipe-wrapper",
      top: calcSwipePosition(event),
    });
  };

  return {
    handleClick,
    handleTouchMove,
    isOpen,
  };
};

const SwipeWrapper: React.FC<SwipeWrapperProps> = (
  props: SwipeWrapperProps,
) => {
  const { handleTouchMove, handleClick, isOpen } = useSwipe(props);
  const { isOnClick, colors, className } = props;
  return (
    <SwippeWrapperContainer
      minHeight={`${props.minHeight}px`}
      maxHeight={`${props.maxHeight}px`}
      colors={colors}
      className={className || ''}
    >
      <div className={`swipe-background ${isOpen ? "open" : ""}`}></div>

      <div
        className="swipe-wrapper"
        onTouchMove={(event) => (isOnClick ? {} : handleTouchMove(event))}
        onClick={(event) => (isOnClick ? handleClick(event) : {})}
      >
        <div className="swipe-wrapper-topbar">
          <div className="swipe-button"></div>
        </div>

        <div className="content">{props.children}</div>
      </div>
    </SwippeWrapperContainer >
  );
};

export default SwipeWrapper;
