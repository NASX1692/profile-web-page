import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds: string[], offset = 0) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentSection = '';
      sectionIds.forEach((id) => {
        console.log('id', id);
        const element = document.getElementById(id);
        console.log('element', id, element);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;

          if (
            scrollPosition >= elementTop &&
            scrollPosition < elementTop + elementHeight
          ) {
            currentSection = id;
          }
          console.log(
            'curren',
            element,
            elementTop,
            elementHeight,
            'min::',
            elementTop + elementHeight,
          );
        }
      });
      console.log('currentSection', currentSection, scrollPosition);
      setActiveId(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
