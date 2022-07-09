import BrowserDetector from "../../utils/BrowserDetector";
import React from "react";

export default function SafariView({ children, ...props }: any) {
	return BrowserDetector("Safari") ? <div {...props}>{children}</div> : null;
}
