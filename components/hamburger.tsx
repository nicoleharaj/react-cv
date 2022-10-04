import { useState, useRef, useEffect } from 'react';
import { Transition, Menu } from '@headlessui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Hamburger({ children }) {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!container.current.contains(e.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (!show) return;

      if (e.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return (
    <div ref={container} className="z-50 relative md:hidden">
      <AiOutlineMenu className='menu cursor-pointer text-2xl' onClick={() => setShow(!show)} />

      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-75"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveTo="opacity-0 scale-75"
      >
        <div className='origin-top-right absolute right-0 w-32 mt-4 overflow-hidden bg-white rounded-md shadow-md dark:bg-gray-800'>
          {children}
        </div>
      </Transition>
    </div>
  );
}
