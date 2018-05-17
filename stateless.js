function Link(props) {
    return <a href={props.href} target="_blank" className="btn btn-primary"> {props.text}</a>
}

const Link_ES6 = (props) => {
    return (
        <a href={props.href}
            target="_blank"
            className="btn btn-primary">
            {props.text}
        </a>
    )
}

ReactDOM.render(
    <Link text='Buy React Quickly' href='https://www.manning.com/books/react-quickly' />,
    document.getElementById('content')
)