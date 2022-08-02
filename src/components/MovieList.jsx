export function MovieList(props) {
    return <section className="results">
        <div className="row">
            {props.movies.map(props.callbackfn)}
        </div>
    </section>;
}