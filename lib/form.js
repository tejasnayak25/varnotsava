import React from 'react';

export function Form( model ) {
    let reqModel = new model();
  return (
    <form className={` form-control`} id={reqModel.name}>
      {Object.keys(reqModel.fields).map((key) => (
        <input className=" input p-2" id={key} placeholder={"Hello"} type={reqModel.fields[key].type} key={key} />
      ))}
    </form>
  );
}
