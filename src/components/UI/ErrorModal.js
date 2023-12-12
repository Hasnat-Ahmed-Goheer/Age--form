import {React,Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css'
import Card from './Card';
import Button from './Button';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onErrorHandle} />;

}

const Overlay = props => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.errorModal.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorModal.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onErrorHandle}> Okay</Button>
        </footer>
      </Card>
    );
}

const ErrorModal = props => {

    return (
      // <Fragment></Fragment> is the same as the <></> but we have to import Fragment from react otherwise we will have to use React.Fragment
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onErrorHandle={props.onErrorHandle} />,
          document.getElementById("backdrop-root")
        )}
        ;
        {ReactDOM.createPortal(
          <Overlay
            errorModal={props.errorModal}
            onErrorHandle={props.onErrorHandle}
          />,
          document.getElementById("overlay-root")
        )}
      </Fragment>
    );
}

export default ErrorModal;