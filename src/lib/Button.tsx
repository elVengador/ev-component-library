import { twMerge } from "tailwind-merge";
import { AriaButtonOptions, useButton, useHover } from "react-aria";
import { ComponentPropsWithoutRef, RefObject, forwardRef } from "react";
import { filterDOMProps } from "@react-aria/utils";

type ButtonVariant = "solid" | "flat";
type ButtonColor = "primary" | "secondary" | "destructive" | "foreground";

export type ButtonProps = AriaButtonOptions<"button"> &
  ComponentPropsWithoutRef<"button"> & {
    variant?: ButtonVariant;
    color?: ButtonColor;
  };

const baseStyles = "px-2 py-1 rounded-md";

const styles: { [key in ButtonVariant]: { [key in ButtonColor]: string } } = {
  flat: {
    primary: `${baseStyles} bg-transparent text-ev-primary data-[hovered]:bg-ev-primary/20 data-[pressed]:bg-ev-primary/40 data-[hovered]:dark:bg-ev-primary/20 data-[pressed]:dark:bg-ev-primary/40`,
    secondary: `${baseStyles} bg-transparent text-ev-secondary data-[hovered]:bg-ev-secondary/20 data-[pressed]:bg-ev-secondary/40 data-[hovered]:dark:bg-ev-secondary/20  data-[pressed]:dark:bg-ev-secondary/40`,
    destructive: `${baseStyles} bg-transparent text-ev-destructive data-[hovered]:bg-ev-destructive/20 data-[pressed]:bg-ev-destructive/40 data-[hovered]:dark:bg-ev-destructive/20  data-[pressed]:dark:bg-ev-destructive/40`,
    foreground: `${baseStyles} bg-transparent text-ev-dark data-[hovered]:bg-ev-dark/20 data-[pressed]:bg-ev-dark/40 dark:text-ev-light data-[hovered]:dark:bg-ev-light/20  data-[pressed]:dark:bg-ev-light/40`,
  },
  solid: {
    primary: `${baseStyles} bg-ev-primary data-[hovered]:bg-ev-primary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    secondary: `${baseStyles} bg-ev-secondary data-[hovered]:bg-ev-secondary-hard data-[pressed]:bg-ev-primary-harder text-ev-light`,
    destructive: `${baseStyles} bg-ev-destructive data-[hovered]:bg-ev-destructive-hard data-[pressed]:bg-ev-destructive-harder text-ev-light`,
    foreground: `${baseStyles} bg-ev-dark text-ev-light data-[hovered]:bg-ev-dark-hard data-[pressed]:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:[pressed]:bg-ev-light-harder`,
  },
};

const styleIt = ({ variant = "solid", color = "primary" }: ButtonProps) =>
  styles[variant][color];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const { buttonProps, isPressed } = useButton(
      props,
      ref as RefObject<Element>
    );
    const { hoverProps, isHovered } = useHover({});

    return (
      <button
        ref={ref}
        {...filterDOMProps(props)}
        {...hoverProps}
        {...buttonProps}
        {...(isPressed && { "data-pressed": isPressed })}
        {...(isHovered && !isPressed && { "data-hovered": isHovered })}
        className={twMerge(styleIt(props), props.className as string)}
      >
        {children}
      </button>
    );
  }
);
