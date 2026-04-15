// Create our hello world component
function HelloWorld(){
    return(
        <div>
            <h1>Hello World!</h1>
            <h2>Header2</h2>
            <section id="sect1">
            <p>stuff goes here</p>
            </section>
            <section id="sect2">
            <p>more stuff here too</p>
            </section>
        </div>
    );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<HelloWorld />, rootElement);