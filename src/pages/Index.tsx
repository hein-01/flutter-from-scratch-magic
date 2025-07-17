
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageCircle, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
            <Bot className="w-10 h-10 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Your AI Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of conversation with our intelligent chatbot. 
              Get instant answers, creative solutions, and friendly assistance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-12 px-8">
              <Link to="/auth">Start Chatting</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link to="/chat">Go to Chat</Link>
            </Button>
          </div>
        </div>
        
        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Natural Conversations</CardTitle>
              <CardDescription>
                Chat naturally with our AI that understands context and provides human-like responses
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Instant Responses</CardTitle>
              <CardDescription>
                Get immediate answers to your questions with lightning-fast AI processing
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your conversations are protected with enterprise-grade security and privacy
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
