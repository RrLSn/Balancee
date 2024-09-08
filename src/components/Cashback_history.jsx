import { Bookings } from "../data";

const Cashback_history = () => {
  return (
    <div className="w-[70%] min-h-[40rem] m-auto bg-white p-10 rounded-md flex flex-col gap-10">
      <p className=" text-2xl ">Reward History</p>
      <div className="w-[100%] flex flex-col gap-4">
        {Bookings.slice(0, 5).map((detail, index) => (
          <div key={index} className="border rounded-md p-2">
            <p className="text-[#a6a3a3]">{detail.date}</p>
            <span className="flex justify-between items-center">
              <p>{detail.bookId}</p>
              <div className=" w-[180px] min-h-[5rem] h-[max-content] flex flex-col justify-center items-center">
                {detail.service.map((service, index) => (
                  <p key={index}>{service}</p>
                ))}
              </div>
              <p className="text-green-600">+ ₦{detail.price * 0.015}</p>
            </span>
          </div>
        ))}
      </div>
      <button className="w-[90px] h-[2rem] border rounded-md  flex justify-center items-center m-auto">
        View more
      </button>
    </div>
  );
};

export default Cashback_history;
