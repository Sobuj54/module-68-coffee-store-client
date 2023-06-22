const AddCoffee = () => {
  return (
    <div>
      Add a Coffee.
      <form>
        <div className="flex">
          <div className="form-control">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Name</span>
              <input
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Quantity</span>
              <input
                type="text"
                placeholder="Coffee Quantity"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
