// import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
// import PropTypes from 'prop-types'

function AcesItem({acesitem}) {

    return (
        <Card>
            <div className = 'text-display'>{acesitem.timestamp}</div>
            <div className = 'text-display'>{acesitem.heardOfAces}</div>
            <div className = 'text-display'>{acesitem.familiarWithAces}</div>
        </Card> 
  )
}

// Item.propTypes = {
//     item: PropTypes.object.isRequired,
// }
export default AcesItem