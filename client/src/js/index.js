// import modules
import "./form";
import "./submit";

//import css files
import "../css/index.css"
import { Tooltip, Toast, Popover } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from  '../images/dog.png';
import Avatar from '../images/avatar.png'



window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
    document.getElementById('avatar').src = Avatar;

})