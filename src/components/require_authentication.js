import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
    class Authentication extends Component{
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount(){
            if(!this.props.authenticated){
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps){
            console.log('nextProp.authenticated:',nextProps.authenticated);

            if(!nextProps.authenticated){
                this.context.router.push('/');
            }
        }

        render(){
            //console.log('Rendering:',ComposedComponent);
            //console.log('this.props.authenticated:',this.props.authenticated);
            console.log(this.context);
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}


// // In some location.. Not in this file...
// // We want use this HOC
// import Authentication //This is my HOC
// import Resources // This is the Component I want to wrap

// const ComposedComponent = Authentication(Resources);
// //in render method method...
// <ComposedComponent resources={resourceList} />
