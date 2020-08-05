import React from "react";

import useSlots from "./useSlots";

const Layout: React.FC = props => {
  const { header, footer, children, sidebar } = useSlots(props.children, [
    "header",
    "footer",
    "sidebar"
  ]);

  return (
    <div className="layout">
      <div className="header">{header}</div>
      <div className="row">
        <div className="col-3">{sidebar}</div>
        <div className="col-9">{children}</div>
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default Layout;
