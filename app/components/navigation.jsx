import s from './navigation.module.css';
import Link from "next/link"

const links = [{
  label: 'Home',
  route:'/'
},{
label: 'About',
route:'/about',
},{
label:'posts',
route:'/posts',

}]

export function Navigation (){
  return(
    <header className={s.header}>
    <nav>
      <ul className={s.navigation}>
        {links.map(({label, route}) =>(
          <li key={route}>
          <Link href={route}>
            {label}
          </Link>
          </li>
        ))}
      </ul>
    </nav>
    </header>
  )  
}