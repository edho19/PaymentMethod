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
`
export const NavUl = styled.ul ``
export const NavLi = styled.li `
  width: 90%;
  padding-bottom: .8rem;
  margin-bottom: 1rem;
  
  &.active, &:hover {
    border-bottom: 3px solid #009edb;
  }

  &.active a, &:hover a {
    color: #009edb;
  }
`
export const NavLink = styled(Link)``