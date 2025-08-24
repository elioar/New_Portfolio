;(function(){
  function select(selector){ return document.querySelector(selector) }
  function selectAll(selector){ return Array.prototype.slice.call(document.querySelectorAll(selector)) }

  var menu = select('#fs_menu')
  var toggle = select('#menu_toggle')
  var closeBtn = select('#fs_menu_close')
  var contactBtn = select('#menu_contact')
  var overlay = select('#js-overlay')
  var contact = select('#js-contact')

  if(!menu || !toggle) return

  function openMenu(){
    menu.classList.add('--open')
    menu.setAttribute('aria-hidden','false')
    toggle.setAttribute('aria-expanded','true')
    document.documentElement.style.overflow='hidden'
  }
  function closeMenu(){
    menu.classList.remove('--open')
    menu.setAttribute('aria-hidden','true')
    toggle.setAttribute('aria-expanded','false')
    document.documentElement.style.overflow=''
  }

  toggle.addEventListener('click', function(){
    var expanded = toggle.getAttribute('aria-expanded') === 'true'
    expanded ? closeMenu() : openMenu()
  })

  if(closeBtn){ closeBtn.addEventListener('click', closeMenu) }

  // Close on background tap (outside inner content)
  menu.addEventListener('click', function(e){
    if(e.target === menu) closeMenu()
  })

  // Close when pressing ESC
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeMenu()
  })

  // Close menu on link click and keep smooth UX
  selectAll('[data-menu-close]').forEach(function(link){
    link.addEventListener('click', function(){
      closeMenu()
    })
  })

  // Wire Discuss Project inside the menu to existing contact overlay
  if(contactBtn && overlay && contact){
    contactBtn.addEventListener('click', function(){
      closeMenu()
      overlay.classList.add('--visible')
      contact.classList.add('--visible')
    })
  }
})();



