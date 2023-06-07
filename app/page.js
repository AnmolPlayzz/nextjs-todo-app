'use client';
import Image from 'next/image'
import styles from './page.module.css'
import {useState, useEffect} from "react";

function Task({ text, selected, onSelect}) {
    let classname;
    if (selected) {
        classname = styles.selected
    } else {
        classname = ""
    }
    return (
        <div onClick={onSelect} className={`${styles.task} ${classname}`}>
              <i className={styles.checkbox}></i>
              <label>{text}</label>
        </div>
    )
}

export default function Home() {

    const [items,setItems]=useState([
        {id: 1, item: "item 1", done: false},
        {id: 2, item: "item 2", done: true}])
    useEffect(() => {
        const data = window.localStorage.getItem('TASKS');
        if ( data !== null ) setItems(JSON.parse(data));
    }, []);
        
    useEffect(() => {
        window.localStorage.setItem('TASKS', JSON.stringify(items));
    }, [items]);
    function setItm(itm, id) {
        const i = itm.slice()
        if(itm[id-1].done) {
            i[id-1].done=false
        } else {
            i[id-1].done=true
        }
        console.log(i)
        setItems(i)
    }
    return (
        <main className={styles.main}>
            {items.map(e => {
                return (<Task key={e.id} text={e.item} selected={e.done} onSelect={() => setItm(items,e.id)} />)
            })}
        </main>
    )
}
