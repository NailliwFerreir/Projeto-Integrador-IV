import { useState } from "react";
import "./style.css";

export default function SelectCustom({
  datas = [],
  className,
  action,
  children,
  label,
  getValue = () => {},
}) {
  const [item, setItem] = useState(datas[0]);
  const [toggle, setToggle] = useState(false);
  const handler = (e, value) => {
    if (action) {
      action(value);
    }
    setItem(value);
    setToggle(!toggle);
  };
  return (
    <>
      <div className="input-item">
        <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
          {label ?? "Select"}
        </h6>

        {datas.length > 0 && (
          <div className={`my-select-box ${className || ""}`}>
            <button
              onClick={() => setToggle(!toggle)}
              type="button"
              className="my-select-box-btn "
            >
              {children ? (
                children({ item })
              ) : (
                <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                  <span className="text-[13px] text-qgraytwo">
                    {item.label}
                  </span>
                  <span>
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                        fill="#222222"
                      />
                    </svg>
                  </span>
                </div>
              )}
            </button>
            {toggle && (
              <div
                className="click-away"
                onClick={() => setToggle(!toggle)}
              ></div>
            )}
            <div className={`my-select-box-section ${toggle ? "open" : ""}`}>
              <ul className="list">
                {datas.map((value) => (
                  <li
                    className={item === value ? "selected" : ""}
                    key={Math.random() + value}
                    onClick={(e) => {
                      handler(e, value);
                      getValue(value);
                    }}
                  >
                    {value.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
