import classes from './Home.module.css';
import Card from './../card/Card';

function Home() {
    return (
        <Card className={classes.home}>
            <h3>Hello User. Welcome back!</h3>
        </Card>
    );
}

export default Home;