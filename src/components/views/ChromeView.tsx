import BrowserDetector from "../../utils/BrowserDetector";
import React from "react";

export default function ChromeView({ children, ...props }: any) {
	return BrowserDetector("Chrome") ? <div {...props}>{children}</div> : null;
}
