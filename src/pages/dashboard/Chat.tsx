import { useState, useEffect, useRef } from "react";
import { FaEllipsisV, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

// Define the Message interface if it's not defined in the imported file.
interface Message {
  role: string; // 'user' or 'assistant'
  content: string;
}

interface MessageBlockProps {
  message: Message;
}

const MessageBlock = ({ message }: MessageBlockProps) => {
  const isUser = message.role === "user";
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="flex w-fit flex-col">
        <div
          className={`rounded bg-gray-200 p-5 ${isUser ? "bg-primary-1000 text-primary-50" : "text-black bg-white"}`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};

interface ChatProps {
  pageTitle: string;
}

const Chat = ({ pageTitle }: ChatProps) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const [messages, setMessages] = useState<Message[]>([]);
  const dummyMessageLastRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");

  const getMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8082/chat?user_id=1");
      const messages = response.data.Messages;

      if (messages) {
        setMessages(messages);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const scrollToBottom = () => {
    dummyMessageLastRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const storeMessageOnDb = async () => {
    try {
      const response = await axios.post("http://localhost:8082/chat", {
        content: message,
        user_id: "1",
      });

      if (response.data.answer) {
        const newMessage: Message = {
          role: "assistant",
          content: response.data.answer,
        };
        setMessages((prev) => [...prev, newMessage]);
        scrollToBottom();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = () => {
    if (!message) return;
    const newUserMessage: Message = {
      role: "user",
      content: message,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    storeMessageOnDb();
    setMessage("");
    scrollToBottom();
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleDefaultMessage = () => {
    setMessage({
      // @ts-ignore
      role: "user",
      content: "give_me_review",
    });
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: "give_me_review",
      },
    ]);
    storeMessageOnDb();
    setMessage("");
    scrollToBottom();
  };
  return (
    <>
      <div className="relative box-border flex w-full max-w-6xl flex-grow flex-col">
        <div className="flex flex-grow flex-col gap-5 p-8">
          {messages.map((message, index) => (
            <MessageBlock key={index} message={message} />
          ))}
          <div ref={dummyMessageLastRef}></div>
        </div>

        <div className="sticky bottom-0 left-0">
          <div className="flex flex-grow flex-row gap-5  p-8  ">
            <div
              className="flex-1 cursor-pointer rounded-lg border-2 border-primary-1000 px-4 py-[14px] backdrop-blur"
              onClick={handleDefaultMessage}
            >
              <p className="mb-[5px] text-subHeading3 font-bold text-secondary-1000">
                Review my results
              </p>
              <p className="text-p1 text-secondary-700">
                analyzes the results of the tests and generates reports
              </p>
            </div>
            <div
              className="flex-1 cursor-pointer rounded-lg border-2 border-primary-1000 px-4 py-[14px] backdrop-blur"
              onClick={handleDefaultMessage}
            >
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

// @ts-nocheck
