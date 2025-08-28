"use client"
import { BsPersonFill, BsRobot } from "react-icons/bs";
import { useEffect, useState } from "react";

const MessageScreen = () => {
    const [messages, setMessages] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Initialize with comprehensive sample conversation
        setMessages([
            {
                sender: 'user',
                type: 'text',
                content: 'Hi! I need help choosing an outfit for a summer wedding next month.',
                timestamp: new Date(Date.now() - 3600000 * 3).toISOString()
            },
            {
                sender: 'bot',
                type: 'text',
                content: 'Hello ! I`d be happy to help. Summer weddings are wonderful! Could you tell me more about the venue and dress code? Is it indoor/outdoor, formal/casual?',
                timestamp: new Date(Date.now() - 3600000 * 2.9).toISOString()
            },
            {
                sender: 'user',
                type: 'text',
                content: "It's an outdoor garden wedding at 4pm, semi-formal dress code. The invitation says 'summer chic'.",
                timestamp: new Date(Date.now() - 3600000 * 2.8).toISOString()
            },
            {
                sender: 'bot',
                type: 'text',
                content: 'Perfect! For "summer chic" semi-formal, here are some great options:\n\n1. For women: A flowy midi dress in floral print or pastel colors with wedge sandals\n2. For men: A light linen suit in beige or light blue with a crisp white shirt\n\nWould you like me to show you some specific examples?',
                timestamp: new Date(Date.now() - 3600000 * 2.7).toISOString()
            },
            {
                sender: 'user',
                type: 'image',
                content: 'https://i.pravatar.cc/300',
                timestamp: new Date(Date.now() - 3600000 * 2.5).toISOString()
            },
            {
                sender: 'user',
                type: 'text',
                content: 'I found this dress online. What do you think? Would it work with nude heels?',
                timestamp: new Date(Date.now() - 3600000 * 2.4).toISOString()
            },
            {
                sender: 'bot',
                type: 'text',
                content: 'That dress is beautiful for a garden wedding! The floral pattern is perfect. Nude heels would work wonderfully - they`ll elongate your legs while keeping the focus on the dress.Consider adding: \n\n- A wide - brimmed hat for sun protection\n - Delicate gold jewelry\n - A small clutch in a complementary color',
                timestamp: new Date(Date.now() - 3600000 * 2.3).toISOString()
            },
            {
                sender: 'user',
                type: 'text',
                content: 'Thanks! What about accessories? Should I go for silver or gold jewelry?',
                timestamp: new Date(Date.now() - 3600000 * 2.2).toISOString()
            },
            {
                sender: 'bot',
                type: 'text',
                content: 'For summer weddings, gold jewelry tends to work better with warm tones. Based on the dress you shared:\n\n1. Gold would complement the warm floral colors\n2. Choose delicate pieces - maybe a thin chain and small hoop earrings\n3. If your heels have gold accents, that would tie the look together beautifully',
                timestamp: new Date(Date.now() - 3600000 * 2.1).toISOString()
            },
            {
                sender: 'user',
                type: 'image',
                content: 'https://i.pravatar.cc/300',
                timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
            },
            {
                sender: 'user',
                type: 'text',
                content: 'Like this set? The earrings have small pearls too.',
                timestamp: new Date(Date.now() - 3600000 * 1.9).toISOString()
            },
            {
                sender: 'bot',
                type: 'text',
                content: 'Those are perfect! The pearl accents add just the right amount of elegance without being too formal. The necklace length is ideal for a dress with likely a V-neck or similar cut. My only suggestion would be to limit yourself to either the necklace or bracelet if you wear both earrings, to avoid over-accessorizing.',
                timestamp: new Date(Date.now() - 3600000 * 1.8).toISOString()
            },
            {
                sender: 'user',
                type: 'text',
                content: 'Great advice! One last question - should I bring a wrap or jacket for the evening?',
                timestamp: new Date(Date.now() - 3600000 * 1.7).toISOString()
            },
            {
                sender: 'bot',
                type: 'text',
                content: 'Yes, I recommend a lightweight wrap or dressy cardigan. Even summer evenings can get cool. Options:\n\n1. A lace or chiffon shawl in a complementary color\n2. A tailored linen blazer if you prefer more structure\n3. A silk pashmina that can double as an elegant accessory\n\nChoose something that complements but doesn\'t compete with your dress.',
                timestamp: new Date(Date.now() - 3600000 * 1.6).toISOString()
            }
        ]);
    }, []);

    const formatTime = (isoString) => {
        if (!isMounted) return ''; // Return empty string during SSR
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // main render
    return (
        <div className="w-full h-full flex flex-col justify-start overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`flex max-w-3xl ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                        {/* Avatar */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user'
                            ? 'bg-primary-dark text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}>
                            {message.sender === 'user' ? <BsPersonFill /> : <BsRobot className=" animate-bounce" />}
                        </div>

                        {/* Message content */}
                        <div className={`rounded-lg border p-3 ${message.sender === 'user'
                            ? 'rounded-tr-none'
                            : ' rounded-tl-none'
                            }`}>
                            {message.type === 'text' ? (
                                <p className="text-gray-800">{message.content}</p>
                            ) : (
                                <div className="relative">
                                    <img
                                        src={message.content}
                                        alt="User uploaded"
                                        className="max-w-xs max-h-64 rounded-md object-contain"
                                        suppressHydrationWarning
                                    />
                                    {message.sender === 'user' && (
                                        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1">

                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Timestamp - now hydration-safe */}
                            <p className={`text-xs mt-1 font-semibold text-gray-800`}
                                suppressHydrationWarning
                            >
                                {formatTime(message.timestamp)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageScreen;