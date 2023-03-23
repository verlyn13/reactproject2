import {motion, AnimatePresence} from 'framer-motion'
import Item from './Item'
import PropTypes from 'prop-types'

function ItemList({item, handleDelete}) {
  // console.log(item)
  if (!item  || item.length===0) {
    return <p>No items selected</p>

  }
  
  return (

    <div className = 'item-list'>
      <AnimatePresence>
        {item.map ((respondant) => (
            <motion.div 
                key={respondant.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
              <Item 
                key={respondant.id} 
                item={respondant} 
                handleDelete={handleDelete}/>
             </motion.div>  
          ))}
      </AnimatePresence>  
    </div>
    )
  }  
  
  // Version without the animation
  // return (
  //   <div className = 'item-list'>
  //     {item.map ((respondant) => (
  //         <Item 
  //           key={respondant.id} 
  //           item={respondant} 
  //           handleDelete={handleDelete}
  //           />
  //       ))}
  //   </div>
  //   )
  // }

ItemList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }

    )
  )
}
export default ItemList