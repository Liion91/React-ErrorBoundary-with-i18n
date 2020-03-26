import React from "react";
import CustomError from './CustomError';
import { withTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            hasCustomError: false,
            error: null,
            info: null
        };
    }

    componentDidCatch(error, info) {
        if (error instanceof CustomError) {
            this.setState({
                hasCustomError: true,
                error: error
            });
        } else {
            this.setState({
                hasError: true,
                error: error
            });
        }
    }

    render() {

        const { t } = this.props;
        const { error, hasError, hasCustomError } = this.state;

        if (hasError || hasCustomError) {

            //version A
            var messagges = [];
            var a = JSON.stringify(error.message);
            var keyI18n = a.replace(/"/g, '');

            messagges.push(t(keyI18n));
            if (keyI18n.includes('1')) {
                messagges.push(t(keyI18n +'2'));
            }

            let items = messagges.map(function (item) {
                return <h4 key={item}>{item}</h4>;
            });

            return (
                items
            )

            //version B
            // var a = JSON.stringify(error.message);
            // var b = a.replace(/"/g, '');
            // if (a.includes('1')) {
            //     return (
            //         <div>
            //             <h1>{t(b)}</h1>
            //             <h1>{t(keyI18n +'2')}</h1>
            //         </div>
            //     )
            // } else {
            //     return (<h1>{t(b)}</h1>)
            // }

        }

        return this.props.children;
    }
}

export default withTranslation()(ErrorBoundary);