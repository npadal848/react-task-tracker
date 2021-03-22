// import PropTypes from 'prop-types';
import Button from './../../component/button/Button';

const Header = ({ onClickAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>Add Task</h1>
            <Button onClick={onClickAdd} color={ showAdd ? 'red':'green'} 
                text={ showAdd ? 'Close':'Add'} />
        </header>
    )
}

//it overrriden by parent data if we pass from parent
// Header.defaultProps ={
//     title: 'Hello Props'
// }

//prop title allow title value as string only
// Header.propType={
//     title: PropTypes.string.isRequired
// }
export default Header