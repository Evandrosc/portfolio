import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsArrowUpSquareFill } from 'react-icons/bs';

const ScrollToTopIcon = styled(BsArrowUpSquareFill)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  width: 50px;
  height: 50px;
  color: var(--brand-color);
  cursor: pointer;
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const shouldShowButton = window.scrollY > 200;
    setIsVisible(shouldShowButton);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && <ScrollToTopIcon onClick={scrollToTop} />}
    </>
  );
};

export default ScrollToTopButton;