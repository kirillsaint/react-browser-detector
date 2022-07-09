export default function GetCurrentBrowser() {
	let userAgent: any = navigator.userAgent;
	let browserName: string;

	if (userAgent.match(/chrome|chromium|crios/i)) {
		browserName = "Chrome";
	} else if (userAgent.match(/firefox|fxios/i)) {
		browserName = "Firefox";
	} else if (userAgent.match(/safari/i)) {
		browserName = "Safari";
	} else if (userAgent.match(/opr\//i)) {
		browserName = "Opera";
	} else if (userAgent.match(/edg/i)) {
		browserName = "Edge";
	} else if (userAgent.match(/yabrowser|yowser/i)) {
		browserName = "Yandex";
	} else {
		browserName = "Other";
	}

	return browserName;
}
