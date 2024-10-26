const ID_MENU = 'banner-menu';
const ID_MENU_TOGGLE = 'banner-menu-toggle';
const ID_OVERLAY = 'header-overlay';
const CLASS_SHOW = 'show';
const CLASS_HIDE = 'hide';

function toggleMenu() {
	const menu = document.getElementById(ID_MENU);
	const overlay = document.getElementById(ID_OVERLAY);
	console.log("Toggling menu...");
	if (menu === null) {
		console.log("Could not find menu DOM element...")
	}
	if (menu.classList.contains(CLASS_SHOW)) {
		menu.classList.replace(CLASS_SHOW, CLASS_HIDE);
		overlay.classList.replace(CLASS_SHOW, CLASS_HIDE);
	} else {
		menu.classList.replace(CLASS_HIDE, CLASS_SHOW);
		overlay.classList.replace(CLASS_HIDE, CLASS_SHOW);
	}
}

document.addEventListener('readystatechange', event => {
	if (event.target.readyState === "interactive") {
		const menu = document.getElementById(ID_MENU);
		const overlay = document.getElementById(ID_OVERLAY);
		const toggle = document.getElementById(ID_MENU_TOGGLE);
		
		overlay.addEventListener('click', toggleMenu);
		toggle.addEventListener('click', toggleMenu);

		menu.classList.remove(CLASS_SHOW);
		overlay.classList.remove(CLASS_SHOW);
		menu.classList.add(CLASS_HIDE);
		overlay.classList.add(CLASS_HIDE);
	}
});
