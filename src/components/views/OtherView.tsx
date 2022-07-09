import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface OtherViewParams {
	children: ReactNode;
}

export default function OtherView({ children, ...props }: OtherViewParams) {
	return BrowserDetector("Other") ? <div {...props}>{children}</div> : null;
}
