"use client";

import * as React from "react";
import { cn } from "@/lib/actions/utils";

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  React.HTMLAttributes<T>,
  "ref"
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  children?: any;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps(childProps: AnyProps, slotProps: AnyProps): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ...slotProps
}: SlotProps<T>) {
  const { ref: slotRef, ...restSlotProps } = slotProps;

  // Extract child ref for memoization
  const childRef = React.isValidElement(children)
    ? (children.props as AnyProps).ref
    : undefined;

  // Merge refs: child ref and slot ref - must be called unconditionally
  const mergedRef = (() => {
    const refs = [childRef, slotRef].filter(Boolean) as React.Ref<T>[];
    return refs.length > 0 ? mergeRefs(...refs) : undefined;
  })();

  if (!React.isValidElement(children)) return null;

  const { ...childProps } = children.props as AnyProps;
  const mergedProps = mergeProps(childProps, restSlotProps);

  const cloneProps: AnyProps = { ...mergedProps };
  if (mergedRef) {
    cloneProps.ref = mergedRef;
  }

  return React.cloneElement(children, cloneProps);
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};
