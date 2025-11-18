'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission logic would go here
		console.log('Form submitted:', formState);
		alert('Message sent successfully!');
		setFormState({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Here is my business card. Please don't dox me
						</p>
					</motion.div>

						<div className="flex w-full justify-center">
								<motion.div
									variants={fadeIn('right', 0.3)}
									className="w-full max-w-sm"
								>
								<Card className="card-gradient h-full w-full">
									<CardContent className="p-6 text-center">
									<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
										<div className="space-y-4">
											<div className="flex items-center justify-center gap-3">
											<Phone className="h-5 w-5 text-primary mr-3" />
												<p className="text-muted-foreground text-center">
													+1 (404) 316-9572
												</p>
										</div>
											<div className="flex items-center justify-center gap-3">
											<Mail className="h-5 w-5 text-primary mr-3" />
												<p className="text-muted-foreground text-center">
													HOkumura032@gmail.com
												</p>
										</div>
											<div className="flex items-center justify-center gap-3">
											<MapPin className="h-5 w-5 text-primary mr-3" />
												<p className="text-muted-foreground text-center">
													Atlanta, GA
												</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						
					</div>
				</motion.div>
			</div>
		</div>
	);
}