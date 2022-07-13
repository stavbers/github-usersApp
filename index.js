document.addEventListener('DOMContentLoaded', function () {
  const out = document.querySelector('.app-wrp')

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
    a.then(e => toHtml(e))
  }

  function createItem(data) {
    return `
    <div class="app-wrp__main app-main">
    <ul class="app-main__list">
      <li class="app-main__item app-item">
        <img src="${data.avatar_url}" alt="logo user profile" class="app-item__img">
        <div class="app-item-info">
          <h3 class="app-item-info__title">${data.login}</h3>
          <div class="app-item-info__score">${data.score}</div>
        </div>
      </li>
    </ul>
  </div>
    `
  }
function toHtml(data) {
  out.insertAdjacentHTML('beforeend', createItem(data)); 
}
})

const getUserName = async (url) => {
  const resp = await fetch(url)
  const data = await resp.json()
  return await data.items[0]
}