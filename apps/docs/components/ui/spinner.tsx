import React from 'react';

interface SpinnerProps {
  className?: string;
  inline?: boolean;
}

export default function Spinner({
  className = '',
  inline = false,
}: SpinnerProps) {
  const spinnerChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const [currentChar, setCurrentChar] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChar((prev) => (prev + 1) % spinnerChars.length);
    }, 200);

    return () => clearInterval(interval);
  }, [spinnerChars.length]);

  const spinner = (
    <span
      className={`inline-block text-zinc-400 ${className}`}
      style={{
        fontFamily:
          '"DejaVu Sans Mono", "Liberation Mono", "Courier New", monospace',
        fontSize: '0.875rem',
        lineHeight: '1.5',
        fontWeight: 'normal',
        verticalAlign: 'middle',
      }}
    >
      {spinnerChars[currentChar]}
    </span>
  );

  if (inline) {
    return spinner;
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      {spinner}
    </div>
  );
}

export { Spinner };
