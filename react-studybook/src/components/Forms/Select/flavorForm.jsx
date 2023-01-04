import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'кокос' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Ваш улюблений аромат: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        if (!this.props.render) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Оберіть ваш улюблений аромат:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="грейпфрут">Грейпфрут</option>
                        <option value="лайм">Лайм</option>
                        <option value="кокос">Кокос</option>
                        <option value="манго">Манго</option>
                    </select>
                </label>
                <input type="file" />
                <input type="submit" value="Надіслати" />
            </form>
        );
    }
}

export default FlavorForm;