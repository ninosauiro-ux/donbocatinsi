import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, ExternalLink, Clock, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  isQuickReply?: boolean;
};

const quickReplies = [
  { text: "Ver carta", icon: ExternalLink },
  { text: "Horarios", icon: Clock },
  { text: "Reservar", icon: Phone },
  { text: "Cómo llegar", icon: MapPin },
];

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy Bocatín 😋 ¿En qué te puedo ayudar hoy?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const [sessionId] = useState(() => {
    try {
      const key = "chatSessionId";
      const existing = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
      if (existing) return existing;
      const sid = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      if (typeof window !== "undefined") window.localStorage.setItem(key, sid);
      return sid;
    } catch {
      return `session_${Date.now()}`;
    }
  });

  // Auto-scroll to bottom on new messages or when opened
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleQuickReply = async (reply: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: reply,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    // If the user wants to see the full menu, redirect immediately
    if (reply === "Ver carta") {
      try {
        // fire-and-forget webhook (no await) to not block navigation
        fetch(
          "https://n8n-n8n.s9u5gg.easypanel.host/webhook/64a198f5-b10c-426a-8ce7-b8019aa0c189/chat",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId, chatInput: reply }),
          }
        );
      } catch {}
      window.location.href = "/menu";
      return;
    }

    // Show typing indicator
    const typingId = Date.now() + 500;
    setMessages((prev) => [
      ...prev,
      { id: typingId, text: "Escribiendo…", sender: "bot" },
    ]);

    // Try webhook first
    try {
      const res = await fetch(
        "https://n8n-n8n.s9u5gg.easypanel.host/webhook/64a198f5-b10c-426a-8ce7-b8019aa0c189/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, chatInput: reply }),
        }
      );
      let botText = "";
      try {
        const data = await res.json();
        botText = data?.output || data?.message || "";
      } catch {
        botText = "";
      }
      if (botText) {
        // remove typing indicator
        setMessages((prev) => prev.filter((m) => m.id !== typingId));
        const botMessage: Message = {
          id: Date.now() + 1,
          text: botText,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
        return;
      }
    } catch (e) {
      // fall through to local fallback
    }

    // Fallback to previous local replies if webhook fails
    let botResponse = "";
    switch (reply) {
      case "Ver carta":
        botResponse = "¡Claro! Aquí puedes ver nuestra carta completa con todos nuestros deliciosos platos. 👉";
        setTimeout(() => {
          window.open("/menu", "_blank");
        }, 500);
        break;
      case "Horarios":
        botResponse = "Nuestro horario es:\n\n🕐 Lunes: 13:00-15:30 / 19:30-23:00\n🚫 Martes: Cerrado\n🕐 Mié-Dom: 13:00-15:30 / 19:30-23:00\n\n📝 Nota: En invierno abrimos a las 12:30";
        break;
      case "Reservar":
        botResponse = "¡Perfecto! Puedes llamarnos al 📞 661 869 382 para reservar tu mesa. ¡Te esperamos!";
        break;
      case "Cómo llegar":
        botResponse = "Estamos en Plaza Reyes Católicos, 1, Roquetas de Mar. Haz clic aquí para ver el mapa 🗺️";
        setTimeout(() => {
          document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
        }, 500);
        break;
      default:
        botResponse = "Lo siento, no entendí. ¿Quieres que te muestre la carta o te doy el teléfono?";
    }
    // remove typing indicator
    setMessages((prev) => prev.filter((m) => m.id !== typingId));
    const fallbackMessage: Message = {
      id: Date.now() + 1,
      text: botResponse,
      sender: "bot",
    };
    setMessages((prev) => [...prev, fallbackMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Show typing indicator
    const typingId = Date.now() + 500;
    setMessages((prev) => [
      ...prev,
      { id: typingId, text: "Escribiendo…", sender: "bot" },
    ]);

    // Send to n8n webhook and use its response as bot reply
    try {
      const res = await fetch(
        "https://n8n-n8n.s9u5gg.easypanel.host/webhook/64a198f5-b10c-426a-8ce7-b8019aa0c189/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            chatInput: userMessage.text,
          }),
        }
      );
      let botText = "";
      try {
        const data = await res.json();
        botText = data?.output || data?.message || "";
      } catch {
        botText = "";
      }

      // remove typing indicator
      setMessages((prev) => prev.filter((m) => m.id !== typingId));
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botText || "Gracias por tu mensaje. En breve te respondemos.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error enviando mensaje al webhook n8n:", err);
      // remove typing indicator
      setMessages((prev) => prev.filter((m) => m.id !== typingId));
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Lo siento, ha ocurrido un error. Inténtalo de nuevo.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center cursor-pointer border-4 border-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        aria-label="Abrir chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-3xl shadow-glow border-2 border-primary/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-primary p-4 flex items-center gap-3">
              <motion.img
                src="/generated-image (4).png"
                alt="Bocatín"
                className="w-12 h-12 rounded-full border-2 border-card shadow-cartoon"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="flex-1">
                <h3 className="font-display font-bold text-primary-foreground">
                  Bocatín Chatbot
                </h3>
                <p className="text-xs text-primary-foreground/80">
                  Siempre listo para ayudarte
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground border border-border"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-3 bg-card border-t border-border">
              <div className="grid grid-cols-2 gap-2 mb-3">
                {quickReplies.map((reply) => {
                  const Icon = reply.icon;
                  return (
                    <Button
                      key={reply.text}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply.text)}
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="w-3 h-3 mr-1" />
                      {reply.text}
                    </Button>
                  );
                })}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 px-4 py-2 rounded-full border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  className="rounded-full bg-primary hover:bg-primary-dark"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};