document.addEventListener('DOMContentLoaded', function(){

const searchTitle = document.querySelector('.app-header__title')
const searchInp = document.querySelector('.app-header__input')
const searchBtn = document.querySelector('.app-header__btn')


searchBtn.addEventListener('click', e => {
  searchTitle.classList.toggle('hideEl')
  searchInp.classList.toggle('hideEl')
  
})






const url = 'https://api.github.com/search/users?q=freeCodeCamp'
const a = getUserName(url)
a.then(e => console.log(e))

})

 const getUserName = async(url) => {
 const resp = await fetch(url)
 const data = await resp.json()
 return await data.items[0]
}