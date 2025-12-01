'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	// Only show the first 3 projects in the preview
	const previewProjects = projects.slice(0, 3);

	return (
		<section className="py-16 md:py-24 bg-background">
			<div className="container px-4">
				<SectionHeader
					title="Featured Projects"
					description="A peak at what I have been working on!"
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
				>
					{previewProjects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeInScale(index * 0.1)}
							className="flex"
						>
							<Card className="flex flex-col h-full card-gradient">
								<CardContent className="flex-grow p-6">
									<h3 className="font-bold text-xl mb-2">{project.title}</h3>
									<p className="text-muted-foreground mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, tagIndex) => (
											<Badge key={tagIndex} variant="secondary">
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
								<CardFooter className="p-6 pt-0 gap-2">
									{project.link && project.link !== '#' && (
										<Button size="sm" variant="outline" asChild>
											<a href={project.link} target="_blank" rel="noopener noreferrer">
												<ExternalLink className="h-4 w-4 mr-2" />
												Demo
											</a>
										</Button>
									)}
									{project.repo && project.repo !== '#' && (
										<Button size="sm" variant="outline" asChild>
											<a href={project.repo} target="_blank" rel="noopener noreferrer">
												<Github className="h-4 w-4 mr-2" />
												Repo
											</a>
										</Button>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild>
						<Link href="/projects">
							View All Projects <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}