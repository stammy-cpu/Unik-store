import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Send, MapPin } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Conversation {
  id: string;
  sellerName: string;
  itemTitle: string;
  itemLocation: string;
  itemImage: string;
  lastMessage: string;
  unread: boolean;
  messages: Message[];
}

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");

  // Mock conversations
  const conversations: Conversation[] = [
    {
      id: "1",
      sellerName: "Unik Estate",
      itemTitle: "Modern 3-Bedroom Apartment",
      itemLocation: "OAU Campus Gate",
      itemImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
      lastMessage: "Thanks for your interest! I can show you the property anytime.",
      unread: true,
      messages: [
        { id: "1", sender: "Unik Estate", content: "Hi! Thanks for your interest in the apartment", timestamp: "2:30 PM", isOwn: false },
        { id: "2", sender: "You", content: "Hi, I'm interested in viewing the property", timestamp: "2:25 PM", isOwn: true },
      ]
    },
    {
      id: "2",
      sellerName: "Unik Estate",
      itemTitle: "HP Laptop - New Condition",
      itemLocation: "OAU Campus, Maintenance",
      itemImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
      lastMessage: "Yes, the laptop is still available. Battery health is excellent.",
      unread: false,
      messages: [
        { id: "1", sender: "Unik Estate", content: "Yes, the laptop is still available", timestamp: "Yesterday", isOwn: false },
      ]
    }
  ];

  const current = selectedConversation 
    ? conversations.find(c => c.id === selectedConversation)
    : null;

  const handleSendMessage = () => {
    if (messageInput.trim() && current) {
      // In a real app, this would send the message to the server
      setMessageInput("");
    }
  };

  return (
    <Layout>
      <div className="bg-secondary/30 border-b py-4">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Back Home
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-bold mb-8">Messages</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="col-span-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg">Conversations</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map(conv => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={`w-full p-4 border-b text-left transition-colors ${
                    selectedConversation === conv.id
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{conv.sellerName}</div>
                      <div className="text-xs text-muted-foreground truncate">{conv.itemTitle}</div>
                      {conv.unread && <div className="w-2 h-2 bg-primary rounded-full mt-1" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          {current ? (
            <Card className="col-span-1 lg:col-span-2 flex flex-col overflow-hidden">
              {/* Chat Header */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full" />
                  <div>
                    <div className="font-bold">{current.sellerName}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {current.itemLocation}
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {current.messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.isOwn
                        ? "bg-primary text-white"
                        : "bg-secondary text-foreground"
                    }`}>
                      <p className="text-sm">{msg.content}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-primary hover:bg-primary/90"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="col-span-1 lg:col-span-2 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
