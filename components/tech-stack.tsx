"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Grid3X3, ArrowLeft } from "lucide-react";

interface TechStackProps {
    delay?: number;
}

interface TechItem {
    name: string;
    icon: string;
}

interface TechCategory {
    category: string;
    items: TechItem[];
}

const techCategories: TechCategory[] = [
    {
        category: "Database & Services",
        items: [
            { name: "MySQL", icon: "skill-icons:mysql-dark" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "AWS", icon: "skill-icons:aws-light" },
            { name: "Azure", icon: "logos:microsoft-azure" },
            { name: "Redis", icon: "logos:redis" },
            { name: "MongoDB", icon: "vscode-icons:file-type-mongo" },
            { name: "GraphQL", icon: "logos:graphql" },
            { name: "Google Cloud", icon: "logos:google-cloud" },
        ]
    },
    {
        category: "ProgrammingLanguages",
        items: [
            { name: "Python", icon: "logos:python" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "C++", icon: "logos:c-plusplus" },
            { name: "Java", icon: "logos:java" },
            { name: "C", icon: "logos:c" },
            { name: "Git", icon: "logos:git-icon" },
            { name: "SQL", icon: "vscode-icons:file-type-sql" },
            { name: "HTML", icon: "vscode-icons:file-type-html" },
            { name: "CSS", icon: "vscode-icons:file-type-css" },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", icon: "logos:react" },
            { name: "Next.js", icon: "skill-icons:nextjs-dark" },
            { name: "OpenAI", icon: "simple-icons:openai" },
            { name: "Node.js", icon: "logos:nodejs-icon" },
            { name: "PyTorch", icon: "devicon:pytorch" },
            { name: "TensorFlow", icon: "logos:tensorflow" },
            { name: "FastAPI", icon: "logos:fastapi-icon" },
            { name: "Quart (Python)", icon: "logos:python" }, // Quart doesn't have a widely recognized icon, using Python as fallback
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "Kafka", icon: "logos:kafka-icon" },
            { name: "CUDA", icon: "simple-icons:nvidia" },
            { name: "CI/CD", icon: "logos:github-actions" },
        ]
    }
];

// Flatten all items for the scrolling marquee
const allTechItems: TechItem[] = techCategories.flatMap(category => category.items);

const TechItem = ({ tech, showName = false }: { tech: TechItem; showName?: boolean }) => {
    return (
        <div className={`flex ${showName ? 'flex-col' : ''} items-center justify-center ${showName ? 'p-4' : 'mx-6'} group`}>
            <div className={`relative ${showName ? 'w-16 h-16' : 'w-12 h-12'} transition-all duration-300 group-hover:scale-110 flex items-center justify-center`}>
                <Icon
                    icon={tech.icon}
                    className={`w-full h-full object-contain ${tech.icon.startsWith('simple-icons:') ? 'text-white' : ''}`}
                />
            </div>
            {showName && (
                <span className="text-xs font-medium text-muted-foreground text-center mt-2 whitespace-nowrap">
                    {tech.name}
                </span>
            )}
        </div>
    );
};

export const TechStack = ({ delay = 0 }: TechStackProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [showAll, setShowAll] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
            },
        },
    };

    // Duplicate the tech stack for seamless infinite scroll
    const duplicatedTechStack = [...allTechItems, ...allTechItems];

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
        >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Tech Stack.
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Press the button to see all the technologies I work with!
                    </p>
                </div>
            </div>

            {!showAll ? (
                <>
                    {/* Elegant scrolling logos */}
                    <div className="relative w-full overflow-hidden py-8">
                        {/* Subtle gradient overlays */}
                        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
                        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

                        {/* Floating logos */}
                        <motion.div
                            className="flex items-center"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 35,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedTechStack.map((tech, index) => (
                                <TechItem key={`${tech.name}-${index}`} tech={tech} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Icon-only Show All Button */}
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setShowAll(true)}
                            className="h-10 w-10"
                            title="Show all technologies"
                        >
                            <Grid3X3 className="h-4 w-4" />
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    {/* Organized category view */}
                    <div className="max-w-6xl mx-auto py-8 space-y-12">
                        {techCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="relative mb-8">
                                    <h3 className="text-2xl font-semibold relative z-10 inline-block bg-background px-4 text-center w-full">
                                        {category.category}
                                    </h3>
                                    <div className="absolute inset-0 top-1/2 w-full border-t border-border -z-10"></div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                                    {category.items.map((tech, techIndex) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.03) }}
                                        >
                                            <TechItem tech={tech} showName={true} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Icon-only Back Button */}
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setShowAll(false)}
                            className="h-10 w-10"
                            title="Back to scrolling view"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </div>
                </>
            )}
        </motion.div>
    );
};
