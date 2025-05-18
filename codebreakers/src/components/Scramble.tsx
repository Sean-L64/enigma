import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrambledTextProps {
  text: string;
  className?: string;
  id?: string;
  speed?: number; // Optional, ms per frame
  step?: number;  // Optional, not used in current logic but could be for batching
}

// const ScrambledText: React.FC<ScrambledTextProps> = ({ text, speed = 50 }) => {


export default function ScrambledText({ text, speed , className }: ScrambledTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/[]{}—=+*^?#________';
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return; // Only start animation when in viewport

    let frame = 0;
    const queue = text.split('').map((char) => ({
      from: randomChar(),
      to: char,
      start: Math.floor(Math.random() * 20),
      end: Math.floor(Math.random() * 20) + 10,
    }));

    function randomChar(): string {
      return characters[Math.floor(Math.random() * characters.length)];
    }

    const interval = setInterval(() => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        const { from, to, start, end } = queue[i];

        if (frame >= end) {
          output += to;
          complete++;
        } else if (frame >= start) {
          output += randomChar();
        } else {
          output += from;
        }
      }

      setDisplayedText(output);

      if (complete === queue.length) {
        clearInterval(interval);
      }

      frame++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, inView]);

  return <h1 ref={ref} className={className}>{displayedText}</h1>;
}
