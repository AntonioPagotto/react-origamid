function App() {
    return <div id="container">Meu App</div>;
}
// É transformado em:
function App() {
    return React.createElement('div', { id: 'container' }, 'Meu App');
}