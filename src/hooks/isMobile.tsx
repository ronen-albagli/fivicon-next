import { debounce } from '@/utils/debounce';
import { useLayoutEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener('resize', debounce(updateSize, 250));
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
