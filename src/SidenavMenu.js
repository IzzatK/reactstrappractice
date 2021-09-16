import React, {Component} from 'react';
import './SidenavMenu.css'

export default class SidenavMenu extends Component {
    render() {
        return (
            <nav class ="navbar bg-success" id="sidenavbar" >
<ul class ="nav navbar-nav" id="sidenavbar">
<li class ="nav-item">
<a class ="nav-link" href="#"> Home </a>
</li>
<li class ="nav-item">
<a class ="nav-link" href="#"> Services </a>
</li>
<li class ="nav-item">
<a class ="nav-link" href="#"> Contact </a>
</li>
<li class ="nav-item">
<a class ="nav-link" href="#"> Blogs </a>
</li>
</ul>
</nav>
        )
    }
}