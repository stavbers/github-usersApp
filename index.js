document.addEventListener('DOMContentLoaded', function () {
  const app = document.querySelector('#App')

  const baseUrl = 'https://api.github.com/users'
  const searchTitle = document.querySelector('.app-header__title')
  const searchInp = document.querySelector('.app-header__input')
  const searchBtn = document.querySelector('.app-header__btn')
  let inpDate = ''

  searchBtn.addEventListener('click', e => {
    searchTitle.classList.toggle('hideEl')
    searchBtn.classList.toggle('act')
    if (searchInp.classList.contains('hideEl')) {
      searchInp.classList.remove('hideEl')
      searchInp.classList.add('inpWidth')
    } else {
      searchInp.classList.add('hideEl')
      searchInp.classList.remove('act')
    }
  })

  searchBtn.addEventListener('click', () => {
    if (searchBtn.classList.contains('act')) {
      if (searchInp.value.length > 3) {
        inpDate = searchInp.value
        init(inpDate)
        searchInp.value = ''
      }
    }
  })

  function init(value) {
    const url = `https://api.github.com/search/users?q=${value}`
    const a = getUserName(url)
    a.then(e => createItem(e))
  }

  function createItem(data) {
    console.log(data)
  }

})

const getUserName = async (url) => {
  const resp = await fetch(url)
  const data = await resp.json()
  return await data.items[0]
}