import { useState } from "react";
import {
	Phone,
	Video,
	MessageCircle,
	Search,
	UserPlus,
	MoreVertical,
	Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// Mock data for contacts
const mockContacts = [
	{
		id: 1,
		name: "Sarah Johnson",
		email: "sarah.johnson@company.com",
		avatar:
			"https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
		status: "online",
		lastSeen: "Active now",
		department: "Marketing",
	},
	{
		id: 2,
		name: "Michael Chen",
		email: "michael.chen@company.com",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
		status: "online",
		lastSeen: "Active now",
		department: "Engineering",
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		email: "emily.rodriguez@company.com",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
		status: "away",
		lastSeen: "5 minutes ago",
		department: "Design",
	},
	{
		id: 4,
		name: "David Thompson",
		email: "david.thompson@company.com",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
		status: "busy",
		lastSeen: "In a meeting",
		department: "Sales",
	},
	{
		id: 5,
		name: "Lisa Wang",
		email: "lisa.wang@company.com",
		avatar:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
		status: "offline",
		lastSeen: "2 hours ago",
		department: "HR",
	},
	{
		id: 6,
		name: "James Wilson",
		email: "james.wilson@company.com",
		avatar:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
		status: "online",
		lastSeen: "Active now",
		department: "Engineering",
	},
];

const getStatusColor = (status: string) => {
	switch (status) {
		case "online":
			return "bg-green-500";
		case "away":
			return "bg-yellow-500";
		case "busy":
			return "bg-red-500";
		case "offline":
			return "bg-gray-400";
		default:
			return "bg-gray-400";
	}
};

const getStatusText = (status: string) => {
	switch (status) {
		case "online":
			return "Online";
		case "away":
			return "Away";
		case "busy":
			return "Busy";
		case "offline":
			return "Offline";
		default:
			return "Unknown";
	}
};

const Contacts = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("all");

	const filteredContacts = mockContacts.filter((contact) => {
		const matchesSearch =
			contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
			contact.department.toLowerCase().includes(searchQuery.toLowerCase());

		const matchesStatus =
			selectedStatus === "all" || contact.status === selectedStatus;

		return matchesSearch && matchesStatus;
	});

	const handleCall = (contact: any) => {
		console.log(`Calling ${contact.name}...`);
		// Here you would implement the actual calling functionality
	};

	const handleVideoCall = (contact: any) => {
		console.log(`Starting video call with ${contact.name}...`);
		// Here you would implement the actual video calling functionality
	};

	const handleMessage = (contact: any) => {
		console.log(`Messaging ${contact.name}...`);
		// Here you would implement messaging functionality
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b bg-card">
				<div className="container mx-auto px-4 py-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold text-foreground">Contacts</h1>
							<p className="text-muted-foreground mt-2">
								Connect with your team members
							</p>
						</div>
						<Button className="bg-primary hover:bg-primary/90">
							<UserPlus className="w-4 h-4 mr-2" />
							Add Contact
						</Button>
					</div>
				</div>
			</header>

			{/* Filters and Search */}
			<div className="container mx-auto px-4 py-6">
				<div className="flex flex-col sm:flex-row gap-4 mb-6">
					<div className="relative flex-1">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
						<Input
							placeholder="Search contacts..."
							className="pl-10"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<div className="flex gap-2">
						{["all", "online", "away", "busy", "offline"].map((status) => (
							<Button
								key={status}
								variant={selectedStatus === status ? "default" : "outline"}
								size="sm"
								onClick={() => setSelectedStatus(status)}
								className="capitalize"
							>
								{status === "all" ? (
									"All"
								) : (
									<>
										<Circle
											className={`w-2 h-2 mr-2 ${getStatusColor(status)}`}
										/>
										{status}
									</>
								)}
							</Button>
						))}
					</div>
				</div>

				{/* Contacts Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredContacts.map((contact) => (
						<Card
							key={contact.id}
							className="hover:shadow-lg transition-shadow duration-200"
						>
							<CardContent className="p-6">
								<div className="flex items-start justify-between mb-4">
									<div className="flex items-center space-x-4">
										<div className="relative">
											<img
												src={contact.avatar}
												alt={contact.name}
												className="w-12 h-12 rounded-full object-cover"
											/>
											<div
												className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(
													contact.status
												)}`}
											/>
										</div>
										<div>
											<h3 className="font-semibold text-foreground">
												{contact.name}
											</h3>
											<p className="text-sm text-muted-foreground">
												{contact.email}
											</p>
										</div>
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="sm">
												<MoreVertical className="w-4 h-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>View Profile</DropdownMenuItem>
											<DropdownMenuItem>Edit Contact</DropdownMenuItem>
											<DropdownMenuItem className="text-destructive">
												Remove
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>

								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<Badge variant="secondary">{contact.department}</Badge>
										<span className="text-sm text-muted-foreground">
											{contact.lastSeen}
										</span>
									</div>

									<div className="flex items-center space-x-2">
										<Circle
											className={`w-2 h-2 ${getStatusColor(contact.status)}`}
										/>
										<span className="text-sm font-medium">
											{getStatusText(contact.status)}
										</span>
									</div>

									<div className="flex space-x-2 pt-2">
										<Button
											size="sm"
											variant="outline"
											className="flex-1"
											onClick={() => handleCall(contact)}
										>
											<Phone className="w-4 h-4 mr-2" />
											Call
										</Button>
										<Button
											size="sm"
											className="flex-1"
											onClick={() => handleVideoCall(contact)}
										>
											<Video className="w-4 h-4 mr-2" />
											Video
										</Button>
										<Button
											size="sm"
											variant="outline"
											onClick={() => handleMessage(contact)}
										>
											<MessageCircle className="w-4 h-4" />
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{filteredContacts.length === 0 && (
					<div className="text-center py-12">
						<div className="text-muted-foreground mb-4">
							<Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
							<h3 className="text-lg font-semibold mb-2">No contacts found</h3>
							<p>Try adjusting your search criteria or add new contacts.</p>
						</div>
						<Button className="mt-4">
							<UserPlus className="w-4 h-4 mr-2" />
							Add Your First Contact
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Contacts;
