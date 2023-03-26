// import {motion, AnimatePresence} from 'framer-motion'
import AcesItem from './acesItem'
// import PropTypes from 'prop-types'

function AcesItemList({acesitems}) {
  // console.log(item)
  if (!acesitems  || acesitems.length===0) {
    return <p>No items selected</p>

  }
  
  return (

    <div className = 'item-list'>
      {/* <AnimatePresence> */}
        {acesitems.map ((respondant) => (
            // <motion.div 
            //     key={respondant.id}
            //     initial={{ opacity: 0 }}
            //     animate={{ opacity: 1 }}
            //     exit={{ opacity: 0 }}>
              <AcesItem 
                key={respondant.timestamp} 
                item={respondant} 
                // handleDelete={handleDelete}
                />
            //  </motion.div>  
          ))}
      {/* </AnimatePresence>   */}
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

// ItemList.propTypes = {
//   item: PropTypes.arrayOf(
//     PropTypes.shape({
//       // id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     }

//     )
//   )
// }


export default AcesItemList