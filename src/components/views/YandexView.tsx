import BrowserDetector from "../../utils/BrowserDetector";
import { ReactNode } from "react";
import React from "react";

export interface YandexViewParams {
	children: ReactNode;
}

export default function YandexView({ children, ...props }: YandexViewParams) {
	return BrowserDetector("Yandex") ? <div {...props}>{children}</div> : null;
}
