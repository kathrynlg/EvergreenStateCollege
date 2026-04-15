function useWindowSize() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useLayoutEffect(() => {
        window.addEventListener("resize", resize);
        resize(); 
        return () => window.removeEventListener("resize", resize);
    }, []);
    return [width, height];
}

function App() {
    const [w, h] = useWindowSize();
    return (
        <div>
            Window dimensions: {w} x {h} {}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));