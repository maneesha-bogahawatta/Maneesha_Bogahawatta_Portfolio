import { useRef, useEffect } from 'react';

export default function useTilt(active = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) return;
    const el = ref.current;
    let rect = null;

    const handleMove = (e) => {
      rect = rect || el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width - 0.5) * 2;
      const py = (y / rect.height - 0.5) * -2;
      const rotX = py * 10;
      const rotY = px * 10;

      el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
      el.style.transition = 'transform 0.08s ease-out';
      el.style.willChange = 'transform';
    };

    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      el.style.transition = 'transform 0.4s cubic-bezier(.2,.8,.2,1)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    const onResize = () => (rect = null);
    window.addEventListener('resize', onResize);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [active]);

  return ref;
}
