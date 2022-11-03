import './row.scss';
import classNames from 'classnames';

function Row({ children, className, ...rest }) {
    return (
        <div className={classNames('row', className)} {...rest}>
            {children}
        </div>
    );
}


export default Row;