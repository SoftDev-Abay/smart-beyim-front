import { useState, useEffect, useRef } from "react";
import { FaEllipsisV, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import {  Message } from "../../components/UI/assets";

interface MessageBlockProps {
  message: Message;
}

const MessageBlock = ({ message }: MessageBlockProps) => {
  const isUser = message.role === "user";
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex w-fit flex-col `}>
        <div
          className={`rounded bg-gray-200 p-5 ${isUser ? "bg-primary-1000 text-primary-50" : "text-black bg-white"}`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};

const Chat = ({ pageTitle }: { pageTitle: string }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const [messages, setMessages] = useState<Message[]>([]);
  const dummyMessageLastRef = useRef<
    React.LegacyRef<HTMLDivElement> | undefined
  >(null);
  const [message, setMessage] = useState("");

  const getMessages = async () => {
    try {
      const responce = await axios.get("http://localhost:8082/chat?user_id=1")
      const messages = responce.data.Messages

      console.log(messages)

      if(messages) {
        setMessages(messages)
      }
    } catch (error:any) {
      console.log(error.message)
    }
  };



  const scrollToBottom = () => {
    if (!dummyMessageLastRef.current) return;
    dummyMessageLastRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const storeMessageOnDb = async () => {
    try {
      const responce = await axios.post("http://localhost:8082/chat", {
        content:message,
        user_id:"1"
    })

    const data = responce.data
    

    if (data.answer) {

      console.log(data)


      const answer = data.answer as string

      const newMessage :Message = {
        role:"assistant",
        content:answer
      }
      setMessages((prev)=>[...prev, newMessage ])
      scrollToBottom();

    }    

    } catch (error) {
      console.log(error)
    }
  };

  const handleSendMessage = () => {
    setMessages((prev)=>[...prev, {
      role:"user",
      content:message
    }])
    storeMessageOnDb();
    setMessage("");
    scrollToBottom();
  };

  const handleDefaultMessage = () => {
    setMessages((prev)=>[...prev, {
      role:"user",
      content:"give_me_review"
    }])
    storeMessageOnDb();
    setMessage("");
    scrollToBottom();
  };

  useEffect(()=>{
    getMessages()
  },[])

  console.log(messages)

  return (
    <>
      <div className="relative box-border flex flex-grow flex-col w-full max-w-6xl flex flex-col">
        <div className="flex flex-grow flex-col gap-5  p-8  ">
          {messages.map((message)=>
          <MessageBlock message={message} />
          )}
          <div ref={dummyMessageLastRef}></div>
        </div>

        <div className="sticky bottom-0 left-0">
          <div className="flex flex-grow flex-row gap-5  p-8  ">
            <div className="flex-1 cursor-pointer rounded-lg border-2 border-primary-1000 px-4 py-[14px] backdrop-blur" onClick={handleDefaultMessage}>
              <p className="mb-[5px] text-subHeading3 font-bold text-secondary-1000">
                Review my results
              </p>
              <p className="text-p1 text-secondary-700">
                analyzes the results of the tests and generates reports
              </p>
            </div>
            <div className="flex-1 cursor-pointer rounded-lg border-2 border-primary-1000 px-4 py-[14px] backdrop-blur" onClick={handleDefaultMessage}>
              <p className="mb-[5px] text-subHeading3 font-bold text-secondary-1000">
                Improve my grades
              </p>
              <p className="text-p1 text-secondary-700">
                provide the ways to improve my grades
              </p>
            </div>
          </div>
          <div className=" flex flex-row justify-between gap-2.5 bg-primary-100   px-8 pb-4 pt-2">
            <input
              type="text"
              placeholder="Write message..."
              className="w-full rounded-xl border border-gray-300 py-3 pl-5 pr-3 text-subHeading3  outline-none focus:border-primary-1000"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              // ... rest of the props
            />
            <button
              type="button"
              className="flex flex-row items-center gap-2.5 rounded-xl bg-primary-1000 px-5 py-2.5 text-white"
              onClick={handleSendMessage}
            >
              <FaPaperPlane className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
