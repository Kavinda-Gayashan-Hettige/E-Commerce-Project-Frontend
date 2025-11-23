import React from "react";

function Product() {
  return (
    <div className="container py-5">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto text-center">
          <h1 className="fw-light">Album example</h1>
          <p className="lead text-body-secondary">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet.
          </p>

          <p>
            <a href="#" className="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary my-2 ms-2">
              Secondary action
            </a>
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <svg
              aria-label="Placeholder: Thumbnail"
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                Thumbnail
              </text>
            </svg>

            <div className="card-body">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>

              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
