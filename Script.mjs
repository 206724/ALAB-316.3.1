

//menu data structure

let menulinks =[
    // {text:'about',href:'/about'},
    // {text:'catalog',href:'/catalog'},
    // {text:'orders', href:'/orders'},
    // {text:'account',href:'/account'},
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},

];



const mainEl =document.getElementsByTagName (`main`)
mainEl[0].style.backgroundColor='var(--main-bg)'
mainEl[0].innerHTML='<h1> DOM Manipulation</h1>'
mainEl[0].classList.add(`flex-ctr`)

//Part 2 :Creating a Menu Bar

const topMenuEl = document.getElementById(`top-menu`)
topMenuEl.style.height=`100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`
topMenuEl.classList.add(`flex-around`)
//part -3
menulinks.forEach(menulinks =>{
    let newLink=document.createElement("a")

    newLink.setAttribute('href',menulinks.href)
    
    newLink.textContent=menulinks.text;
  
    topMenuEl.appendChild(newLink)

})

//**********************

//Part 3: Creating the Submenu********

const subMenuEl= document.getElementById('sub-menu')
 subMenuEl.style.height=`100%`
 subMenuEl.style.backgroundColor =`var(--sub-menu-bg)`
 subMenuEl.classList.add(`flex-around`)

//Part 4: Adding Menu Interaction


let topMenuLinks= document.querySelector('a');

topMenuLinks.addEventListener('click',function(event){
    
  event.preventDefault();
  const link= event.target
  if(link.tagName != 'A') return;
  console.log(link.textContent);  
})


///add class
//get all menu items
const menuItems = document.querySelectorAll("a")

//add a click event listener to each men item

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click',() => {
    // remove the active class from all menu items
    menuItems.forEach(item => item.classList.remove('active'));

    //Add the active class to the clicked menu item

    menuItem.classList.add('active');
  })
} )



// const link = document.querySelectorAll("a")
// if (link.classList.contains('active')) {
//   link.classList.remove('active');
//   showingSubMenu = false;
//   subMenuEl.style.top = '0';
//   return;
// }
// topMenuLinks.forEach(function(link) {
//   link.classList.remove('active');
// });




////Part 5: Adding Submenu Interaction

//  link.classList.remove('active');
// if (link.classList.contains('active')) {
//   link.classList.remove('active');
//   showingSubMenu = false;
//   subMenuEl.style.top = '0';
//   return;
// }

// topMenuLinks.forEach(function(link) {
//   link.classList.remove('active');
// });
// link.classList.remove('active');

// link.classList.remove('active');
const link = menulinks.find(function (subLinks) 
 {
return subLinks.text === link.textContent
});

if (showingSubMenu) {
  buildSubMenu(link.subLinks);
  subMenuEl.style.top = '100%';
 } else {
  subMenuEl.style.top ='0';
 }

function buildSubMenu(subLinks){
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link)
  {
     const linkEl= setAttribute ('href', link.href);
     linkEl.textContent =link.text;
    subMenuEl.appendChild(linkEl);
  })
}

subMenuEl.addEventLister('click', function(event) {
  event.preventDefault();
  var link = event.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
})
showingSubMenu = false;
subMenuEl.style.top = '0';

topMenuLinks.foreach(function(link) {
  link.ClassList.remove('active');
});

mainEl.innerHTMl = `<h1>${link.textContent}</h1>`;

