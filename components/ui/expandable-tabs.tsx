"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Tab {
    title: string;
    icon: LucideIcon;
    type?: never;
    href?: string;
}

interface Separator {
    type: "separator";
    title?: never;
    icon?: never;
    href?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
    tabs: TabItem[];
    className?: string;
    activeColor?: string;
    onChange?: (index: number | null) => void;
    selected?: number | null;
}

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
    },
    animate: (isSelected: boolean) => ({
        gap: isSelected ? ".5rem" : 0,
        paddingLeft: isSelected ? "1rem" : ".5rem",
        paddingRight: isSelected ? "1rem" : ".5rem",
    }),
};

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandableTabs({
    tabs,
    className,
    activeColor = "text-primary",
    onChange,
    selected: controlledSelected,
}: ExpandableTabsProps) {
    const [internalSelected, setInternalSelected] = React.useState<number | null>(null);
    const selected = controlledSelected !== undefined ? controlledSelected : internalSelected;
    const outsideClickRef = React.useRef(null);

    useOnClickOutside(outsideClickRef, () => {
        if (controlledSelected === undefined) {
            setInternalSelected(null);
        }
        onChange?.(null);
    });

    const handleSelect = (index: number) => {
        if (controlledSelected === undefined) {
            setInternalSelected(index);
        }
        onChange?.(index);
    };

    const Separator = () => (
        <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
    );

    return (
        <div
            ref={outsideClickRef}
            className={cn(
                "flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm",
                className
            )}
        >
            {tabs.map((tab, index) => {
                if (tab.type === "separator") {
                    return <Separator key={`separator-${index}`} />;
                }

                const Icon = tab.icon;
                const isSelected = selected === index;

                const content = (
                    <>
                        <Icon size={20} />
                        <AnimatePresence initial={false}>
                            {isSelected && (
                                <motion.span
                                    variants={spanVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={transition}
                                    className="overflow-hidden whitespace-nowrap"
                                >
                                    {tab.title}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </>
                );

                const commonProps = {
                    variants: buttonVariants,
                    initial: false,
                    animate: "animate",
                    custom: isSelected,
                    onClick: () => handleSelect(index),
                    transition: transition,
                    className: cn(
                        "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",
                        isSelected
                            ? cn("bg-muted", activeColor)
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    ),
                };

                if (tab.href) {
                    return (
                        <Link href={tab.href} key={tab.title}>
                            <motion.div {...commonProps}>
                                {content}
                            </motion.div>
                        </Link>
                    )
                }

                return (
                    <motion.button key={tab.title} {...commonProps}>
                        {content}
                    </motion.button>
                );
            })}
        </div>
    );
}
