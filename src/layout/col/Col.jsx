import './col.scss';
import classNames from 'classnames';

function Col({ children, className, ...rest }) {
    return (
        <div className={classNames('col', className)} {...rest}>
            {children}
        </div>
    );
}

export default Col;