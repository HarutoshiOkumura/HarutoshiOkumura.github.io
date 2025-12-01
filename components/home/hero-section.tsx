'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function HeroSection() {
	return (
		<section className="relative overflow-hidden">
			{/* Content */}
			<div className="container relative z-10 px-4 py-20 md:py-32 flex flex-col items-center justify-center min-h-[60vh]">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto text-center"
				>

					<motion.h1
						variants={fadeIn('up', 0.3)}
						className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
					>
						<span className="text-gradient">Harutoshi Okumura's</span> Portfolio
					</motion.h1>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
					>
						Currently working on the Google Tunix Hackathon...
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-10 flex flex-wrap gap-4 justify-center"
					>
						<Button size="lg" asChild>
							<Link href="/projects">
								View Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a href="https://drive.google.com/file/d/1SB_McB6scPqqY9LDMsoPkI7vy_jk4O-W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
								Resume <FileDown className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
		</section>
	);
}