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
    // var display = 0;

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
      const t2 = t.replaceAll(/[^0-9-.+'plus''minus''times''divided by''mod'/*^' '()\n]/g,'');
      const t4 = t2.replaceAll('^','**');
      const t12 = t4.replaceAll('plus','+');
      const t13 = t12.replaceAll('minus','-');
      const t14 = t13.replaceAll('times','*');
      const t15 = t14.replaceAll('divided by','/');
      const t16 = t15.replaceAll('mod','%');
      const t17 = t16.replaceAll(/[^0-9-.+/%*^' '()\n]/g,'');
      const t3 = t17.replaceAll(' ', '\t');

      var arr1 = t3.split('\n');
      var arr2 = [];

      arr1.forEach(searchFunc);
      function searchFunc(obj){
        if(!(obj == '')){
          if(isNaN(obj)){
            try{
              arr2.push(evil(obj.trim()) + "\n");
            }
            catch(err){
              arr2.push(obj.trim());
            }
            
          }
          else{
            arr2.push(obj.trim() + "\n");
          }
        }
        else{
          arr2.push("\n");
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

      const t6 = paramArr;
      const arr3 = t6.split('\n');
      arr3.forEach(myFunction)
      function myFunction(item) {
        if(!(item == '')){
          sum += parseFloat(item);
        }
      }
      return "Total: " + sum.toFixed(2);
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
              placeholder=""
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