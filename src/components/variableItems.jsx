import AcesItem from './acesItem'
import Card from './shared/Card'

function VariableList({acesvariables}) {
  
  return (

    <Card>
        <div className = 'item-list'>
            {Object.values(acesvariables[0]).map ((x) => (
                <div key = {x}>
                    {x}
                </div>     
                ))}
        </div>
    </Card>


    )
  }  
  
export default VariableList