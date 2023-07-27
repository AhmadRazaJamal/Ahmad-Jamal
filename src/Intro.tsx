import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Intro(): JSX.Element {
  const textRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const textWrapper = textRef.current?.querySelector('.letters');
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
      }

      anime.timeline({ loop: false })
        .add({
          targets: '.ml6 .letter',
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 1500,
          delay: (el, i) => 50 * i
        });

      anime.timeline({ loop: false })
        .add({
          targets: iconRef.current!,
          translateY: ["1.1em", 0],
          opacity: [0, 1],
          duration: 1000,
          delay: 1500,
          begin: () => {
            iconRef.current!.style.display = 'inline-block';
          }
        });
    }, 5000);  // Delay of 5 seconds
  }, []);


  return (
    <div className="center-screen">
      <h1 className="ml6" ref={textRef}>
        <span className="text-wrapper">
          <span className="letters">WELCOME TO MY OFFICE</span><br />
          <KeyboardArrowUpIcon
            ref={iconRef}
            fontSize="large"
            style={{ width: 24, position: 'relative', top: 8, left: 4, strokeWidth: 8 }}
          />
        </span>
      </h1>
    </div>
  );
}

export default Intro;
