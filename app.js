
const App = () => {

    const [quote, setQuote] = React.useState('This is my first quote')
    const [author, setAuthor] = React.useState('Unknown Author')

    const fetchQuote = () => {
        fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
            .then( response => {
                return response.json()
            })
        .then(data => {
            setQuote(data.quotes[0].text);
            setAuthor(data.quotes[0].author)
        })   
        .catch(err => console.log(err))    
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