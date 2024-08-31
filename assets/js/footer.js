/**
 * Updates the height of the footer, in order to make sure it always fills
 * the space between the bottom of the page, and the bottom of the viewport,
 * regardless of how small the page is
 */
function updateFooterHeight() {
	const footer = document.getElementById('footer');
	if (footer == null) {
		console.log("Could not find footer... Ignoring.");
		return;
	}
	console.log("Updating footer height...");
	// Reset the footer height to its default value
	footer.style.height = 'auto';
	const boundingRect = footer.getBoundingClientRect();
	const windowHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	if ( windowHeight > boundingRect.top + boundingRect.height) {
		// If the footer is not large enough to fill the bottom of the page,
		// resize its outer height accordingly
		footer.style.height = `${windowHeight - boundingRect.top}px`;
	}
}

document.addEventListener("DOMContentLoaded", updateFooterHeight);
document.addEventListener("resize", updateFooterHeight);

window.onresize = updateFooterHeight;