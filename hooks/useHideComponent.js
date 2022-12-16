import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useHideComponent(ref, state, setState) {
  /**
   * Alert if clicked on outside of element
   */

  useEffect(() => {
    // Bind the event listener
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(!state);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return { ref };
}

// Hook from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
