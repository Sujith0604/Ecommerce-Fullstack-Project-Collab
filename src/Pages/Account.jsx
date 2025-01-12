import { useState } from "react";
import AccountInfo from "../components/AccountInfo";
import AccountRecentOrders from "../components/AccountRecentOrders";
import AccountRewards from "../components/AccountRewards";
import AccountAddress from "../components/AccountAddress";

const Account = () => {
    const [acc, setAcc] = useState(<AccountInfo/>)
  return (
    <main className="grid grid-cols-[0.5fr_2.5fr] px-[150px] py-4 gap-20">
      <section className="flex justify-between gap-20 text-sm w-max">
        <div className="flex flex-col gap-4">
          <p onClick={() => setAcc(<AccountInfo />)} className="font-semibold cursor-pointer hover:underline">Account Information</p>
          <p onClick={() => setAcc(<AccountRecentOrders />)} className="cursor-pointer hover:underline">Recent Orders</p>
          <p onClick={() => setAcc(<AccountRewards/>)} className="cursor-pointer hover:underline">Rewards</p>
          <p onClick={() => setAcc(<AccountAddress/>)} className="cursor-pointer hover:underline">Addresses</p>
          <p></p>
        </div>
        <div className="bg-gray-300 h-screen w-[1px]"></div>
      </section>

      <section>
        {acc}
      </section>
    </main>
  );
};

export default Account;
