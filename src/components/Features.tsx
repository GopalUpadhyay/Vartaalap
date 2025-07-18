
import { Video, Shield, Users, Smartphone, Clock, Globe, Zap, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "HD Video Quality",
      description: "Crystal clear 4K video with adaptive quality that adjusts to your connection automatically.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and advanced security features to keep your conversations private.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Large Meetings",
      description: "Host meetings with up to 500 participants without compromising on quality or performance.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Available on desktop, mobile, and web. Join from anywhere, on any device seamlessly.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Clock,
      title: "24/7 Reliability",
      description: "99.9% uptime guarantee with global infrastructure ensuring consistent performance.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with anyone, anywhere in the world with our global network infrastructure.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Zap,
      title: "Instant Connect",
      description: "Join meetings in seconds with one-click access and pre-meeting lobby features.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Lock,
      title: "Admin Controls",
      description: "Comprehensive admin dashboard with user management and detailed analytics.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Everything You Need for
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {" "}Professional Meetings
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive video calling platform provides all the tools and features 
            your team needs to collaborate effectively and securely.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover-scale border-0 shadow-md group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
