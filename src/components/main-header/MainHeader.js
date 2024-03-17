
import classes from './MainHeader.module.css';
import Navigation from './Navigation';

function MainHeader(props) {
    return (
        <header className={classes['main-header']}>
            <h1>Demo Project</h1>
            <Navigation></Navigation>
        </header>
    );
}

export default MainHeader;