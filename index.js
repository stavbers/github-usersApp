document.addEventListener('DOMContentLoaded', function(){
const url = 'https://api.github.com/search/users?q=freeCodeCamp'


const a = getUserName(url)

a.then(e => console.log(e))

})

 const getUserName = async(url) => {
 const resp = await fetch(url)
 const data = await resp.json()
 return await data.items[0]
}