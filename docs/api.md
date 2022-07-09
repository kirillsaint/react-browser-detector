### API

#### Hooks

`BrowserDetector` - takes a `name` parameter with the name of the browser and returns `true` or `false`. List of supported browsers: `Chrome`, `Safari`, `Edge`, `Opera`, `Firefox`, `Other`

```js
import { BrowserDetector } from "@kirillsaint/browser-detector";

function App() {
	const renderContent = () => {
		if (BrowserDetector("Safari")) {
			return <div> This content is available only in Safari</div>;
		}
		return <div> ...content </div>;
	};

	return renderContent;
}
```

`GetCurrentBrowser` - returns browser name.

```js
import { GetCurrentBrowser } from "@kirillsaint/browser-detector";

function App() {
	return <h1>Your browser is {GetCurrentBrowser()}</h1>;
}
```
