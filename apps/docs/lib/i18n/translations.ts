import type { Language } from "./config";
import enTranslations from "./locales/en.json";
import frTranslations from "./locales/fr.json";
import esTranslations from "./locales/es.json";
import zhTranslations from "./locales/zh.json";

// Define a more specific type for translation values
export type TranslationValue =
  | string
  | number
  | { [key: string]: TranslationValue }
  | TranslationValue[];

const translations: { [key in Language]: Record<string, TranslationValue> } = {
  en: enTranslations as unknown as Record<string, TranslationValue>,
  fr: frTranslations as unknown as Record<string, TranslationValue>,
  es: esTranslations as unknown as Record<string, TranslationValue>,
  zh: zhTranslations as unknown as Record<string, TranslationValue>,
};

export const getTranslations = (
  lang: Language,
): Record<string, TranslationValue> => {
  return translations[lang] || translations.en;
};

export const t = (
  key: string,
  lang: Language = "en",
  values?: Record<string, string | number | undefined>,
): TranslationValue => {
  try {
    const keys = key.split(".");
    let currentVal: TranslationValue | undefined = getTranslations(lang);
    let found = true;

    for (const k of keys) {
      if (
        currentVal &&
        typeof currentVal === "object" &&
        !Array.isArray(currentVal) &&
        k in currentVal
      ) {
        currentVal = currentVal[k];
      } else {
        found = false;
        break;
      }
    }

    if (!found) {
      console.warn(
        `Translation missing for key: ${key}, lang: ${lang}. Falling back.`,
      );
      const fallbackValue = getFallbackValue(keys, translations.en, values);
      return fallbackValue !== undefined ? fallbackValue : key;
    }

    if (typeof currentVal === "string") {
      if (values) {
        return currentVal.replace(
          /\{(\w+)\}|\[\[(\w+)\]\]/g,
          (match, p1, p2) => {
            const placeholderKey = p1 || p2;
            const replacement = values[placeholderKey];
            return replacement !== undefined ? String(replacement) : match;
          },
        );
      }
      return currentVal;
    }

    if (currentVal !== undefined) {
      return currentVal;
    }

    return key; // Fallback to key if not found
  } catch (error) {
    console.error(`Translation error for key: ${key}`, error);
    return key;
  }
};

// Helper function to get a deeply nested value and perform interpolation
function getFallbackValue(
  keys: string[],
  obj: Record<string, TranslationValue>,
  values?: Record<string, string | number | undefined>,
): TranslationValue | undefined {
  let currentVal: TranslationValue | undefined = obj;

  for (const keyPart of keys) {
    if (
      currentVal &&
      typeof currentVal === "object" &&
      !Array.isArray(currentVal) &&
      keyPart in currentVal
    ) {
      currentVal = currentVal[keyPart];
    } else {
      return undefined; // Key not found or not an object
    }
  }

  if (typeof currentVal === "string") {
    if (values) {
      return currentVal.replace(/\{(\w+)\}|\[\[(\w+)\]\]/g, (match, p1, p2) => {
        const placeholderKey = p1 || p2;
        const replacement = values[placeholderKey];
        return replacement !== undefined ? String(replacement) : match;
      });
    }
    return currentVal;
  }

  return currentVal;
}
