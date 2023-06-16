import { BrowserRouter } from 'react-router-dom';
import Router from '~/app/router/router';

const App = (): JSX.Element => {
    return (
        <BrowserRouter basename={`/`}>
            <Router />
        </BrowserRouter>
    );
};

export default App;
