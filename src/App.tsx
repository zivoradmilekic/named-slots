import React, { useState, Fragment } from "react";

import LayoutFunc from "./LayoutFunc";
import LayoutClass from "./LayoutClass";

export default function App() {
  const [toggleClass, setToggleClass] = useState(false);
  const [toggleFunc, setToggleFunc] = useState(false);

  return (
    <div className="App">
      <LayoutFunc>
        <Fragment key="footer">Footer</Fragment>
        <p>main text</p>
        <div key={toggleFunc?"sidebar":""} className="">
          <p>sidebar text</p>
          <p>sidebar text</p>
          <p>sidebar text</p>
          <p>sidebar text</p>
        </div>
        <Fragment key="header">
          <span className="navbar-brand mb-0 h1">Functional component header</span>

          <form className="form-inline ml-auto">
            <button
              type="button"
              className="btn btn-outline-light my-2 my-sm-0"
              onClick={() => {
                setToggleFunc(!toggleFunc);
              }}
            >
              Toggle elements
            </button>
          </form>
        </Fragment>
      </LayoutFunc>

      <LayoutClass>
        <Fragment key="footer">Footer</Fragment>
        <p>main text</p>
        <div key={toggleClass?"sidebar":""} className="">
          <p>sidebar text</p>
          <p>sidebar text</p>
          <p>sidebar text</p>
          <p>sidebar text</p>
        </div>
        <Fragment key="header">
          <span className="navbar-brand mb-0 h1">Class component header</span>

          <form className="form-inline ml-auto">
            <button
              type="button"
              className="btn btn-outline-light my-2 my-sm-0"
              onClick={() => {
                setToggleClass(!toggleClass);
              }}
            >
              Toggle elements
            </button>
          </form>
        </Fragment>
      </LayoutClass>
    </div>
  );
}
