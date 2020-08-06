import React, {Component} from "react";

import {NamedSlots, ReactSlots} from "./named-slots";

class Layout extends Component {
  render() {
    return (
      <NamedSlots
        slotsNames={[
          "header",
          "footer",
          "sidebar"
        ]}
        children={this.props.children}
        slots={
          ( { header, footer, children, sidebar }: ReactSlots) => (
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
          )
        }
      />
    );
  }
};

export default Layout;
