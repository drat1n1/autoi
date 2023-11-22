let mainMenu = document.querySelectorAll('nav>ul>li'),
		header = document.querySelector('header'),
		headerHeight = header.offsetHeight;

mainMenu.forEach(item=>{
	item.addEventListener('mouseover',(e)=>{
		let subMenuHeight = e.currentTarget.querySelector('.submenu').offsetHeight;
		let totalHeight = headerHeight + subMenuHeight + 100;
		header.style.height = `${totalHeight}px`;
	});
	item.addEventListener('mouseout',(e)=>{		
		header.style.height = `${headerHeight}px`;
	});
});
