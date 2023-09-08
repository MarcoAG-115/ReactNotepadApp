import {BiSearch} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'

import NoteItem from '../components/NoteItem'
import { useState } from 'react';
import { useEffect } from 'react';

const Notes = ({notes}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
                return note;
            }
        }))
    }

    useEffect(handleSearch, [text])

    return (
        <section>
            <header className="notes__header">
                {!showSearch && <h2>GeekPad</h2>}
                {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder='Keyword...' />}
                <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> : <BiSearch/>}</button>
            </header>
            <div className="notes__container">
                {filteredNotes.length == 0 && <p className='empty__notes'>Note notes found.</p>}
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note= {note}/>)
                }
            </div>
            <Link to="/create-calc-note" className='btn add__btn'><BsPlusLg/></Link>
            {/* vvv new stuff vvv*/}
            {/* <Link to="/create-calc-note" className='btn calc__btn'><BsPlusLg/></Link> */}
            {/* ^^^new stuff^^^ */}
        </section>
    )
}

export default Notes