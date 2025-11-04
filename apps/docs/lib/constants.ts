export const Cookies = {
  PreferredSignInProvider: "preferred-signin-provider",
  SoundEnabled: "sound-enabled",
  TrackingConsent: "tracking-consent",
  Language: "cascade.language",
};

export const LocalStorageKeys = {
  Language: "cascade.language",
};

export const generateAvatarUrl = (
  name: string | null | undefined,
  email: string | null | undefined,
  size: number,
) => {
  // Use full name if available, otherwise use email prefix, fallback to "user"
  const normalizedName =
    name?.toLowerCase().trim() ||
    email?.split("@")[0]?.toLowerCase().trim() ||
    "user";
  return `https://avatar.vercel.sh/${encodeURIComponent(normalizedName)}.png?size=${size}`;
};

export const generateTeamLogoUrl = (
  name: string | null | undefined,
  size: number,
) => {
  const normalizedName = name?.toLowerCase().trim() || "team";
  return `https://avatar.vercel.sh/${encodeURIComponent(
    normalizedName,
  )}.png?size=${size}`;
};
