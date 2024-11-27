import { useState } from 'react'
import './App.css'
import Listitem from './components/Listitem'
import { useRef } from 'react'

function App() {
  const [items, setItems] = useState(["Apple", "Banana"])
  const [name, setName] = useState("")
  const [editing, setEditing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const inputRef = useRef(null)

  const deleteItem = (index) => {
    const deleteConfirm = window.confirm("Are you sure you want to delete this content?")
    if (deleteConfirm) {
      const newItem = items.filter((el, i) => {
        return (i != index)
      })
      setItems(newItem)
    } 
  }
  const addItem = () => {
    if (name != "" && name.length > 3) {
      const newItemsAr = [...items, name];
      setItems(newItemsAr);
      setName("");
    }else{
      confirm("Minimum character length is 3")
    }
  }
  const editItem = (index) => {
    setName(items[index])
    setEditing(true)
    setCurrentIndex(index)
    inputRef.current.focus();
  }
  const updateItem = () => {
    if (name != "" && name.length > 3) {
      const updateditems = items.map((el, i) => (i == currentIndex) ? name : el)
      setItems(updateditems)
      setName("")
      setEditing(false)
      setCurrentIndex(null)
    }else{
      confirm("Minimum character length is 3")
    }
  }
  const controlEnter = (e) => {
    if (e.key == "Enter") {
      addItem()
      if (editing == true) {
        updateItem()
      }
    }
  }

  return (
    <div>
      <div className='d-flex gap-2 mb-3'>
        <input className='form-control' onKeyUp={controlEnter} ref={inputRef} onChange={(e) => { setName(e.target.value) }} value={name} type='text' placeholder='New' />
        <button className='btn btn-success' onClick={(editing == true) ? updateItem : addItem}>
          {(editing == true) ? "Save" : "Add"}</button>
      </div>
      <table className="table table-bordered" style={{ width: "900px" }}>
        <thead>
          <tr>
            <th scope="col" style={{backgroundColor:"grey",color:"white"}}>Index No.</th>
            <th scope="col" style={{backgroundColor:"grey",color:"white"}}>Fruits</th>
            <th scope="col" style={{backgroundColor:"grey",color:"white"}}>Action/Buttons</th>

          </tr>
        </thead>
        <tbody>
          {
            items.map((el, i) => {
              return (
                <Listitem deleteItem={deleteItem} editItem={editItem} item={el} key={i} index={i} />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
