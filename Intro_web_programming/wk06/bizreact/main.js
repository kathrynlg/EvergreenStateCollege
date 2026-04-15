function App(){
    return(
        <div>
            <header>
                <h1>welcome to our business</h1>
                <h2>your success is our mission</h2>
            </header>
            <section>
                <h2>Services</h2>
                <ul>
                    <li>Consulting</li>
                    <li>Development</li>
                    <li>Marketing</li>
                </ul>
            </section>
            <section>
                <h2>Contact us</h2>
                <p>Email: Contact@us.com</p>
                <p>123-234-1234</p>
            </section>
            <footer>
                <p>&copy; 2025 our biz. all rights reserved</p>
            </footer>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);