const AccountRecentOrders = () => {
  return (
    <main>
      <section className="font-normal text-[14px]">
        <h1 className="font-bold text-[24px] pb-4">Your Orders</h1>
        <p className="h-1 w-[100%] bg-black mb-[20px]"></p>
        <div>
          <div className="flex">
            <p className="px-4 hover:underline border-b-1 pb-2">Orders</p>
            <p className="px-4 hover:underline border-b-1 pb-2">
              Not Yet Shipped
            </p>
            <p className="px-4 hover:underline border-b-1 pb-2">
              Cancelled Orders
            </p>
          </div>
          <hr className="mb-2" />

          <div>
            <div>
              <div className="flex font-semibold items-center gap-2 mb-6">
                <p>-- Orders Placed in</p>
                <select name="" id="" className="border rounded-full px-2 py-1">
                  <option value="Last 7 days">Last 7 days</option>
                  <option value="Last 10 days">Last 10 days</option>
                  <option value="Last 20 days">Last 20 days</option>
                  <option value="Last 30 days">Last 30 days</option>
                </select>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden">
              <div className="px-2 py-2 bg-gray-200 flex justify-between text-[12px] font-medium">
                <div>
                  <p className="font-normal">ORDER PLACED</p>
                  <p>09 Jan, 2025</p>
                </div>
                <div>
                  <p className="font-normal">Total</p>
                  <p>₹20,199.00</p>
                </div>
                <div>
                  <p className="font-normal">SHIP TO</p>
                  <p className="text-red-500">Dinesh Moorthi</p>
                </div>
                <div className="flex items-center gap-1">
                  <p>Order #dcd1e3e7-9fee-4530-9499-6a995f67d410</p>
                  <button className="text-red-500 underline">View order</button>
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="flex items-center justify-between py-1">
                  <div>
                    <h3 className="font-bold">COMPLETED</h3>
                    <p>Package will be handed to resident</p>
                  </div>
                  <div>
                    <p className="text-green-600 bg-green-300 px-2 py-1 text-[10px] font-bold rounded-full">PAID</p>
                  </div>
                  <div className="border rounded-full px-16 py-[3px]">
                    <button>Track Order</button>
                  </div>
                </div>

                <div className="flex py-8 justify-between gap-4">
                  <div>
                    <img src="/images/Annalia Beauty.webp" alt="" className="w-[100px]" />
                  </div>
                  <div>
                    <h6>7-Day Skin Renewal Bakuchiol Trial Kit</h6>
                    <p>Variant: Default</p>
                    <p>₹ 700</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="border rounded-full px-10 py-[3px] bg-red-600 text-white font-medium">Get Product Support</button>
                    <button className="border rounded-full px-10 py-[3px] font-medium">Write Product Review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountRecentOrders;
