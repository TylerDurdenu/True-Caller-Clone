function SearchResults(params ) {
    return(
        <div>
                    <ol>
                        <li>Name:{params.data.names}</li>
                        <li>Number:{params.data.number}</li>
                        <li>State:{params.data.state}</li>
                        <li>Spam score:{params.data.spamScore}</li>
                    </ol>
        </div>
    )
}
export default SearchResults;