import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface OperaViewParams {
	children: ReactNode;
}

export default function OperaView({ children, ...props }: OperaViewParams) {
	return BrowserDetector("Opera") ? <div {...props}>{children}</div> : null;
}
