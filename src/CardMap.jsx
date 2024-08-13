import React from "react";
import Card from "./card";
// import Card from "card";


function CardMap({ data, val }) {
  return (
    <>
      {data
        .filter((ele) => ele.content === val)
        .map((ele) => (
          // <Card key={ele.id} data={ele} />
          <Card key={ele.id} data={ele}/>
        ))}
    </>
  );
}

export default CardMap;