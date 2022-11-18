import React from 'react'
import './navbar.css'
import logo from '../components/images/logo.jpg'
const Navbar = () => {
  return (
    
        <section>
            <article>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>

                <ol>
                    <li className='first'><a href='#'>MEN</a></li>
                    <li><a href='#'>WOMEN</a></li>
                    <li className='second'><a href='#'>KIDS</a>
                    <div className='drop-down'>
                    <dl className='boys-collection'>
                        <dt>BoysClothing</dt>
                        <dd>T-Shirts</dd>
                        <dd>Shirts</dd>
                        <dd>Shorts</dd>
                        <dd>Jeans</dd>
                        <dd>Trousers</dd>
                        <dd>Value Packs</dd>
                    </dl>
                    <dl className='girls-collection'>
                        <dt>Girls Clothing</dt>
                        <dd>Dresses</dd>
                        <dd>Tops</dd>
                        <dd>Tshirts</dd>
                        <dd>Party wear</dd>
                    </dl>
                    </div>
                    
                    
                    </li>
                    <li className='four' ><a href='#' >HOME&LIVING</a></li>
                    <li><a href='#'>BEAUTY</a></li>
                    <li className='none'><a href='#'>STUDIO<sup>NEW</sup></a></li>

                </ol>   

                <footer>
                    <div className='search-input'>
                        <input type="text" placeholder='Search Products,brands and more'
                        >
                            
                        </input>
                        {/* <i class="fa-solid fa-user-magnifying-glass"></i> */}
                    </div>
                </footer>

                <span>
                    <div className='icons'>
                      <i class="fa-solid fa-user">
                        <p>Profile</p>
                      </i>
                      
                    </div>

                    <div className='like'>
                        <i class="fa-regular fa-heart">
                             <p>WishList</p>
                        </i>
                       
                    </div>

                    <div className='bag'>
                        <i class="fa-solid fa-bag-shopping">
                             <p>Bag</p>
                        </i>
                       
                    </div>
                </span>


            </article>
        </section>
    
  )

};
   
export default Navbar