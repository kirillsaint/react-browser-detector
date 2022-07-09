import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface OperaDetectorParams {
	children: ReactNode;
}

export default function OperaDetector({
	children,
	...props
}: OperaDetectorParams) {
	return BrowserDetector("Opera") ? <div {...props}>{children}</div> : null;
}
