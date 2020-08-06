import React from "react";

import {useSlots, ReactSlots} from "./named-slots";

const Layout: React.FC = props => {
  const { header, footer, children, sidebar }: ReactSlots = useSlots(props.children, [
    "header",
    "footer",
    "sidebar"
  ]);

  return (
    <div className="layout">
      <header className="navbar navbar-dark bg-primary">
        {header}
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 bg-secondary text-light">{sidebar}</div>
          <div className="col-9">{children}</div>
        </div>
      </div>
      <footer className="navbar navbar-light bg-light">
        <span className="navbar-text">
          {footer}
        </span>
      </footer>
    </div>
  );
};

export default Layout;
