import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";

const initialState ={
  views: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETDATA':
            return {...state, views: action.payload };
        default:
            return state
    }
};

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        // ctx.store.dispatch({type: 'FOO', payload: 'f66o'});
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps, store ,router} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} router={router}/>
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);