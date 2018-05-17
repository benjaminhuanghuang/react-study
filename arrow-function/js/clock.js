
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        // Set init state
        this.state = { currentTime: new Date().toLocaleString() };
    }

    launchClock() {
        // arrow get the current value of this, the Clock object
        setInterval(() => {
            console.log('Updating time...');
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
    }

    launchClock_2() {
        setInterval(function () {
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }.bind(this), 1000); // manual bind this
    }

    launchClock_error() {
        setInterval(function () {
            this.setState({ // TypeError: this.setState is not a function
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
    }

    render() {
        console.log('Rendering Clock...');
        return React.createElement(
            'div',
            null,
            this.state.currentTime
        );
    }
}