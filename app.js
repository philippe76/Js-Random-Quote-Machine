
const App = () => {

    const [quote, setQuote] = React.useState('Click button below to have brand new quote')
    const [author, setAuthor] = React.useState('Unknown Author')
    const [quoteColor, setQuoteColor] = React.useState('#6495ed')

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'Oswald',
            backgroundColor: quoteColor
        },
        quoteBox: {
            width: '65%',
            backgroundColor: 'whitesmoke',
            padding: '40px 60px',
            borderRadius: '5px'
        },
        quote: {
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginTop: 0,
            color: quoteColor
        },
        author: {
            textAlign: 'right',
            fontSize: '1.3rem',
            color: quoteColor
        },
        buttonDiv: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '4rem'
        },
        tweet: {
            fontSize: '1.5rem',
            color: 'white',
            backgroundColor: quoteColor,
            padding: '0.2rem 1rem',
            borderRadius: '4px',
        },
        newQuote: {
            color: 'white',
            backgroundColor: quoteColor,
            fontSize: '1rem',
            fontWeight: '600',
            wordSpacing: '0.2rem',
            letterSpacing: '0.1rem',
            padding: '1rem',
            borderRadius: '4px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer'
        },
        footer: {
            alignSelf: 'flex-end',
            marginRight: '15rem',
            color: 'white'
        }        
    }
    

    const fetchQuote = () => {
        fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
            .then( response => {
                return response.json()
            })
            .then(data => {
                setQuote(data.quotes[0].text);
                setAuthor(data.quotes[0].author)
            })   
            .catch(err => console.log(err));
        
        fetch('http://api.creativehandles.com/getRandomColor')
            .then( response => {
                return response.json()
            })
            .then(data => {
                setQuoteColor(data.color);
            })   
            .catch(err => console.log(err));
    }


    return (
        <div  style={style.container}>
            <div id="quote-box" style={style.quoteBox}>
                <p id="text" style={style.quote}>" {quote} "</p>
                <p id="author" style={style.author}>- {author} -</p>
                <div style={style.buttonDiv}>
                    <a href="https://twitter.com/intent/tweet"  style={style.tweet}id="tweet-quote" target="_blank" rel="noopener noreferrer" title="Tweet this quote"><i class="fa fa-twitter"></i></a>
                    <button id="new-quote" style={style.newQuote} onClick={fetchQuote}>NEW QUOTE</button>
                </div>
            </div>
            <p style={style.footer}>By Filip</p>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('app'))