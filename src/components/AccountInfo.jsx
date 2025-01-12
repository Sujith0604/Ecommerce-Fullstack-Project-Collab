
const AccountInfo = () => {
    
  return (
    <main>
        <section className="font-semibold text-[14px]">
            <h1 className="font-bold text-[24px] pb-4">Account Information</h1>
            <p className="h-1 w-[100%] bg-black mb-[20px]"></p>
            <div className="flex justify-between items-center px-4">
                <div className="flex gap-4 py-4">
                    <h4 className="w-[50px]">Name</h4>
                    <h4>Dinesh M</h4>
                </div>
                <div>
                    <button className="text-red-500">Edit</button>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center px-4">
                <div className="flex gap-4 py-4">
                    <h4 className="w-[50px]">Email</h4>
                    <h4>dinesh@gmail.com M</h4>
                </div>
                <div>
                    <button className="text-red-500">Edit</button>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center px-4">
                <div className="flex gap-4 py-4">
                    <h4 className="w-[50px]">Phone</h4>
                    <h4>+91 9292929292 M</h4>
                </div>
                <div>
                    <button className="text-red-500">Edit</button>
                </div>
            </div>
            <hr />
        </section>
    </main>
  )
}

export default AccountInfo
