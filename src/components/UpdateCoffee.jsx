import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to server in post method
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Successfully updated to database.",
            icon: "Success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div onSubmit={handleUpdateCoffee} className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-bold">Update Coffee : {name}</h2>
      <form>
        {/* form name and quantity row */}
        <div className=" md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Name</span>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Quantity</span>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Coffee Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className=" md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Supplier</span>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Taste</span>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className=" md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Category</span>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">Details</span>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className=" md:flex gap-4 mb-5">
          <div className="form-control w-full">
            <label className="label"></label>
            <label className="input-group">
              <span className="label-text">URL</span>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update coffee"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
