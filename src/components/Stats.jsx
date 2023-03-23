import PropTypes from 'prop-types'

function Stats({item}) {
    // Calculate ratings average

    let average = item.reduce(
        (acc,cur) => {
            return acc + cur.rating
        },0)/item.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className = 'item-stats'>
        <h4>{item.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

Stats.propTypes = {
  item: PropTypes.array.isRequired
}

export default Stats