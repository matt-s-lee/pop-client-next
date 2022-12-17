import { useEffect, useRef } from "react";

// Hook that hides component when clicking outside of the passed ref
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

const useHideComponent = (ref, state, setState) => {
  useEffect(() => {
    function handleClickOutside(ev) {
      if (ref.current && !ref.current.contains(ev.target)) {
        setState(!state);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, state, setState]);
};

export default function HideComponent(props) {
  const wrapperRef = useRef(null);
  useHideComponent(wrapperRef, props.state, props.setState);

  return <div ref={wrapperRef}>{props.children}</div>;
}
