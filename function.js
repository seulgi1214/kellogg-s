//페이지 상단으로 이동하는 이벤트
const upBtn = document.querySelector('.upBtn');

function goToUpHandler() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
upBtn.addEventListener('click', goToUpHandler)

//토글버튼 제어하면서 sidenav 켜고 끄기
const toggleBtn = document.querySelector('.toggle__btn');
const navLists = document.querySelector('.nav__lists');
const closeBtn = document.querySelector('.closeBtn');
const navListsWrap = document.querySelector('.nav__list__wrap');

function sideNavOpen() {
    toggleBtn.style.display = 'none'
    navLists.style.display = 'flex'
    closeBtn.style.display = 'block'
    navListsWrap.style.display = 'block'
}

toggleBtn.addEventListener('click', sideNavOpen);

function sideNavClose() {
    navLists.style.display = 'none'
    navListsWrap.style.display = 'none'
    toggleBtn.style.display = 'block'
}

closeBtn.addEventListener('click', sideNavClose)


export { goToUpHandler };
export { sideNavOpen };
export { sideNavClose };