export default function GetCurrentBrowser() {
	let userAgent: any = navigator.userAgent;
	let browserName: string = "Other";

	if (userAgent.match(/chrome|chromium|crios/i)) {
		browserName = "Chrome";
	}
	if (userAgent.match(/firefox|fxios/i)) {
		browserName = "Firefox";
	}
	if (userAgent.match(/safari/i)) {
		browserName = "Safari";
	}
	if (userAgent.match(/opr/i)) {
		browserName = "Opera";
	}
	if (userAgent.match(/edg/i)) {
		browserName = "Edge";
	}
	if (userAgent.match(/yabrowser|yowser/i)) {
		browserName = "Yandex";
	}

	return browserName;
}
