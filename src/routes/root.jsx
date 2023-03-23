import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Header from "../components/Header"
import ItemList from "../components/ItemList"
import Stats from '../components/Stats'
import Form from '../components/Form'
import ItemData from '../data/ItemData'
import AboutPage from './AboutPage'


export default function App() {
    const [item,setItem] = useState(ItemData)

    const addItem = (newItem) => {
            newItem.id = uuidv4()
            setItem([newItem, ...item])  
        }

    const deleteItem = (id) => {
        if(window.confirm('Are you sure you want to delete this item?')) {
            setItem(item.filter(
                (item) => item.id !== id 
            ))}}


    return (
        <>
            <Header /> 
            <div className = 'container'> 
                <Form handleAdd = {addItem} />
                <Stats item = {item}/>            
                <ItemList 
                    item = {item} 
                    handleDelete = {deleteItem}/>
            </div>
        </>
    )
} 