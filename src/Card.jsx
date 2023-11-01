import React from 'react';

function Card() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="image-url-1.jpg" className="card-img-top" alt="Image 1" />
          <div className="card-body">
            <h5 className="card-title">Card title 1</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Card;