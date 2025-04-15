!(function insertHeader() {
  const header = document.createElement('header')
  header.className = 'header'
  header.innerHTML = `
    <div class="header__home">
      <a href="/" title="Home" aria-label="Home">
        返回首页
      </a>
    </div>
  `
  const style = document.createElement('style')
  style.textContent = `
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #333;
      color: #fff;
    }
    .header__home {
      font-size: 1.2rem;
    }
    .header__home a {
      color: #fff;
      text-decoration: none;
    }
    .header__home a:hover {
      text-decoration: underline;
    }
    .header__home a:active {
      color: #ccc;
    }
  `
  document.head.appendChild(style)
  document.body.insertAdjacentElement('afterbegin', header)
})()