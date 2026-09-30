const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
menu?.addEventListener('click', () => { const isOpen = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', isOpen); menu.textContent = isOpen ? '×' : '☰'; });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); }));
const dialog = document.querySelector('#video-modal');
document.querySelector('[data-video]')?.addEventListener('click', () => dialog.showModal());
document.querySelector('.close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('.cart-button')?.addEventListener('click', (event) => { const count = event.currentTarget.querySelector('span'); count.textContent = Number(count.textContent) + 1; event.currentTarget.setAttribute('aria-label', `${count.textContent} item${count.textContent === '1' ? '' : 's'} in cart`); });
