import React, { forwardRef } from "react";

interface DockProps {
  children: React.ReactNode;
}

export const Dock = forwardRef<HTMLDivElement, DockProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="fixed top-2 left-0 right-0 z-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-2">{children}</div>
      </div>
    );
  },
);

Dock.displayName = "Dock";
