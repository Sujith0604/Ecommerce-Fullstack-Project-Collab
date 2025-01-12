import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const AccountRewards = () => {
  return (
    <main>
      <section className="font-normal text-[14px]">
        <div>
          <h1 className="font-bold text-[24px] pb-4">Rewards</h1>
          <p className="h-1 w-[100%] bg-black mb-[20px]"></p>
        </div>

        <div className="border rounded-lg shadow-md p-4 font-semibold mb-4">
            <h3 className="text-[18px]">Your Reward Balance</h3>
            <h3 className="text-[22px]">2316 Points</h3>
        </div>

        <div className="border rounded-lg shadow-md p-4 font-semibold">
            <h4 className="font-bold text-[16px]">Reward Transactions Log</h4>

            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 text-left">Points</th>
                        <th className="px-4 text-left">Type</th>
                        <th className="px-4 text-left">Expires At</th>
                        <th className="px-4 text-left">Reason</th>
                        <th className="px-4 text-left">Date</th>		
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="border-y">
                        <td className="px-4 text-left font-normal text-[14px]">234</td>
                        <td className="px-4 text-left font-normal text-[14px]">ADD</td>
                        <td className="px-4 text-left font-normal text-[14px]">-</td>
                        <td className="px-4 text-left font-normal text-[14px]">Points earned from order dde6e1a7-aa29-44ec-9f14-aad663db61f1</td>
                        <td className="px-4 text-left font-normal text-[14px]">12/09/2024</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex items-center gap-2 mt-4">
            <FaAngleLeft className="border w-[30px] h-[30px] text-center flex justify-center items-center text-[20px] font-normal"/>
            <p className="border w-[30px] h-[30px] text-center flex justify-center items-center text-[20px] font-normal">1</p>
            <p className="border w-[30px] h-[30px] text-center flex justify-center items-center text-[20px] font-normal">2</p>
            <FaAngleRight className="border w-[30px] h-[30px] text-center flex justify-center items-center text-[20px] font-normal"/>
            </div>
        </div>
      </section>
    </main>
  );
};

export default AccountRewards;
