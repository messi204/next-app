import NavBar from './NavBar';
import classes from './Layout.module.css';

const Layout =(props)=> {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;