import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function Form({handleAdd}) {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === '' ) {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10 ) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10) {
            const newItem = {
                text,
                rating,
            }
        
        handleAdd(newItem)
        setText('')
        } 
    }
         


  return (
    <Card>
        <form onSubmit = {handleSubmit}>
            <h2>Enter respondant age here. Not sure what we need to enter here. </h2>
            <RatingSelect select={(rating) => setRating(rating)} selected = {rating} />
            <div className="input-group">
                <input 
                    onChange = {handleTextChange}
                    type="text" 
                    placeholder = 'write something here'
                    value = {text} 
                />
                <Button 
                    type='submit'
                    isDisabled={btnDisabled}>
                    Submit
                    </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default Form