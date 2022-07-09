import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface SafariDetectorParams {
	children: ReactNode;
}

export default function SafariDetector({
	children,
	...props
}: SafariDetectorParams) {
	return BrowserDetector("Safari") ? <div {...props}>{children}</div> : null;
}
