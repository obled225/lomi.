import { useState } from "react";

export function useIsMac() {
  const [isMac] = useState(() => {
    if (typeof navigator !== "undefined") {
      return navigator.platform.toUpperCase().includes("MAC");
    }
    return false;
  });

  return isMac;
}

export function usePlatform() {
  const [platform] = useState<"mac" | "windows" | "mobile" | "other">(() => {
    if (typeof navigator === "undefined") return "other";

    const userAgent = navigator.userAgent.toLowerCase();
    const platformStr = navigator.platform.toUpperCase();

    // Check for mobile first
    if (
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent,
      )
    ) {
      return "mobile";
    }
    // Check for Mac
    else if (platformStr.includes("MAC")) {
      return "mac";
    }
    // Check for Windows
    else if (platformStr.includes("WIN")) {
      return "windows";
    }
    // Default to other
    else {
      return "other";
    }
  });

  return platform;
}
