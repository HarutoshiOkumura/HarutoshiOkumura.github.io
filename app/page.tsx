'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import { HeroSection } from '@/components/home/hero-section';
import { AboutPreview } from '@/components/home/about-preview';
import { ProjectsPreview } from '@/components/home/projects-preview';
import { SkillsPreview } from '@/components/home/skills-preview';
import { ContactPreview } from '@/components/home/contact-preview';

import TetrisLoading from '@/components/ui/tetris-loader';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Simulate loading time
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isLoading && !vantaEffect && vantaRef.current) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.00,
					minWidth: 200.00,
					scale: 0.8,
					scaleMobile: 0.8,
					color: 0xff3f81, // Net-line colors? 
					backgroundColor: 0x000000,
					points: 10.00,
					maxDistance: 15.00,
					spacing: 20.00,
					showDots: false,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [isLoading, vantaEffect]);

	return (
		<>
			<AnimatePresence>
				{isLoading && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-background"
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<TetrisLoading size="md" speed="fast" />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{!isLoading && (
				<>
					<div className="relative">
						{/* Vanta.js Background */}
						<div ref={vantaRef} className="absolute inset-0 z-0 opacity-60" />

						{/* Content with Vanta background */}
						<div className="relative z-10">
							<HeroSection />
							<SkillsPreview />
						</div>
					</div>
					<AboutPreview />
					<ProjectsPreview />
					{/* <ContactPreview /> */}
				</>
			)}
		</>
	);
}