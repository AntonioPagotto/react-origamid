// Function Component
const Button = () => {
    return <button>Comprar</button>;
};

// Class Component
class Button extends React.Component {
    render() {
        return <button>Comprar</button>;
    }
}

// Composição de componentes

const Button = () => {
    return <button>Comprar</button>;
};

const MainNav = () => {
    return (
        <nav>
            <a href="#">Link 1</a>
            <Button />
        </nav>
    );
};

const App = () => {
    return (
        <div>
            <MainNav />
            <Button />
        </div>
    );
};