import React from "react";
import { useDispatch } from "react-redux";
import { setColorDark, setColorLight } from "../../store/theme";

export default function Theme() {
  const dispatch = useDispatch();
  // const toggleTheme = () => {
  //   const wrapper = document.querySelector('.main-wrapper');
  //   const arrElem = Array.prototype.slice.call(wrapper?.childNodes, 0)
  //   arrElem.forEach(child => child.classList.toggle('dark'));
  // }
  return (
    <>
      <div id="my_switcher" className="my_switcher">
        <ul>
          <li onClick={() => dispatch(setColorLight()) /*toggleTheme*/}>
            <a href="#" className="setColor light" style={{background: '#F0F2F5'}}>
              <span title="Light Mode">Light</span>
            </a>
          </li>
          <li onClick={() => dispatch(setColorDark()) /*toggleTheme*/}>
            <a href="#" className="setColor dark">
              <span title="Dark Mode">Dark</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
