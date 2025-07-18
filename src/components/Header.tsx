import { Button } from "@/components/ui/button";
import { Video, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();

	return (
		<header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link to="/" className="flex items-center space-x-2">
						<div className="bg-primary rounded-lg p-2">
							<Video className="w-6 h-6 text-primary-foreground" />
						</div>
						<span className="text-xl font-bold text-foreground">
							VideoCall Pro
						</span>
					</Link>

					<nav className="hidden md:flex items-center space-x-6">
						<Link
							to="/"
							className={`text-sm font-medium transition-colors hover:text-primary ${
								location.pathname === "/"
									? "text-primary"
									: "text-muted-foreground"
							}`}
						>
							Home
						</Link>
						<Link
							to="/contacts"
							className={`text-sm font-medium transition-colors hover:text-primary ${
								location.pathname === "/contacts"
									? "text-primary"
									: "text-muted-foreground"
							}`}
						>
							Contacts
						</Link>
					</nav>

					<div className="flex items-center space-x-4">
						<Link to="/contacts">
							<Button variant="outline" size="sm">
								<Users className="w-4 h-4 mr-2" />
								Contacts
							</Button>
						</Link>
						<Link to="/login">
							<Button variant="outline" size="sm">
								Sign In
							</Button>
						</Link>
						<Button size="sm">
							<Video className="w-4 h-4 mr-2" />
							Start Call
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
