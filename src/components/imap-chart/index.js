import React from "react";

function ImapChart({ children }) {
  const [show, setShow] = React.useState(false);
  setTimeout(() => {
    setShow(true);
  }, 0);
  return (
    <>{show ? <div className="imap-charts">{children}</div> : <div></div>}</>
  );
}

export default ImapChart;
