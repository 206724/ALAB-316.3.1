

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


// //Part 3: Creating the Submenu********

const subMenuEl= document.getElementById('sub-menu')
 subMenuEl.style.height=`100%`
 subMenuEl.style.backgroundColor =`var(--sub-menu-bg)`
 subMenuEl.classList.add(`flex-around`)
 subMenuEl.style.position='absolut';
 subMenuEl.style.top='0'

//Part 4: Adding Menu Interaction

//Select and cache the all of the <a> elements inside of topMenuEl in a variable
const topMenuLinks =topMenuEl.querySelector('a')
//Attach a delegated 'click' event listener to topMenuEl.
topMenuLinks.addEventListener('click',function(event){
 //The first line of code of the event listener function should
 // call the event object's preventDefault() method.  

  event.preventDefault();
  //The second line of code of the function should immediately
  // return if the element clicked was not an <a> element
  const clickedElement= event.target
  if(clickedElement.tagName !== 'A') return;

  //Log the content of the <a> to verify the handler is working.
    console.log(clickedElement.textContent);  
})



//get all menu items
const menuItems = document.querySelectorAll('a')

//add a click event listener to each men item

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click',() => {
    // remove the active class from all menu items
    menuItems.forEach(item => item.classList.remove('active'));

    //Add the active class to the clicked menu item

    menuItem.classList.add('active');
  })
} )


///**************************************
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click',function(event){
    event.preventDefault();

    const clickedLink =event.target;
    const isactive = clickedLink.classList.contains('active');
    
    const linkObj = menulinks.find(link => link.text === clickedLink.textContent);
    if (linkObj && linkObj.subLinks){
       subMenuEl.style.top =isactive ? '0' : '100%'; 
    } else{
        subMenuEl.style.top = 0;
    }
  })
})

///////

function buildSubMenu(subLinks){
  //clear current content of subMenuEL
subMenuEl.innerHTML ='';
//iterate over the sublink array and create <a> elements
subLinks.forEach(link => {
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.text;
  subMenuEl.appendChild(a);
})

  
}


//********************************** */
subMenuEl.addEventLister('click', function(event) {
  event.preventDefault();
  const link = event.target;
  if (link.tagName !== 'A') {
    return;
  }
  console.log(link.textContent);
})

subMenuEl.style.top = '0';

topMenuLinks.foreach(function(link) {
  link.ClassList.remove('active');
});
 const clickedText= Event.target.textContent;

 mainEl.innerHTMl = `<h1>${clickedText}</h1>`;

 if (clickedText === 'ABOUT'){
  mainEl.innerHTML = '<h1>About</h1>';
   }
  




