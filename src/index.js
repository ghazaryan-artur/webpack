import User from './js/User';
import './styles/styles.less';



  
const user = new User();

const html = user.render();
document.body.innerHTML = html;