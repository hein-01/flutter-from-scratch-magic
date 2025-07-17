import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, Bot, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface Message {
  id: number;
  content: string;
  is_ai: boolean;
  created_at: string;
}

export default function Chat() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setUser(session.user);
      loadMessages();
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setUser(session.user);
        loadMessages();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error loading messages:', error);
      return;
    }

    setMessages(data || []);
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const messageContent = input.trim();
    setInput('');
    setLoading(true);

    try {
      // Add user message
      const { error: userMessageError } = await supabase
        .from('messages')
        .insert({
          content: messageContent,
          is_ai: false,
          user_id: user?.id,
        });

      if (userMessageError) throw userMessageError;

      // Simulate AI response (you can replace this with actual AI integration)
      setTimeout(async () => {
        const aiResponse = generateAIResponse(messageContent);
        
        const { error: aiMessageError } = await supabase
          .from('messages')
          .insert({
            content: aiResponse,
            is_ai: true,
            user_id: user?.id,
          });

        if (aiMessageError) throw aiMessageError;
        
        setLoading(false);
        loadMessages();
      }, 1000);

      loadMessages();
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const generateAIResponse = (userMessage: string): string => {
    const responses = [
      "That's an interesting question! Let me think about that...",
      "I understand what you're asking. Here's my perspective...",
      "Thanks for sharing that with me. I'd like to help you with...",
      "That's a great point! Have you considered...",
      "I can definitely help you with that. Let me explain...",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">AI Assistant</h1>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleSignOut}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 px-4">
        <div className="py-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-8">
              <Bot className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Start a conversation with your AI assistant!</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.is_ai ? '' : 'flex-row-reverse'}`}
              >
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className={message.is_ai ? 'bg-primary/10' : 'bg-secondary/50'}>
                    {message.is_ai ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </AvatarFallback>
                </Avatar>
                
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl ${
                    message.is_ai
                      ? 'bg-muted text-foreground rounded-tl-sm'
                      : 'bg-primary text-primary-foreground rounded-tr-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))
          )}
          
          {loading && (
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary/10">
                  <Bot className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-muted px-3 py-2 rounded-2xl rounded-tl-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-border bg-card/50 backdrop-blur-sm p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 h-12"
            disabled={loading}
          />
          <Button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            size="sm"
            className="h-12 px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}