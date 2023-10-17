import { useEffect } from 'react';

export const useScrollToTop = (ref) => {
  const scrollToBottom = () => {
    ref.current?.scrollIntoView?.({ behavior: "smooth" });
  };
  // Automatically scrolls to top whenever ref.current is rendered first time
  useEffect(() => {
    scrollToBottom();
  }, []);
}