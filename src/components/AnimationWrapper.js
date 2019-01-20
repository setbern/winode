import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const AnimationWrapper = ((props) => {

	console.log('AnimationWrapper', props)
    return (
        <CSSTransition
            in={props.in}
            classNames={props.classNames}
            appear={props.appear}
            mountOnEnter={props.mountOnEnter}
            unmountOnExit={props.unmountOnExit}
            timeout={props.timeout}
            onExited={props.onExited}
            onEntered={props.onEntered}
        >
            {props.children}
        </CSSTransition>
    )
})


AnimationWrapper.defaultProps = {
    appear: false,
    in: false,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: 1000,
   
}

AnimationWrapper.propTypes = {
    in: PropTypes.bool.isRequired,
    classNames: PropTypes.string.isRequired,
};

export default AnimationWrapper