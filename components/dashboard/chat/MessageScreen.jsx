"use client";
import { Empty } from "antd";
import { useEffect, useRef } from "react";
import { BsPersonFill, BsRobot } from "react-icons/bs";
import { FiLoader } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import ReactMarkdown from "react-markdown";

const MessageScreen = ({ messages = [], isLoading, isError }) => {
    const messagesEndRef = useRef(null);
    // auto scroll to bottom when new messages arrive
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);
    // main render
    return (
        <div className="w-full h-full flex flex-col justify-start overflow-y-auto p-4 space-y-6">
            {
                isLoading ? (
                    <div className="flex flex-col h-full items-center justify-center text-gray-500 py-10">
                        <FiLoader className="animate-spin text-3xl mb-2" />
                        <p className="text-sm">AI is thinking...</p>
                    </div>
                ) : isError ? (
                    <div className="flex flex-col h-full items-center justify-center text-gray-500 py-10">
                        <Empty
                            description={
                                <div className="flex flex-col items-center">
                                    <MdErrorOutline className="text-3xl mb-2" />
                                    <p className="text-sm">Something went wrong. Please try again.</p>
                                </div>
                            }
                        />
                    </div>
                ) : messages?.length === 0 ? (
                    <div className="flex flex-col h-full items-center justify-center text-gray-500 py-10">
                        <BsRobot className="animate-bounce text-4xl mb-2" />
                        <p className="text-2xl">No messages yet. Start the conversation!</p>
                    </div>
                ) : (
                    messages?.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`flex max-w-3xl ${message.sender === "user" ? "flex-row-reverse" : "flex-row"
                                    } items-start gap-3`}
                            >
                                {/* Avatar */}
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user"
                                        ? "bg-primary-dark text-white"
                                        : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    {message.sender === "user" ? (
                                        <BsPersonFill />
                                    ) : (
                                        <BsRobot className="animate-bounce" />
                                    )}
                                </div>

                                {/* Message content */}
                                <div
                                    className={`rounded-lg border flex flex-col gap-2 p-3 ${message.sender === "user" ? "rounded-tr-none" : "rounded-tl-none bg-gray-100"
                                        }`}
                                >
                                    {message?.image_url && (
                                        <img
                                            src={message?.image_url}
                                            alt="User uploaded"
                                            className="max-w-xs max-h-64 rounded-md object-contain"
                                            suppressHydrationWarning
                                        />
                                    )}
                                    {message?.sender_message && (
                                        message.sender === "ai" ? (
                                            <ReactMarkdown >
                                                {message.sender_message}
                                            </ReactMarkdown>
                                        ) : (
                                            <p>{message.sender_message}</p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
            {/* Invisible anchor for auto-scroll */}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageScreen;
