export default function BrowserDetector(name: string) {
	let userAgent: any = navigator.userAgent;
	let browserName: any;

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
	} else {
		browserName = "Other";
	}

	if (browserName === name) {
		return true;
	} else {
		return false;
	}
}
