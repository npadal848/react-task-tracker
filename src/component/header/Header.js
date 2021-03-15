// import PropTypes from 'prop-types';
import Button from './../../component/button/Button';
const Header = ({title}) => {

    const fetchData = () => {
        console.log('Fetch button click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={fetchData} color='green' text='Fetch' />
            <Button color='green' text='Submit' />
            
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