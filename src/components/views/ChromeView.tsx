import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface ChromeViewParams {
	children: ReactNode;
}

export default function ChromeView({ children, ...props }: ChromeViewParams) {
	return BrowserDetector("Chrome") ? <div {...props}>{children}</div> : null;
}
