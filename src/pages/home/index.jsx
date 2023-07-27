import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

const Home = () => {
    return (<>
        <Header />
        <Button title={'teste1'}></Button>
        <Button title={'teste1'} variant='secondary'>Teste1</Button>
        <Link to="/login">Fazer Login</Link>
    </>
    );
}

export { Home };