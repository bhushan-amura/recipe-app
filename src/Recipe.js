import React from 'react';

const Recipe = ({title, calories}) => {
  return(
    <div>
      {title}
      {calories}
    </div>
  );
}

export default Recipe;