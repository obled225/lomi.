import { FuzzyText } from '@/components/design/fuzzy-text';

export default function NotFound() {
  return (
    <div className="h-svh overflow-hidden flex items-center justify-center">
      <FuzzyText
        fontSize="clamp(4rem, 20vw, 12rem)"
        fontWeight={900}
        fontFamily="Fira Mono, monospace"
        baseIntensity={0.2}
        hoverIntensity={0.4}
        enableHover={true}
      >
        404
      </FuzzyText>
    </div>
  );
}
