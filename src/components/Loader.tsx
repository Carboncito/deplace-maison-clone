import React, {useEffect, useRef, useState} from 'react';
import './loader.css';
import {wait} from '../utils/wait';

const Loader = () => {
  const PORCENTAGE = ['30%', '68%', '87%', '100%'];
  const containerRef = useRef<HTMLDivElement>(null);
  const listRefs = PORCENTAGE.map(() => React.createRef<HTMLDivElement>());
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const onHide = () => setTranslateX(1)

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (current > PORCENTAGE.length - 1) {
      onHide();
      return;
    }

    const load = async () => {
      await wait(400, () => {
        const container = containerRef.current;
        const elementRef = listRefs[current].current;

        if (!container || !elementRef) return;

        container.scrollTo({
          top: elementRef.offsetTop,
          behavior: 'smooth',
        });
        setCurrent(current + 1);
      });
    };

    load();

    return () => {
      clearTimeout(timeout);
    };
  }, [current]);


  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (translateX > 100 || translateX === 0) return;

    const hide = async () => {
      timeout = await wait(3, () => {
        setTranslateX(translateX + 1);
      });
    }

    hide()

    return () => {
      clearTimeout(timeout)
    }
  }, [translateX])

  return (
    <div
      className="loader"
      style={{
        display: translateX === 101 ? 'none' : 'flex',
        transform: `translate3d(0px, -${translateX}%, 0px)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="center" style={{height: 100}}>
        <img
          alt="logo"
          src="https://web.archive.org/web/20220122002134im_/https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d07c48bb025bb521d3f63e9_logomark.svg"
        />
      </div>
      <div className="counter center">
        <div ref={containerRef} className="loader_porcentage_container">
          {PORCENTAGE.map((porcentage, index) => (
            <div
              ref={listRefs[index]}
              key={index}
              className="loader_porcentage"
            >
              {porcentage}
            </div>
          ))}
        </div>
      </div>
      <div className="loader_footer">
        <div>© 2020 DéPlacè maison.</div>
        <div>all rights reserved.</div>
      </div>
    </div>
  );
};

export default Loader;
