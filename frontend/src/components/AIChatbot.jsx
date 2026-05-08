import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2Icon, SendIcon, XIcon, BotIcon, SparklesIcon, ChevronDownIcon } from "lucide-react";
import api from "../configs/axios";

const WELCOME_MESSAGE = {
    role: "assistant",
    content:
        "Hi! I'm **DriveBot** 🚗 — your personal vehicle recommendation assistant.\n\nI'll help you find the perfect rental car for your trip. Let's start!\n\n**How many days will your trip be?**",
};

const parseMarkdown = (text) => {
    return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/🔗 View listing: (\/listing\/[a-z0-9]+)/g, (_, path) => {
            return `<a href="${path}" class="inline-block mt-1 text-red-600 underline hover:text-red-800 font-medium" data-link="${path}">View Listing →</a>`;
        })
        .replace(/\n/g, "<br/>");
};

const MessageBubble = ({ message, navigate }) => {
    const isUser = message.role === "user";
    const html = parseMarkdown(message.content);

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
            {!isUser && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <BotIcon className="w-4 h-4 text-white" />
                </div>
            )}
            <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    isUser
                        ? "bg-gradient-to-br from-red-600 to-red-700 text-white rounded-tr-sm"
                        : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-sm"
                }`}
                dangerouslySetInnerHTML={{ __html: html }}
                onClick={(e) => {
                    const link = e.target.closest("[data-link]");
                    if (link) {
                        navigate(link.dataset.link);
                    }
                }}
            />
        </div>
    );
};

const TypingIndicator = () => (
    <div className="flex justify-start mb-3">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mr-2 flex-shrink-0">
            <BotIcon className="w-4 h-4 text-white" />
        </div>
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
    </div>
);

const QUICK_REPLIES = [
    "1 day",
    "3 days",
    "1 week",
    "2 weeks",
    "Colombo",
    "Kandy",
    "Galle",
    "2 people",
    "4 people",
    "Automatic",
    "Manual",
    "SUV",
    "Sedan",
];

const AIChatbot = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isOpen]);

    const sendMessage = async (text) => {
        const userText = text || input.trim();
        if (!userText || isLoading) return;

        const userMessage = { role: "user", content: userText };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);
        setShowQuickReplies(false);

        try {
            const { data } = await api.post("/api/ai-chat", {
                messages: updatedMessages,
            });
            setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
        } catch (error) {
            setMessages([
                ...updatedMessages,
                {
                    role: "assistant",
                    content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setMessages([WELCOME_MESSAGE]);
        setInput("");
        setShowQuickReplies(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating trigger button */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center"
                aria-label="Open AI vehicle assistant"
            >
                {isOpen ? (
                    <ChevronDownIcon className="w-6 h-6" />
                ) : (
                    <SparklesIcon className="w-6 h-6" />
                )}
            </button>

            {/* Chat panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[580px] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-sm:bottom-0 max-sm:right-0 max-sm:w-full max-sm:max-h-screen max-sm:rounded-none max-sm:border-0">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-700 to-red-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                <BotIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm leading-tight">DriveBot</p>
                                <p className="text-red-200 text-xs">AI Vehicle Recommender</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={handleReset}
                                className="text-red-200 hover:text-white text-xs px-2 py-1 rounded hover:bg-white/10 transition"
                                title="Start over"
                            >
                                Reset
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-lg transition text-white"
                                aria-label="Close"
                            >
                                <XIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 min-h-0">
                        {messages.map((msg, i) => (
                            <MessageBubble key={i} message={msg} navigate={navigate} />
                        ))}
                        {isLoading && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick replies */}
                    {showQuickReplies && !isLoading && messages.length === 1 && (
                        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 flex-wrap flex-shrink-0">
                            {["1 day", "3 days", "1 week", "2 weeks"].map((r) => (
                                <button
                                    key={r}
                                    onClick={() => sendMessage(r)}
                                    className="text-xs px-3 py-1.5 rounded-full border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-400 transition bg-white"
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input area */}
                    <div className="p-3 bg-white border-t border-gray-100 flex-shrink-0">
                        <div className="flex items-end gap-2">
                            <textarea
                                ref={textareaRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your answer..."
                                rows={1}
                                className="flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-200 transition max-h-28"
                            />
                            <button
                                onClick={() => sendMessage()}
                                disabled={!input.trim() || isLoading}
                                className="w-9 h-9 flex-shrink-0 bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition"
                                aria-label="Send"
                            >
                                {isLoading ? (
                                    <Loader2Icon className="w-4 h-4 animate-spin" />
                                ) : (
                                    <SendIcon className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1.5 text-center">
                            Powered by AI · Results from live listings
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChatbot;
