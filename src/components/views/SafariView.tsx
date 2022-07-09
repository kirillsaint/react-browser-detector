import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface SafariViewParams {
	children: ReactNode;
}

export default function SafariView({ children, ...props }: SafariViewParams) {
	return BrowserDetector("Safari") ? <div {...props}>{children}</div> : null;
}
