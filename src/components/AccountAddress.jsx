
const AccountAddress = () => {
  return (
    <main>
        <section className="font-semibold text-[14px]">
            <h1 className="font-bold text-[24px] pb-4">Account Information</h1>
            <p className="h-1 w-[100%] bg-black mb-[20px]"></p>
        </section>

        <section className="flex justify-between py-4">
            <div className="flex flex-col gap-1 text-sm">
                <p>Dinesh Moorthi</p>
                <p>Cherincross, Ooty</p>
                <p>Coimbatore, Tamil Nadu 641035</p>
                <p>IN</p>
                <p>951442192000</p>
            </div>
            <div className="text-sm text-red-500">
                <button className="px-1">Edit</button>
                <button className="px-1">Remove</button>
            </div>
        </section>
        <hr />
    </main>
  )
}

export default AccountAddress
