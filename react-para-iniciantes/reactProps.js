const Titulo = (props) => {
    return <h1>{props.texto}</h1>;
};

const App = () => {
    return (
        <section>
            <Titulo texto="Meu Primeiro Título" />
            <Titulo texto="Meu Segundo Título" />
        </section>
    );
};

// Multiplas Propriedades

const Titulo = (props) => {
    return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
    return (
        <section>
            <Titulo texto="Meu Primeiro Título" cor="blue" />
            <Titulo texto="Meu Segundo Título" cor="red" />
        </section>
    );
};

// Desestruturação

const Titulo = ({ cor, texto }) => {
    return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
    return (
        <section>
            <Titulo texto="Meu Primeiro Título" cor="blue" />
            <Titulo texto="Meu Segundo Título" cor="red" />
        </section>
    );
};

// Children

const Titulo = (props) => {
    return <h1>{props.children}</h1>;
};

const App = () => {
    return (
        <section>
            <Titulo>Meu Primeiro Título</Titulo>
            <Titulo>
                <p>Título 2</p>
                <p>Título 3</p>
            </Titulo>
        </section>
    );
};

// Rest e Spread

const Input = ({ label, id, ...props }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props} />
        </div>
    );
};

export default Input;



