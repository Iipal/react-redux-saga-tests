import React from "react";

export default ({ text }) => {
  return (
    <div className='alert alert-danger mt-3' role='alert'>
      {text}
    </div>
  );
};
