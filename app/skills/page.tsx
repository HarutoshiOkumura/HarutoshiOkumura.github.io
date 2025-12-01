'use client';

import { TechStack } from '@/components/tech-stack';

export default function SkillsPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<TechStack delay={0.2} />
			</div>
		</div>
	);
}