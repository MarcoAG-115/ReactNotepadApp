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
    var display = 0;

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

    //Takes inputs & performs maths in real time on the left side
    const handleCalculation = () => {
      const t = details;
      const t2 = t.replaceAll(/[^0-9-.+-/*' '\n]/g,'');
      const t3 = t2.replaceAll(' ', '\n');

      var arr1 = t3.split(/\n/g);
      var arr2 = [];

      arr1.forEach(searchFunc);
      function searchFunc(obj){
        if(!(obj == '')){
          if(isNaN(obj)){
            try{
              arr2.push(evil(obj) + "\n");
            }
            catch(err){
              arr2.push(obj);
            }
            
          }
          else{
            arr2.push(obj + "\n");
          }
        }
      }
      function evil(fn){
        return new Function('return ' + fn)();
      }

      let t9 = "";
      arr2.forEach(concatFunc);
      function concatFunc(stuff){
        if(!(stuff == '')){
          t9 = t9 + stuff;
        }
      }
      
      return t9;
    }

    // Takes input, gets only the numbers, converts them to numbers, & finds sum
    const handleSum = (paramArr) => {

      // const temp = details;
      // const temp2 = temp.replaceAll(/[^0-9,-.+-/*\n" "]/g,'');
      // const temp3 = temp2.replaceAll(/\n/g, ' ');
      // const temp4 = temp3.replaceAll(',', '');
      // temp4.replaceAll(/[^0-9" ".]/g,'');
      // console.log(temp4);
      
      // const arr = temp4.split(' ');
      // console.log(arr);

      // arr.forEach(myFunction)
      // function myFunction(item) {
      //   if(!(item == '')){
      //     sum += parseFloat(item);
      //   }
        
      // }

      // return sum;

      const t6 = paramArr;
      const arr3 = t6.split('\n');
      arr3.forEach(myFunction)
      function myFunction(item) {
        if(!(item == '')){
          sum += parseFloat(item);
        }
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

            {/* Mirrors left side, but only numbers & certain related characters */}
            <div class="inline-div">
            <textarea
              readOnly 
              className="create-calc-note__textarea2" 
              rows="20" 
              cols="20" 
              placeholder="be boop be..."
              // value={details.replaceAll(/[^0-9,-.\n" "]/g,'')}
              value={handleCalculation()}
            ></textarea>
            </div>

            {/* Shows total at bottom of screen */}
            <div>
              <textarea 
              readOnly
              className="btn__secondary"
              value={handleSum(handleCalculation())}
              ></textarea>
            </div>
      
          </form>
       </section> 
    )
}

export default CreateCalcNote