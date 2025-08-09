import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
	const benefits = [
		"14-day free trial",
		"No credit card required",
		"Cancel anytime",
		"24/7 support included",
	];

	return (
		<section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 relative overflow-hidden">
			<div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />

			<div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center animate-fade-in">
					<h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
						Ready to Transform Your Team Communication?
					</h2>

					<p className="text-xl text-blue-100 mb-8 leading-relaxed">
						Join thousands of companies already using our platform to connect,
						collaborate, and grow their business with professional video
						calling.
					</p>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="flex items-center justify-center gap-2 text-blue-100"
							>
								<CheckCircle className="h-5 w-5 text-teal-300" />
								<span className="font-medium">{benefit}</span>
							</div>
						))}
					</div>

					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							size="lg"
							className="bg-white text-blue-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover-scale group"
						>
							Start Your Free Trial
							<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="border-2 border-white text-black hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
						>
							Schedule Demo
						</Button>
					</div>

					<p className="text-sm text-blue-200 mt-6">
						Trusted by 10,000+ companies worldwide • SOC 2 Type II Certified
					</p>
				</div>
			</div>
		</section>
	);
};

export default CTA;
