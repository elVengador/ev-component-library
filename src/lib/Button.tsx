import { twMerge } from "tailwind-merge";
import { AriaButtonOptions, useButton } from "react-aria";
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
    primary: `${baseStyles} bg-transparent text-ev-primary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    secondary: `${baseStyles} bg-transparent text-ev-secondary hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    destructive: `${baseStyles} bg-transparent text-ev-destructive hover:bg-gray-200 pressed:bg-gray-300 hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
    foreground: `${baseStyles} bg-transparent text-ev-dark hover:bg-gray-200 pressed:bg-gray-300 dark:text-ev-light hover:dark:bg-gray-800  pressed:dark:bg-gray-700`,
  },
  solid: {
    primary: `${baseStyles} bg-ev-primary hover:bg-ev-primary-hard pressed:bg-ev-primary-harder text-ev-light`,
    secondary: `${baseStyles} bg-ev-secondary hover:bg-ev-secondary-hard pressed:bg-ev-primary-harder text-ev-light`,
    destructive: `${baseStyles} bg-ev-destructive hover:bg-ev-destructive-hard pressed:bg-ev-destructive-harder text-ev-light`,
    foreground: `${baseStyles} bg-ev-dark text-ev-light hover:bg-ev-dark-hard pressed:bg-ev-dark-harder dark:bg-ev-light dark:text-ev-dark dark:hover:bg-ev-light-hard  dark:pressed:bg-ev-light-harder`,
  },
};

const styleIt = ({ variant = "solid", color = "primary" }: ButtonProps) =>
  styles[variant][color];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const { buttonProps } = useButton(props, ref as RefObject<Element>);

    return (
      <button
        ref={ref}
        {...filterDOMProps(props)}
        {...buttonProps}
        className={twMerge(styleIt(props), props.className as string)}
      >
        {children}
      </button>
    );
  }
);
