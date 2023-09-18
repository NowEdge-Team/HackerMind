
import PropTypes from 'prop-types';


const BodyLayout = ({ children }) => <div className='w-full bg-amber-700' >
    {children}
</div>


BodyLayout.propTypes = {
    children: PropTypes.node,
    __TYPE: PropTypes.string,
};

BodyLayout.defaultProps = {
    __TYPE: 'BodyLayout',
    className: ""
};


export default BodyLayout;
