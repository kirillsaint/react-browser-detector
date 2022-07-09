import GetCurrentBrowser from "./GetCurrentBrowser";

export default function BrowserDetector(name: string) {
	let browserName: string = GetCurrentBrowser();

	if (browserName === name) {
		return true;
	} else {
		return false;
	}
}
