### Views

List of available views:

| View        |                                                     |
| ----------- | --------------------------------------------------- |
| SafariView  | returns `children` if detected browser is `Safari`  |
| ChromeView  | returns `children` if detected browser is `Chrome`  |
| EdgeView    | returns `children` if detected browser is `Edge`    |
| FirefoxView | returns `children` if detected browser is `Firefox` |
| OperaView   | returns `children` if detected browser is `Opera`   |

There is also `OtherView` which returns `children` if the browser is not listed.

Each view accepts all common html properties, like `className`, `children`, `styles`, etc.
