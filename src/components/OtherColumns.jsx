import cuid from "cuid";
import React from "react";
import DefaultColumn from "./DefaultColumn";

function OtherColumns({ columns }) {
  return (
    <>
      <DefaultColumn key={cuid()} column={columns[0]}>
        <address className="contacts">
          <p className="address">
            623 Harrison St., 2nd Floor, San Francisco, CA 94107
          </p>
          <p>
            <a className="footer-link" href="tel:415-201-6370">
              415-201-6370
            </a>
            <br />
            <a className="footer-link" href="mailto:hello@omnifood.com">
              hello@omnifood.com
            </a>
          </p>
        </address>
      </DefaultColumn>
      {columns.slice(1).map(function(column) {
        return <DefaultColumn key={cuid()} column={column} />;
      })}
    </>
  );
}

export default OtherColumns;
