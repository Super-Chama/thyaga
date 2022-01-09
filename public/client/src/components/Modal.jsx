import React from 'react';
import * as ReactModal from 'react-modal';
import IframeResizer from 'iframe-resizer-react'
import Loader from "./Loader";

ReactModal.setAppElement('#thyaga-mp');

const modalStyles = {
    content: {
        overflow: 'unset',
        padding: '5px',
        border: 'unset',
        background: 'unset',
    },
};

const iframeStyles = {
    width: '1px',
    height: '1px',
    minWidth: '100%',
    minHeight: '100%',
    border: 'unset',
};


const Modal = (props) => {

    const [isLoading, setLoading] = React.useState(true);

    function stopLoading() {
        setLoading(false);
    }

    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            contentLabel="Example Modal"
            style={modalStyles}
        >
            {isLoading ? (<Loader />) : null}
            <IframeResizer
                src="https://gracious-hugle-73cebb.netlify.app/"
                style={iframeStyles}
                onLoad={stopLoading}
            />
        </ReactModal>
    )
}

export default Modal
