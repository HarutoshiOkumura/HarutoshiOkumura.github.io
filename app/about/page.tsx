'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							Software Engineer & Research Assisstant at EmoryNLP, researching how we can use LLMs and formal logic to detect explicit contradictions. 
							I'm also a Computer Science & Applied Maths student at Emory University, graduating in 2026 (27' for MS in CS).hroughout my academic career, I've been involved in various projects that have
								helped me develop practical skills and theoretical knowledge. I believe in
								continuous learning and staying updated with the latest technological advancements.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Fun fact, I was a Astrophysics major at first, and changed my major 5 times (yes I touched Chem too..)
								before locking in on Computer Science during my sophomore year. 
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="https://drive.google.com/file/d/1SB_McB6scPqqY9LDMsoPkI7vy_jk4O-W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
								Download Resume <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px] w-[500px] mx-auto rounded-full overflow-hidden">
						<Image
							src="/headshot.png"
							alt="Harutoshi Okumura portrait"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Currently pursuing a Bachelor's degree in Engineering with a focus on
									practical applications and innovative solutions.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Gained valuable experience through internships and projects, working
									with cutting-edge technologies and methodologies.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
									Proficient in various engineering tools and technologies, with a strong
									foundation in problem-solving and analytical thinking.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}