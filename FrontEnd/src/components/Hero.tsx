
import { Button } from "@/components/ui/button";
import { Video, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-secondary/20 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-secondary-foreground">
              🎉 New: HD video calls with up to 100 participants
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Connect, Collaborate,
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}Create
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience crystal-clear video calls with enterprise-grade security. 
            Perfect for teams, meetings, and staying connected with what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 group">
              <Video className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Video Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/contacts">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 group">
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Contacts
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>HD Quality</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Video Preview */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-2xl border overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="bg-primary/90 rounded-full p-8">
                <Video className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
