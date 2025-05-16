import { useEffect, useState } from 'react';

interface ScrambledTextProps {
  text: string;
  className?: string;
  speed?: number; // Optional, ms per frame
  step?: number;  // Optional, not used in current logic but could be for batching
}

// const ScrambledText: React.FC<ScrambledTextProps> = ({ text, speed = 50 }) => {

export default function ScrambledText(props: ScrambledTextProps ){
  const {text, speed, className} = props;
  const [displayedText, setDisplayedText] = useState('');
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/[]{}—=+*^?#________';

  useEffect(() => {
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
  }, [text, speed]);

  return <h1 className={className}>{displayedText}</h1>;
};

