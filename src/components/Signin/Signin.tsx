import React, { Dispatch } from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import { authAction } from "../../actions/index";
import { History } from 'history';

export interface SigninProps {
    handleSubmit: (p: any) => any;
    reset: () => void;
    send: (values: { name: string; password: string }, redir: () => void) => void;
    errorM: string;
    history?: History;
}

const Signin: React.SFC<SigninProps> = ({ handleSubmit, reset, send, errorM, history }: SigninProps) => {

    const renderInput = ({ input, name, type }: any) => {
        return (
            <input {...input} name={name} type={type} />
        );
    };

    const formvalues = (values: { name: string; password: string }) => {
        send(values, () => {
            history?.push("/feature");
        });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(formvalues)}>
            <label htmlFor="email" >Email:</label><br />
            <Field
                name="email"
                type="text"
                component={renderInput}
            /><br />
            <label htmlFor="email" >Password:</label><br />
            <Field
                name="password"
                type="password"
                component={renderInput}
            /><br />
            <div>{errorM}</div>
            <button >Signin</button>
        </form>
    );
}
const mapStateToProps = (state: any) => {
    return {
        errorM: state.auth.errorMessage
    };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        reset: () => dispatch(reset("signin")),
        send: (values: { name: string; password: string }, redir: () => void) => dispatch(authAction(values, redir))
    };
}

export default reduxForm({
    form: "signin"
})(connect(mapStateToProps, mapDispatchToProps)(Signin));