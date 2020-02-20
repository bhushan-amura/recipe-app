import React from 'react';

const Recipe = ({title, calories, image, link}) => {
  return(
    <div className='col-sm-6 mt-1'>
      <div className='card' width='18rem'>
        <div className='card-body'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-text'>{calories}</p>
          <img src={image} class='img-thumbnail' />
          <br/>
          <br/>
          <a href={link} target='_blank' class='btn btn-primary'>Go to Website</a>
        </div>
      </div>
    </div>
  );
}

export default Recipe;