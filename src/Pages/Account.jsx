import { useState } from "react";
import AccountInfo from "../components/AccountInfo";
import AccountRecentOrders from "../components/AccountRecentOrders";
import AccountRewards from "../components/AccountRewards";
import AccountAddress from "../components/AccountAddress";

const Account = () => {
    const [acc, setAcc] = useState('info')
  return (
    <main className="grid grid-cols-[0.5fr_2.5fr] px-[150px] py-4 gap-20">
      <section className="flex justify-between gap-20 text-sm w-max">
        <div className="flex flex-col gap-4">
          <p onClick={() => setAcc('info')} className={`cursor-pointer hover:underline ${acc=='info' ? 'font-semibold':'font-normal'}`}>Account Information</p>
          <p onClick={() => setAcc('orders')} className={`cursor-pointer hover:underline ${acc=='orders' ? 'font-semibold':'font-normal'}`}>Recent Orders</p>
          <p onClick={() => setAcc('rewards')} className={`cursor-pointer hover:underline ${acc=='rewards' ? 'font-semibold':'font-normal'}`}>Rewards</p>
          <p onClick={() => setAcc('addresses')} className={`cursor-pointer hover:underline ${acc=='addresses' ? 'font-semibold':'font-normal'}`}>Addresses</p>
        </div>
        <div className="bg-gray-300 h-screen w-[1px]"></div>
      </section>

      <section>
        {acc === 'info' && <AccountInfo />}
        {acc === 'orders' && <AccountRecentOrders />}
        {acc === 'rewards' && <AccountRewards />}
        {acc === 'addresses' && <AccountAddress />}
      </section>
    </main>
  );
};

export default Account;
