export default function GetCurrentBrowser() {
	let userAgent: any = navigator.userAgent;
	let browserName: string;

	if (userAgent.match(/chrome|chromium|crios/i)) {
		browserName = "Chrome";
	} else if (userAgent.match(/firefox|fxios/i)) {
		browserName = "Firefox";
	} else if (userAgent.match(/safari/i)) {
		browserName = "Safari";
	} else if (userAgent.includes("OPR")) {
		browserName = "Opera";
	} else if (userAgent.includes("Edg")) {
		browserName = "Edge";
	} else if (userAgent.includes("YaBrowser")) {
		browserName = "Yandex";
	} else {
		browserName = "Other";
	}

	return browserName;
}
