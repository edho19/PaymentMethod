import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav `
  position: relative;
  padding-top: 2rem;
  
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: rgba(0,0,0,0.1);
    position: absolute;
    right: 0;
    top: 0;
  }
  @media only screen and (max-width: 790px) {
    padding-top: 10px;
    &:after {content: none;}
  }
`
export const NavUl = styled.ul `
  @media only screen and (max-width: 790px) {
    display: block;
  }
`
export const NavLi = styled.li `
  width: 90%;
  padding-bottom: .8rem;
  margin-bottom: 1rem;
  
  &.active {
    border-bottom: 3px solid #009edb;
  }

  &.active a, &:hover a {
    color: #009edb;
  }
  @media only screen and (max-width: 790px) {
    margin: 5px;
    padding: 5px 10px;
    width: auto;
    border: 1px solid;
    border-radius: 15px;
    display: inline-block;
  }
`
export const NavLink = styled(Link)``