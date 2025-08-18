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

export default function ImageModal({ imageUrl, title, onClose }) {
	useEffect(() => {
		const onKeyDown = (e) => {
			if (e.key === "Escape") {
				onClose?.();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onClose]);

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
				aria-label={title || "Image modal"}
				className="relative mx-4 w-full max-w-4xl"
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
					{imageUrl ? (
						<img
							src={imageUrl}
							alt={title || "Selected image"}
							className="max-h-[70vh] w-full object-contain bg-black"
						/>
					) : (
						<div className="flex h-[50vh] items-center justify-center bg-gray-100">
							<span className="text-gray-500">No image</span>
						</div>
					)}
					{title ? (
						<div className="p-4 text-center">
							<h3 className="text-lg font-semibold text-gray-800">{title}</h3>
						</div>
					) : null}
				</div>
			</motion.div>
		</motion.div>
	);
}


