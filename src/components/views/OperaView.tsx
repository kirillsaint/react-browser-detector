import BrowserDetector from "../../utils/BrowserDetector";
import React from "react";

export default function OperaView({ children, ...props }: any) {
	return BrowserDetector("Opera") ? <div {...props}>{children}</div> : null;
}
