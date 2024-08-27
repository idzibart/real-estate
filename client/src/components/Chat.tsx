import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState<boolean | null>(true);

  return (
    <div className="flex h-full flex-col">
      <div className="flex w-1/5 flex-col gap-5 overflow-y-auto">
        <h1 className="font-light">Messages</h1>

        <div className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold">John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        {/* Powtórz resztę wiadomości tak jak wyżej */}
      </div>

      {chat && (
        <div className="flex w-4/5 flex-col justify-between bg-white">
          <div className="flex items-center justify-between bg-yellow-300/50 p-5 font-bold">
            <div className="flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <span>John Doe</span>
            </div>
            <span className="cursor-pointer" onClick={() => setChat(null)}>
              X
            </span>
          </div>

          <div className="h-[350px] overflow-y-scroll p-5 flex flex-col gap-5">
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs bg-yellow-200/60 p-1 rounded-md">
                1 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet</p>
              <span className="text-xs bg-yellow-200/60 p-1 rounded-md">
                1 hour ago
              </span>
            </div>
            {/* Powtórz resztę wiadomości tak jak wyżej */}
          </div>

          <div className="border-t-2 border-yellow-300/50 h-[60px] flex items-center justify-between">
            <textarea className="flex-1 h-full border-none p-4 resize-none outline-none" />
            <button className="flex-1 bg-yellow-300/50 h-full cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
