import BrowserDetector from "../../utils/BrowserDetector";
import React from "react";

export default function EdgeView({ children, ...props }: any) {
	return BrowserDetector("Edge") ? <div {...props}>{children}</div> : null;
}
