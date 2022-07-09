import BrowserDetector from "../../utils/BrowserDetector";
import React from "react";

export default function OtherView({ children, ...props }: any) {
	return BrowserDetector("Other") ? <div {...props}>{children}</div> : null;
}
