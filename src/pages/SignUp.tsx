import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Video, Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle signup logic here
		console.log("SignUp attempt:", {
			firstName,
			lastName,
			email,
			contact,
			password,
		});
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				{/* Logo and Brand */}
				<div className="text-center mb-8">
					<Link to="/" className="inline-flex items-center space-x-2 mb-4">
						<div className="bg-primary rounded-lg p-3">
							<Video className="w-8 h-8 text-primary-foreground" />
						</div>
						<span className="text-2xl font-bold text-foreground">
							VideoCall Pro
						</span>
					</Link>
					<p className="text-muted-foreground">
						Create your account to get started
					</p>
				</div>

				{/* SignUp Card */}
				<Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
					<CardHeader className="space-y-1 text-center">
						<CardTitle className="text-2xl font-semibold">
							Create Account
						</CardTitle>
						<CardDescription>
							Enter your details to create your new account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							{/* Name Fields */}
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">First Name</Label>
									<div className="relative">
										<User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
										<Input
											id="firstName"
											type="text"
											placeholder="First name"
											value={firstName}
											onChange={(e) => setFirstName(e.target.value)}
											className="pl-10"
											required
										/>
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Last Name</Label>
									<div className="relative">
										<User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
										<Input
											id="lastName"
											type="text"
											placeholder="Last name"
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
											className="pl-10"
											required
										/>
									</div>
								</div>
							</div>

							{/* Email Field */}
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<div className="relative">
									<Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<Input
										id="email"
										type="email"
										placeholder="Enter your email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="pl-10"
										required
									/>
								</div>
							</div>

							{/* Contact Details Field */}
							<div className="space-y-2">
								<Label htmlFor="contact">Contact Details</Label>
								<div className="relative">
									<Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<Input
										id="contact"
										type="tel"
										placeholder="Enter your phone number"
										value={contact}
										onChange={(e) => setContact(e.target.value)}
										className="pl-10"
										required
									/>
								</div>
							</div>

							{/* Password Field */}
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<div className="relative">
									<Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										placeholder="Create a password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="pl-10 pr-10"
										required
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
									>
										{showPassword ? (
											<EyeOff className="h-4 w-4" />
										) : (
											<Eye className="h-4 w-4" />
										)}
									</button>
								</div>
							</div>

							{/* Sign Up Button */}
							<Button type="submit" className="w-full" size="lg">
								Create Account
							</Button>

							{/* Divider */}
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-card px-2 text-muted-foreground">
										Or continue with
									</span>
								</div>
							</div>

							{/* Social Login Buttons */}
							<div className="grid grid-cols-2 gap-4">
								<Button variant="outline" type="button" className="w-full">
									<svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										/>
										<path
											fill="currentColor"
											d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										/>
										<path
											fill="currentColor"
											d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										/>
										<path
											fill="currentColor"
											d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										/>
									</svg>
									Google
								</Button>
								<Button variant="outline" type="button" className="w-full">
									<svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
										/>
									</svg>
									Facebook
								</Button>
							</div>
						</form>

						{/* Sign In Link */}
						<div className="text-center mt-6 pt-4 border-t">
							<p className="text-sm text-muted-foreground">
								Already have an account?{" "}
								<Link
									to="/login"
									className="text-primary font-medium hover:underline"
								>
									Sign in here
								</Link>
							</p>
						</div>
					</CardContent>
				</Card>

				{/* Footer */}
				<div className="text-center mt-8">
					<p className="text-xs text-muted-foreground">
						By creating an account, you agree to our{" "}
						<Link to="/terms" className="hover:underline">
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link to="/privacy" className="hover:underline">
							Privacy Policy
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
