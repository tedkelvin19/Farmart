import "./AddToCart.css";

const AddToCart = ({ isOpen, onClose, animal }) => {
  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {animal ? animal.category : "Animal Details"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          {animal && (
            <div className="modal-body">
              <div className="top-columns">
                <div className="animal-image">
                  <img
                    src={animal.image_url}
                    alt={animal.category}
                    className="img-fluid img-box"
                  />
                </div>
                <div className="animal-details mx-5">
                  <p>
                    <strong>Breed:</strong> {animal.breed}
                  </p>
                  <p>
                    <strong>Health:</strong> {animal.health}
                  </p>
                  <p>
                    <strong>Age:</strong> {animal.age}
                  </p>
                  <p>
                    <strong>Productivity:</strong> {animal.productivity}
                  </p>
                  <p>
                    <strong>Weight:</strong> {animal.weight}
                  </p>
                  <p>
                    <strong>Cost:</strong> {animal.price}
                  </p>
                  <p>
                    <strong>Seller:</strong> {animal.farmer_username}
                  </p>
                  <p>
                    <strong>Contact:</strong> {animal.contact}
                  </p>
                  <p>
                    <strong>Location:</strong> {animal.location}
                  </p>
                </div>
              </div>
              <div className="animal-description">
                <p>{animal.description}</p>
              </div>
            </div>
          )}
          <div className="modal-footer d-flex justify-content-between">
            <button type="button" className="btn add-to-cart-btn">
              Add To Buy List
            </button>
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
