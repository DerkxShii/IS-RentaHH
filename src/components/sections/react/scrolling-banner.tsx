"use client";

import type { ScrollShadowProps } from "@heroui/react";
import React from "react";
import { ScrollShadow } from "@heroui/react";
import { cn } from "@heroui/react";

interface ScrollingBannerProps extends ScrollShadowProps {
  isReverse?: boolean;
  showShadow?: boolean;
  shouldPauseOnHover?: boolean;
  isVertical?: boolean;
  gap?: string;
  duration?: number; // in seconds
  className?: string;
}

const ScrollingBanner = React.forwardRef<HTMLDivElement, ScrollingBannerProps>(
  (
    {
      className,
      isReverse,
      isVertical = false,
      gap = "1rem",
      showShadow = true,
      shouldPauseOnHover = true,
      duration = 30,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const shadowProps: ScrollShadowProps = {
      isEnabled: showShadow,
      offset: -20,
      size: 300,
      orientation: isVertical ? "vertical" : "horizontal",
      visibility: "both",
      ...props,
    };

    return (
      <ScrollShadow
        ref={ref}
        className={cn(
          "flex",
          {
            "w-full": !isVertical,
            "max-h-[calc(100vh_-_200px)]": isVertical,
          },
          className
        )}
        style={{
          // @ts-ignore
          "--gap": gap,
          "--duration": `${duration}s`,
          ...style,
        }}
      >
        <div
          className={cn("flex w-max items-stretch gap-[--gap]", {
            "flex-col": isVertical,
            "h-full": isVertical,
            "animate-scrolling-banner": !isVertical,
            "animate-scrolling-banner-vertical": isVertical,
            "[animation-direction:reverse]": isReverse,
            // "hover:[animation-play-state:paused]": shouldPauseOnHover,
          })}
        >
          {[
            ...React.Children.toArray(children),
            ...React.Children.toArray(children),
          ].map((child, index) => (
            <div key={index} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </ScrollShadow>
    );
  }
);

ScrollingBanner.displayName = "ScrollingBanner";

export default ScrollingBanner;
