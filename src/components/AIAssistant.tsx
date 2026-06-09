import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your Mount Ridley Wellbeing Assistant. How can I support you today? Whether it's about the ACED program, wellbeing tips, or school info, I'm here to help!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const currentInput = input;
    const userMessage = { role: 'user', content: currentInput };
    
    // Snapshot of history excluding the static greeting
    const history = messages.slice(1).map(m => ({ 
      role: m.role, 
      content: m.content 
    }));
    
    setMessages(prev => [...prev, userMessage, { role: 'assistant', content: '' }]);
    setInput('');
    setIsLoading(true);

    try {
      // Call our Netlify function proxy instead of the external API directly
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { 
              role: "system", 
              content: "You are the Mount Ridley P-12 College (MRC) Wellbeing Assistant. " +
                       "INSTRUCTIONS: Provide direct, helpful answers only. Do NOT include your internal thought process, numbered analysis, or reasoning steps. " +
                       "Expert on: ACED, Elite Sports, school values, and the 4 Houses. " +
                       "Tone: Professional, warm, and student-centric."
            },
            ...history,
            userMessage
          ],
          temperature: 0.1 // Much lower for stability and directness
        }),
      });

      if (!response.ok) {
        throw new Error(`API Status ${response.status}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        // Only take the final content. No internal thoughts.
        const aiContent = data.choices[0].message.content;
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'assistant', content: aiContent };
          return newMessages;
        });
      } else {
        throw new Error("Invalid response format from API");
      }
    } catch (error: any) {
      console.error('AI Error:', error);
      // Fallback error message
      setMessages(prev => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        newMessages[lastIndex] = { 
          role: 'assistant', 
          content: "I'm having trouble connecting to the AI service. Please try again in a moment. If the issue persists, you can contact the school office at (03) 8338 3600 for assistance." 
        };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[550px] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-blue-100"
          >
            <div className="bg-blue-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Bot className="text-blue-900" size={24} />
                </div>
                <h3 className="font-black uppercase tracking-tight text-sm text-white">MRC ASSISTANT</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors text-white">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl ${
                    m.role === 'user' 
                      ? 'bg-blue-900 text-white rounded-tr-none shadow-lg' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-200 shadow-sm'
                  }`}>
                    {m.role === 'assistant' && i > 0 && <Sparkles className="text-yellow-500 mb-1" size={14} />}
                    <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{m.content || (isLoading && i === messages.length - 1 ? '...' : '')}</p>
                  </div>
                </div>
              ))}
              {isLoading && !messages[messages.length - 1].content && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-blue-900" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-grow p-4 pr-14 bg-slate-100 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-900 outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2.5 bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition-all disabled:opacity-40"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-900 hover:bg-blue-800 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all active:scale-95 border-4 border-yellow-400 group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
};

export default AIAssistant;
