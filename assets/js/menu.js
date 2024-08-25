function toggleMenu() {
	const menu = document.getElementById('banner-menu');
	console.log("Toggling menu...");
	if (menu != null && menu.classList.contains('show')) {
		menu.classList.replace('show', 'hide');
	} else {
		menu.classList.replace('hide', 'show');
	}
}