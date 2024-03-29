import React from "react";
import Classnames from "classnames";
import styles from "./_styles.module.css";
import ChevronIcon from "src/icon/Chevron";
import _ from "lodash";
import { useInterval } from "src/hooks";

type Dot = {
  sharp?: "circle" | "bar";
  playtimeEffect?: boolean;
  placement?: "t" | "b";
  size?: "s" | "m" | "l";
};

type Navigation = {
  type?: "icon" | "full";
  Prev?: React.ReactNode;
  Next?: React.ReactNode;
};

export interface CarouselIProps {
  // type?: 'classic'
  dot?: Dot;
  navigation?: Navigation;
  size?: "s" | "m" | "l";
  defaultStep?: number; // slide will be shown
  autoPlayTime?: number; //(second) no set no auto play
  isInfinity?: boolean;
  isFull?: boolean;
  className?: string;
  onChange?: (step: number) => void;
  children?: React.ReactNode;
}

const Carousel = ({
  // type = 'classic',
  dot,
  navigation,
  size = "m",
  defaultStep = 1,
  autoPlayTime,
  isInfinity = false,
  isFull = true,
  className,
  onChange,
  children,
  ...otherProps
}: CarouselIProps) => {
  const [step, setStep] = React.useState(defaultStep);
  const intervalProps = {
    callbackFn: () => setNewStep(step, 1),
    seconds: autoPlayTime,
  };
  const { setIntervalProps, setIsIntervalActive } = useInterval({});

  React.useEffect(() => {
    onChange && onChange(step);
    if (autoPlayTime) {
      setIntervalProps(intervalProps);
      setIsIntervalActive(step !== childrenCount);
    }
  }, [step]);

  React.useEffect(() => {
    setStep(step);
  }, [defaultStep]);

  const prevClick = () => (isInfinity || step > 1) && setNewStep(step, -1);
  const nextClick = () =>
    (isInfinity || step < childrenCount) && setNewStep(step, 1);

  const itemsRef: any = React.useRef(null);
  const onFullClick = (e) => {
    if (navigation?.type === "full") {
      if (
        e.clientX - itemsRef.current?.offsetLeft <
        itemsRef.current?.offsetWidth / 2 - 80
      ) {
        prevClick();
      }
      if (
        e.clientX - itemsRef.current?.offsetLeft >
        itemsRef.current?.offsetWidth / 2 + 80
      ) {
        nextClick();
      }
    }
  };

  const stepAction = React.useRef(0);

  const setNewStep = (step: number, add: number) => {
    const newStep = (() => {
      const newStep = step + add;
      const size = React.Children.count(children);
      if (newStep > size) return 1;
      if (newStep < 1) return size;
      return newStep;
    })();
    stepAction.current = add;
    setStep(newStep);
  };

  const childrenCount = React.Children.count(children);

  const dots = (() => {
    return (
      <div
        className={Classnames([
          styles["sezy-carousel-dots"],
          styles[`sezy-carousel-dot-${dot?.placement ?? "b"}`],
          styles[`sezy-carousel-dot-${dot?.sharp ?? "circle"}`],
        ])}
      >
        {_.range(childrenCount).map((item, index) => {
          return (
            <span
              key={`dot.${index}`}
              className={Classnames([
                step === index + 1 && styles["sezy-carousel-dot-active"],
                styles[`sezy-carousel-dot-${dot?.size ?? "m"}`],
              ])}
              onClick={() => {
                setStep(index + 1);
              }}
            >
              {autoPlayTime && dot?.playtimeEffect && (
                <>
                  <span />
                  <span style={{ animationDuration: `${autoPlayTime}s` }} />
                </>
              )}
            </span>
          );
        })}
      </div>
    );
  })();

  return (
    <div
      className={Classnames(
        styles["sezy-carousel"],
        styles["sezy-carousel-" + size],
        className
      )}
      {...otherProps}
    >
      <div
        ref={itemsRef}
        className={Classnames(styles["sezy-carousel-items"])}
        onClick={onFullClick}
        {...otherProps}
      >
        {React.Children.map<any, any>(children, (child, childIndex) => {
          // const newItemPosition = slideItemIndex.indexOf(childIndex + 1) - centerPoint;
          const style = {
            ...child.props.style,
            left: `${childIndex + 1 - step}00%`,
            // zIndex: (stepAction.current === 1 ? -newItemPosition : newItemPosition) + childrenCount,
          };

          // if ([0, 1, -1].includes(newItemPosition))
          style.transition = "left 1s";
          return React.cloneElement(child, {
            ...child.props,
            className: Classnames(
              child.props.className,
              styles["sezy-carousel-item"]
            ),
            style,
          });
        })}
      </div>
      {dots}
    </div>
  );
};

export default Carousel;
