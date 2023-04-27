"use strict";

setInnerHTML
	= htmlString => element => () => element.innerHTML = htmlString;

export default { setInnerHTML }
