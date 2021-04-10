const FoodCard = ({
  label,
  img = "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
}) => {
  return (
    <div className="food-card animate-show-later">
      <div className="food-card-container">
        <img src={img} alt="" className="card-img" />
        <div className="like-btn-area">
          <i className="far fa-heart like-btn"></i>
        </div>

        <div className="card-title">
          <h3>{label}</h3>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
