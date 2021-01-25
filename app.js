
const App = () => {

    const [quote, setQuote] = React.useState('This is my first quote')
    const [author, setAuthor] = React.useState('Unknown Author')

    const fetchQuote = () => {
        setQuote('Brand New Quote');
        setAuthor('New Author')
    }


    return (
        <div id="quote-box">
            <p id="text">{quote}</p>
            <p id="author">{author}</p>
            <button id="new-quote" onClick={fetchQuote}>NEW QUOTE</button>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('app'))