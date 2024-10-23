import React from 'react'

export const Menu = () => {
    
    let menu = ['Home', 'About', 'Services', 'Pages', 'Blog', 'Contact']
    
  return (
    <>
        <nav id="menu" className='menu-principal'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net//cms/api/am/imageFileData/RW8TP2?ver=d2e0" alt="titulo" width='auto' height='50px'/>
            <ul className='lista-menu'>
            {menu.map((item, index) => (
                <li key={index} className='item-menu'>
                    <a href="">{item}</a>
                </li>
            ))}
            </ul>
            <div className='button-menu'>
                <button>🔎</button>
                <button>🛒 Comprar</button>
            </div>
        </nav>
    </>
  )
}
