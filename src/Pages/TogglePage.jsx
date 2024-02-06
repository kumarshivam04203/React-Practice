import React, { useState } from "react";

function TogglePage() {
	const [visible, setVisible] = useState(true)
	function handleToggle(){
		setVisible(!visible)
	}
	return (
		<div>
			{visible ? <p id="my-paragraph" >This is the paragraph you can toggle.</p> : null}

			<button id="toggle-btn" onClick={handleToggle}>Toggle Paragraph</button>
		</div>
	);
}

export default TogglePage;