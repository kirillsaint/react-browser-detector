import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface OtherDetectorParams {
	children: ReactNode;
}

export default function OtherDetector({
	children,
	...props
}: OtherDetectorParams) {
	return BrowserDetector("Other") ? <div {...props}>{children}</div> : null;
}
