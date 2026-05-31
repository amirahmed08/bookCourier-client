import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";


const SendBook = () => {

  const { register,
    handleSubmit,
    //  formState: { errors }
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const handleSendBook = (data) => {
    const quantity = Number(data.quantity);

    const basePrice = 120;
    let totalPrice = 0;

    if (quantity <= 2) {
      totalPrice = quantity * basePrice;
    } else {
      totalPrice = (2 * basePrice) + ((quantity - 2) * (basePrice + 40));
    }

    const orderData = {
      ...data,
      quantity,
      totalPrice,
    };

    console.log(orderData);

    Swal.fire({
      title: "Please confirm the Price",
      text: `The total price for ${quantity} books is ${totalPrice.toFixed(2)}tk.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Take It!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post('/orders', orderData)
          .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Order placed successfully.",
                icon: "success"
              });
            }
          })
          .catch(err => {
            console.error(err);

            Swal.fire({
              title: "Error!",
              text: "Failed to place order.",
              icon: "error"
            });
          });
      }

    });
  };
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto mt-25 mb-10">
      <h2 className="text-xl font-semibold mb-6">
        Place Your Order
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(handleSendBook)}>
        <input
          type="text"
          placeholder="Sender Name"
          defaultValue={user?.displayName}
          className="input input-bordered w-full"
          {...register("senderName", { required: true })}
        />

        <input
          type="text"
          placeholder="Book Name"
          className="input input-bordered w-full"
          {...register("bookName", { required: true })}
        />

        <input
          type="number"
          min="1"
          placeholder="Number of Books"
          className="input input-bordered w-full"
          {...register("quantity", {
            required: true,
            min: 1,
          })}
        />

        <input
          type="email"
          placeholder="Sender Email"
          defaultValue={user?.email}
          className="input input-bordered w-full"
          {...register("senderEmail", { required: true })}
        />

        <input
          type="text"
          placeholder="Sender Phone"
          className="input input-bordered w-full"
          {...register("senderPhone", { required: true })}
        />

        <textarea
          placeholder="Sender Address"
          rows="4"
          className="textarea textarea-bordered w-full"
          {...register("senderAddress", { required: true })}
        ></textarea>

        <button className="btn bg-violet-600 hover:bg-violet-700 text-white w-full">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default SendBook;