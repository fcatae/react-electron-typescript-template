
class App extends React.Component<{},{}> {
   render() {
       return <div>Hello World!</div>;
   }
}

function render() {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
