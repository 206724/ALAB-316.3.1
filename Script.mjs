

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
 subMenuEl.style.backgroundColor =`--sub-menu-bg`
 subMenuEl.classList.add(`flex-around`)

//Part 4: Adding Menu Interaction


let topMenuLinks= document.querySelectorall('a');

topMenuLinks.addEventListener('click',function(event){
    
    if(event.target.preventDefault()){
        
        event.preventDefault()
    }

    else{
          return('it is not an achor element')
    }

});