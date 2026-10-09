'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypeMorphConfig {
  size: { mode: string; value: number };
  zoom: { mode: string; value: number };
  rotation: { mode: string; value: number };
  text: string;
  morph: boolean;
  target: string;
  loop: boolean;
  loopHold: { mode: string; value: number };
  speed: { mode: string; value: number };
  variants: { mode: string; value: number };
  rot: { mode: string; value: number };
  sizeRand: { mode: string; value: number };
  emojiRound: boolean;
  emojiSize: { mode: string; value: number };
  objRound: boolean;
  objTint: boolean;
  color: string;
  colorMode: string;
  __color: {
    mode: string;
    active: number;
    palette: string[];
  };
}

interface TypeMorphProps {
  config?: Partial<TypeMorphConfig>;
  className?: string;
  onComplete?: () => void;
}

const defaultConfig: TypeMorphConfig = {
  size: { mode: 'static', value: 1 },
  zoom: { mode: 'static', value: 1 },
  rotation: { mode: 'static', value: 0 },
  text: 'ANIMDOCK',
  morph: true,
  target: 'MOTION',
  loop: false,
  loopHold: { mode: 'static', value: 1.2 },
  speed: { mode: 'static', value: 1 },
  variants: { mode: 'static', value: 14 },
  rot: { mode: 'static', value: 12 },
  sizeRand: { mode: 'static', value: 0.3 },
  emojiRound: false,
  emojiSize: { mode: 'static', value: 1 },
  objRound: false,
  objTint: false,
  color: '#FFFFFF',
  colorMode: 'solid',
  __color: {
    mode: 'solid',
    active: 0,
    palette: ['#FFFFFF', '#101111', '#7C6DEB', '#1E9E76', '#E05A30'],
  },
};

const TypeMorph: React.FC<TypeMorphProps> = ({
  config: userConfig,
  className = '',
  onComplete,
}) => {
  const config = { ...defaultConfig, ...userConfig };
  const [displayText, setDisplayText] = useState(config.text);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isMorphing, setIsMorphing] = useState(config.morph);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!config.morph) {
      setDisplayText(config.text);
      return;
    }

    const maxLength = Math.max(config.text.length, config.target.length);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const speed = 1000 / config.speed.value;

    const animate = () => {
      setCurrentCharIndex((prev) => {
        if (prev >= maxLength) {
          if (config.loop) {
            setTimeout(() => {
              setCurrentCharIndex(0);
              setDisplayText(config.text);
            }, config.loopHold.value * 1000);
          } else {
            setIsMorphing(false);
            setDisplayText(config.target);
            onComplete?.();
          }
          return prev;
        }

        const newText = config.target.split('').map((char, i) => {
          if (i < prev) {
            return config.target[i];
          }
          if (i === prev) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return config.text[i] || '';
        }).join('');

        setDisplayText(newText);
        return prev + 1;
      });
    };

    const interval = setInterval(animate, speed / config.variants.value);
    animationRef.current = interval;

    return () => {
      clearInterval(animationRef.current);
    };
  }, [config.morph, config.text, config.target, config.speed, config.variants, config.loop, config.loopHold, onComplete]);

  const style: React.CSSProperties = {
    color: config.color,
    fontSize: `${config.size.value}em`,
    transform: `scale(${config.zoom.value}) rotate(${config.rotation.value}deg)`,
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  };

  return (
    <span className={className} style={style}>
      {displayText}
    </span>
  );
};

export default TypeMorph;
