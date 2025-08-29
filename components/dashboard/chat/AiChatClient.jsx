"use client"
import MessageScreen from "@/components/dashboard/chat/MessageScreen"
import SendMessage from "@/components/dashboard/chat/SendMessage"
import { axiosPrivateClient } from "@/lib/axios.private.client"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
const AiChatClient = () => {
    // hooks
    const axiosInstance = axiosPrivateClient();
    // state
    const [message, setMessage] = useState([])
    const [aiTyping, setAiTyping] = useState(false)
    // get chat history
    const {
        data: chatHistory = [],
        isLoading,
        isError,
        refetch,
        isFetching
    } = useQuery({
        queryKey: ['chatHistory'],
        queryFn: async () => {
            const res = await axiosInstance.get('/open-ai/chat/history');
            return res?.data?.data || [];
        }
    });
    // load the chat history
    useEffect(() => {
        if (chatHistory?.length > 0) {
            setMessage(chatHistory);
        }
    }, [chatHistory])
    // handle new message
    const handleNewMessage = (newMessage) => {
        setMessage((prevMessages) => [...prevMessages, newMessage]);
    }
    // remove message by id
    // remove message by id (for optimistic rollback)
    const removeMessage = (id) => {
        setMessage((prev) => prev.filter((msg) => msg.id !== id))
    }


    // main render
    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-3 relative ">
            <MessageScreen
                messages={message}
                isLoading={isFetching || isLoading}
                isError={isError}
                aiTyping={aiTyping}
            />
            <SendMessage
                handleNewMessage={handleNewMessage}
                setAiTyping={setAiTyping}
                removeMessage={removeMessage}
            />
        </div>
    )
}

export default AiChatClient