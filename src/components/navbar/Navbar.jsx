import design from './Navbar.module.css'
import { useState } from 'react'
import classNames from 'classnames'
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <TopNavbar/>
        <nav className={design.container}>
            <section className={design.title}>
                <Link to = '/'><h3>Bandage</h3></Link>
            </section>
            <section className={design['nav-links']}>
                <ul className={design['nav-list-item']}>
                    <li>Home</li>
                    <li>Shop </li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
                <ul className={classNames(design.signup, design.list_items)}>
                    <li><img src="/images/downnav/user-icon.png" alt="user" />Login / Register</li>
                    <li><img src="/images/downnav/search-icon.png" alt="search" /></li>
                    <li><img src="/images/downnav/cart-icon.png" alt="cart" />1</li>
                    <li><img src="/images/downnav/like-icon.png" alt="like" />1</li>
                </ul>
            </section>
            <section className={design['toggle-menu']}>
              <img src="/images/downnav/search-icon.png" alt="search" />
              <img src="/images/downnav/cart-icon.png" alt="cart" />
                <img src='/images/navbar/menuBtn.png' alt="toggle menu" onClick={toggleMenu}/>
            </section>
            <ul className={classNames(design.toggle_items, { [design['is-open']]: isOpen })}>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>

        </>
    )
}

export default Navbar