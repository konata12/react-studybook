import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Будь ласка, напишіть твір про ваш улюблений елемент DOM.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Твір, що було надіслано: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        if (!this.props.render) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Твір:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Надіслати" />
            </form>
        );
    }
}

export default EssayForm;