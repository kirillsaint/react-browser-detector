import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface EdgeDetectorParams {
	children: ReactNode;
}

export default function EdgeDetector({
	children,
	...props
}: EdgeDetectorParams) {
	return BrowserDetector("Edge") ? <div {...props}>{children}</div> : null;
}
