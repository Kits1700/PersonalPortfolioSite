import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminMessages() {
  const { data: messages, isLoading } = useQuery<ContactMessage[]>({
    queryKey: ['/api/contact-messages'],
    queryFn: () => fetch('/api/contact-messages').then(res => res.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <button className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Portfolio
              </button>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">Contact Messages</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Contact Form Messages</h2>
          <p className="text-muted-foreground">
            Messages submitted through the portfolio contact form
          </p>
        </div>

        {messages && messages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No messages yet</p>
            <p className="text-muted-foreground text-sm mt-2">
              Messages submitted through the contact form will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages?.map((message) => (
              <div key={message.id} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{message.name}</h3>
                    <p className="text-primary text-sm">{message.email}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {new Date(message.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="text-foreground whitespace-pre-wrap">{message.message}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`mailto:${message.email}?subject=Re: Your message from portfolio website`, '_blank')}
                  >
                    Reply via Email
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}