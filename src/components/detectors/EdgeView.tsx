import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface EdgeViewParams {
	children: ReactNode;
}

export default function EdgeView({ children, ...props }: EdgeViewParams) {
	return BrowserDetector("Edge") ? <div {...props}>{children}</div> : null;
}
