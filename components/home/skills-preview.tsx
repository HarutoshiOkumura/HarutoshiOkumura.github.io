'use client';

import { TechStack } from '@/components/tech-stack';

export function SkillsPreview() {
	return (
		<section className="py-12 md:py-20">
			<div className="container px-4">
				<TechStack />
			</div>
		</section>
	);
}