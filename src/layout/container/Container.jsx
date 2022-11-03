import './container.scss';
import classNames from 'classnames';

function Container({ children, className, ...rest }) {
    return (
        <div className={classNames('container', className)} {...rest}>
            {children}
        </div>
    );
}

export default Container;