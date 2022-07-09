## react-browser-detector

Detect browser, and render view according to the detected browser type.

## Installation

To install, you can use npm:

```
npm install react-browser-detector
```

## API

- [Hooks](docs/api.md)
- [Views](docs/views.md)

## Usage

Example:

```javascript
import {
	SafariView,
	ChromeView,
	OperaView,
	EdgeView,
	FirefoxView,
	YandexView,
	OtherView,
} from "@kirillsaint/browser-detector";
```

```jsx
<>
	<SafariView>
		<h1>This is rendered only in Safari</h1>
	</SafariView>
	<ChromeView>
		<h1>This is rendered only in Chrome</h1>
	</ChromeView>
	<OperaView>
		<h1>This is rendered only in Opera</h1>
	</OperaView>
	<EdgeView>
		<h1>This is rendered only in Edge</h1>
	</EdgeView>
	<FirefoxView>
		<h1>This is rendered only in Firefox</h1>
	</FirefoxView>
	<YandexView>
		<h1>This is rendered only in Yandex Browser</h1>
	</YandexView>
	<OtherView>
		<h1>This content is rendered only in other browsers</h1>
	</OtherView>
</>
```

if you don't need a view, you can use `BrowserDetector` for conditional rendering

```javascript
import { BrowserDetector } from '@kirillsaint/browser-detector';

function App() {
  renderContent = () => {
    if (BrowserDetector('Safari')) {
      return <div> This content is available only in Safari</div>
    }
    return <div> ...content </div>
  }

  render() {
    return this.renderContent();
  }
}
```

## Style the view

You can style a view component by passing class to the `className` prop

```jsx
<SafariView className="custom-class">
	<p>View content</p>
</SafariView>
```

or you can pass inline styles to `style` prop

```jsx
<SafariView
	style={{
		background: "red",
		fontSize: "24px",
		lineHeight: "2",
	}}
>
	<p>View content</p>
</SafariView>
```

## License

MIT
