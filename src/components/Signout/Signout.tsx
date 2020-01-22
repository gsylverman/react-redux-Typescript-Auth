import React, { useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import { AUTH_USER } from '../../actions/types';

export interface SignoutProps {
    logout: () => void;
}

const Signout: React.SFC<SignoutProps> = ({ logout }) => {

    useEffect(() => {
        localStorage.removeItem("token");
        logout();
    });

    return (
        <div>
            Bye
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        logout: () => dispatch({ type: AUTH_USER, payload: "" })
    }
};

export default connect(null, mapDispatchToProps)(Signout);