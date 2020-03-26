import React from "react";
import CustomError from './CustomError';

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.error = null;

        this.handleCustomErrorClick = this.handleCustomErrorClick.bind(this);
        this.handleNormalErrorClick = this.handleNormalErrorClick.bind(this);
    }

    handleCustomErrorClick() {
        this.error = new CustomError("prova");
        this.forceUpdate();
    }

    handleNormalErrorClick() {
        this.error = new Error("prova1");
        this.forceUpdate();
    }

    render() {

        if (this.error !== null) {
            throw this.error;
        }
        return (
            <div>
                <h1>Throw some errors</h1>
                <button onClick={this.handleCustomErrorClick}>Throw Custom Error</button>
                <button onClick={this.handleNormalErrorClick}>Throw Normal Error</button>
            </div>
        )
    }
}
export default Test;