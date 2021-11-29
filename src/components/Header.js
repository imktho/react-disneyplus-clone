import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>watch list</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>originals</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>movie</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>series</span>
                </a>
            </NavMenu>
            <UserImg src="https://cdnb.artstation.com/p/assets/images/images/008/424/125/large/joaslin-joaslin-baby-groot-by-joaslin.jpg?1512667129"/>
        </Nav>
    )
}

export default Header

const Nav =  styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    text-transform: uppercase;
    margin-left: 20px;
    cursor: pointer;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.4px;
            position: relative;

            &:after{
                content: ' ';
                height: 2px;
                width: 100%;

                background-color: white;
                position: absolute;
                left: 0;
                right: 0px;
                bottom: -6px;

                opacity: 0;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
                transform-origin: left;
                transition: all 250ms ease-in;
            }
        }
    }
`

const UserImg = styled.img`
    height:  50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
`