import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        console.dir(event.target)
        console.dir(event.target.value)
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        alert('Ім\'я, що було надіслано: ' + this.state.value);
    }
  
    render() {
        if (!this.props.render) {
            return null;
        }
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ім'я:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Надіслати" />
            </form>
        );
    }
}

export default NameForm;