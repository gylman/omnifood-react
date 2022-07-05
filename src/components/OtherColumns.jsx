import cuid from "cuid";
import React from "react";
import DefaultColumn from "./DefaultColumn";
import LeftColumn from "./LeftColumn";

function OtherColumns({ columnsArray }) {
  return (
    <>
      <LeftColumn />
      {columnsArray.map(function(column) {
        return <DefaultColumn key={cuid()} column={column} />;
      })}
    </>
  );
}

export default OtherColumns;
