import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface FirefoxDetectorParams {
	children: ReactNode;
}

export default function FirefoxDetector({
	children,
	...props
}: FirefoxDetectorParams) {
	return BrowserDetector("Firefox") ? <div {...props}>{children}</div> : null;
}
