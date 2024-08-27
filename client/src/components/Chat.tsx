import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState<boolean | null>(true);

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-1/2 flex-col gap-5 overflow-y-auto">
        <h1 className="font-thin">Messages</h1>
        <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-white p-5">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-white p-5">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-white p-5">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-white p-5">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-white p-5">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-white p-5">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="flex h-1/2 flex-col justify-between bg-white">
          <div className="flex items-center justify-between bg-[#f7c14b85] p-5 font-bold">
            <div className="flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              John Doe
            </div>
            <span className="cursor-pointer" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="flex h-[350px] flex-col gap-5 overflow-scroll p-5">
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="rounded-md bg-[#f7c14b39] p-[2px] text-xs">
                1 hour ago
              </span>
            </div>
          </div>
          <div className="flex h-[60px] items-center justify-between border-t-2 border-[#f7c14b85]">
            <textarea className="h-full w-3/4 border-0 p-5"></textarea>
            <button className="h-full w-1/4 cursor-pointer border-0 bg-[#f7c14b85]">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
