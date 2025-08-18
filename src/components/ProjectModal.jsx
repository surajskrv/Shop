import React, { useEffect } from "react";
import { motion } from "framer-motion";

const overlayVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const contentVariants = {
	initial: { opacity: 0, scale: 0.95, y: 16 },
	animate: { opacity: 1, scale: 1, y: 0 },
	exit: { opacity: 0, scale: 0.95, y: 16 },
};

export default function ProjectModal({ project, onClose }) {
	useEffect(() => {
		const onKeyDown = (e) => {
			if (e.key === "Escape") onClose?.();
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onClose]);

	if (!project) return null;

	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
			variants={overlayVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			onClick={() => onClose?.()}
		>
			<motion.div
				role="dialog"
				aria-modal="true"
				aria-label={project.title || "Project details"}
				className="relative mx-4 w-full max-w-5xl"
				variants={contentVariants}
				transition={{ type: "spring", stiffness: 260, damping: 22 }}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={() => onClose?.()}
					className="absolute -top-3 -right-3 md:top-3 md:right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/50"
					aria-label="Close"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
						<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
					</svg>
				</button>

				<div className="overflow-hidden rounded-lg bg-white shadow-xl">
					{project.src ? (
						<img
							src={project.src}
							alt={project.title || "Project image"}
							className="max-h-[70vh] w-full object-contain bg-black"
						/>
					) : null}
					<div className="p-6">
						{project.title ? (
							<h3 className="text-2xl font-bold text-steel mb-2">{project.title}</h3>
						) : null}
						{project.description ? (
							<p className="text-gray-700 leading-relaxed">{project.description}</p>
						) : (
							<p className="text-gray-700 leading-relaxed">High-quality custom metal fabrication project.</p>
						)}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}


