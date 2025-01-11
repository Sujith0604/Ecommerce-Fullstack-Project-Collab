import { GiReturnArrow } from "react-icons/gi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa";

const CartPage = () => {
  return (
    <main className="px-4 pt-2 pb-4 grid grid-cols-[2fr_1fr] gap-10">
      <section>
        <h1 className="font-bold text-2xl mb-4">
          Shipping and Delivery Basket (2)
        </h1>
        <div className="flex justify-between items-center bg-gray-100 py-3 px-4 mb-2">
          <p>
            Beauty Insiders enjoy <b>FREE Standard Shipping</b> on all orders.
          </p>
          <button className="bg-red-600 py-1 w-max px-4 rounded-full text-white font-semibold tracking-wider">
            Sign In
          </button>
        </div>
        <div className="flex items-center bg-gray-100 py-3 px-4 gap-3 mb-6">
          <GiReturnArrow />
          <p>Free returns on all purchases*</p>
          <IoInformationCircleOutline className="text-2xl" />
        </div>

        <section className="border shadow-gray-600 shadow-sm rounded">
          <div className="flex items-center px-4 p-2 gap-4">
            <RiShoppingBag4Line />
            <h3 className="text-[20px] font-bold">Get It Shipped (2)</h3>
          </div>
          <hr />
          <div className="px-4 py-2">
            <p>
              You now qualify for{" "}
              <span className="text-red-500 font-medium">
                FREE Standard Shipping.
              </span>
            </p>
          </div>
          <hr />
          {/* cart items */}

          <div className="flex px-8 py-4 gap-4">
            <div>
              <img src="/images/image (3).webp" alt="" className="h-[200px]" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="w-[200px] flex flex-col gap-4">
                <p className="font-medium">
                  COSRX Slow Ageing Night Repair Duo (For Dry Skin)
                </p>
                <p className="font-bold">₹2999</p>
              </div>
              <div className="flex items-center gap-3">
                <select name="" id="" className="border rounded-full">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <MdDelete />
              </div>
              <button className="text-gray-500 border rounded-full w-max px-2 font-semibold text-sm">
                Move to loves
              </button>
            </div>
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-6">
        <div className="drop-shadow-xl shadow rounded-lg px-3 py-4">
          <div className="flex justify-between items-center text-[14px] font-">
            <p>Subtotal</p>
            <p className="text-[16px]">₹1,999</p>
          </div>
          <div className="flex justify-between items-center text-[14px] font-">
            <p className="flex items-center gap-2">
              Shipping & Handling <IoInformationCircleOutline />
            </p>
            <p className="text-red-500 text-[16px] font-medium">FREE</p>
          </div>
          <div className="flex justify-between items-center text-[14px] font-">
            <p className="flex items-center gap-2">
              Estimated Tax <IoInformationCircleOutline />
            </p>
            <p>₹499</p>
          </div>
          <hr className="mt-4 mb-4" />
          <div className="flex justify-between items-center font-bold text-lg">
            <h4>Estimated Total</h4>
            <p>₹1,999</p>
          </div>
          <p className="text-[12px] py-2 text-gray-500 font-medium">
            Shipping and taxes calculated during checkout.
          </p>
          <button className="bg-red-600 w-[100%] py-1 rounded-full text-white font-semibold tracking-wider mt-2 mb-6">
            Checkout
          </button>
          <hr className="mb-2" />
          <p className="text-gray-500 text-[12px] font-semibold">
            Supported Payment Methods
          </p>
          <div className="flex gap-8 mt-2 mb-4">
            <FaCcPaypal className="text-[40px]" />
            <FaCcPaypal className="text-[40px]" />
            <FaCcPaypal className="text-[40px]" />
            <FaCcPaypal className="text-[40px]" />
            <FaCcPaypal className="text-[40px]" />
          </div>
          <p className="text-gray-500 text-[12px] font-medium tracking-wide">
            *Some payment methods may not be available for certain items or
            fulfillment methods.
          </p>
        </div>

        <div className="border p-4 rounded">
          <h4 className="">Have a promo code?</h4>
          <div className="flex justify-between items-center py-4 gap-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="border rounded h-max w-[100%] px-2 py-2 text-[14px]"
            />
            <button className="bg-red-600 py-1 w-max px-4 rounded-full text-white font-semibold tracking-wider">
              Apply
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
