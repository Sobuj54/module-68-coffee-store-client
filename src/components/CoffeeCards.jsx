const CoffeeCards = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-5">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-4">
          <div className="pl-4">
            <h2 className="card-title">Name : {name}</h2>
            <p>Category : {category}</p>
            <p>Supplier : {supplier}</p>
            <p>Quantity : {quantity}</p>
            <p>Taste : {taste}</p>
            <p>Details : {details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn btn-active btn-neutral ">View</button>
              <button className="btn btn-neutral">Edit</button>
              <button className="btn  btn-warning">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
