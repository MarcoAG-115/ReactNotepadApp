import { Link, useNavigate } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react';
import {v4 as uuid} from 'uuid'

import useCreateDate from "../components/useCreateDate";

const CreateCalcNote = ({setNotes}) => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const date = useCreateDate();
    const navigate = useNavigate();
    var sum = 0;

    const handleSubmit = (e) => {
      e.preventDefault();

      if(title && details) {
        const note = {id: uuid(), title, details, date}
        // add this note to the Notes array
        setNotes(prevNotes => [note, ...prevNotes])

        // redirect to home page
        navigate('/')
      }
      
    }

    const handleSum = () => {

      const temp = details;
      const temp2 = temp.replaceAll(/[^0-9,-.\n" "]/g,'');
      const temp3 = temp2.replaceAll(/\n/g, ' ');
      temp3.replaceAll(/[^0-9" ".]/g,'');
      console.log(temp3);
      
      const arr = temp3.split(' ');
      console.log(arr);

      arr.forEach(myFunction)
      function myFunction(item) {
        sum += parseInt(item,10);
      }

      return sum;
    }

    return (
       <section>
          <header className="create-note__header">
            <Link to="/" className="btn"><IoIosArrowBack/></Link>
            <button className="btn lg primary" onClick={handleSubmit}>Save</button>
          </header>
          <form className="create-calc-note__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus/>

            <div class="inline-div">
            <textarea className="create-calc-note__textarea1" rows="20" cols="20" placeholder="Calculations..." value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </div>
            {/* <textarea className="create-calc-note__textarea2" rows="28" placeholder="be boop be..." value={details} onChange={(e) => setDetails(e.target.value)}></textarea> */}
            <div class="inline-div">
            <textarea
              readOnly 
              className="create-calc-note__textarea2" 
              rows="20" 
              cols="20" 
              placeholder="be boop be..."
              value={details.replaceAll(/[^0-9,-.\n" "]/g,'')}
            ></textarea>
            {/* <textarea readOnly className="create-calc-note__textarea2" rows="20" cols="20" placeholder="be boop be..." type="text" value={details} onChange={handleChange}></textarea> */}
            </div>
            <div>
              <textarea 
              readOnly
              className="btn__secondary"
              value={handleSum()}
              ></textarea>
            </div>
      
          </form>
       </section> 
    )
}

export default CreateCalcNote