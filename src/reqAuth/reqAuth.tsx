import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { History } from 'history';

interface ComposeCompProps {
    authorized: string;
    history?: History;
}

export default (ChildComponent: React.FC<any>) => {

    class ComposeComponent extends Component<ComposeCompProps> {

        componentDidMount() {
            this.redirect();
        }
        componentDidUpdate() {
            this.redirect();
        }
        redirect() {
            if (!this.props.authorized) {
                this.props.history!.push("/");
            }
        }
        render() {
            return (
                <ChildComponent {...this.props} />
            );
        }
    }
    const mapStateToProps = (state: any) => {
        return {
            authorized: state.auth.authentichated
        };
    };

    return connect(mapStateToProps, null)(ComposeComponent);
}