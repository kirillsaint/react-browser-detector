import BrowserDetector from "../../utils/BrowserDetector";
import React from "react";

export default function FirefoxView({ children, ...props }: any) {
	return BrowserDetector("Firefox") ? <div {...props}>{children}</div> : null;
}
