import BrowserDetector from "../../utils/BrowserDetector";
import React from "react";

export default function YandexView({ children, ...props }: any) {
	return BrowserDetector("Yandex") ? <div {...props}>{children}</div> : null;
}
