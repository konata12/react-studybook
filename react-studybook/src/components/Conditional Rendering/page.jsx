import React from 'react';
import WarningBanner from './warningBanner';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
  
    render() {
        if (!this.props.render) {
            return null;
        }

        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Сховати' : 'Показати'}
                </button>
            </div>
        );
    }
}

export default Page;