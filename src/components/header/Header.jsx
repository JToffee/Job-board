import AuthButtons from "./AuthButtons.jsx";
import Logo from "./Logo";
import Navbar from './Navbar.jsx'

export default function Header(){

    return(
        <header>
        <Logo></Logo>
        <Navbar></Navbar>
        <AuthButtons></AuthButtons>
        </header>
    )
}