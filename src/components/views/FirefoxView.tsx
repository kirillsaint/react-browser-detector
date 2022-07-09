import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface FirefoxViewParams {
	children: ReactNode;
}

export default function FirefoxView({ children, ...props }: FirefoxViewParams) {
	return BrowserDetector("Firefox") ? <div {...props}>{children}</div> : null;
}
