import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface ChromeDetectorsParams {
	children: ReactNode;
}

export default function ChromeDetector({
	children,
	...props
}: ChromeDetectorsParams) {
	return BrowserDetector("Chrome") ? <div {...props}>{children}</div> : null;
}
