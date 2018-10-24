import * as React from "react";
import * as ReactDOM from "react-dom";
import Avatar from "./Avatar";

it("renders with a name", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Avatar name="John Doe"/>, div);

	ReactDOM.unmountComponentAtNode(div);
});
