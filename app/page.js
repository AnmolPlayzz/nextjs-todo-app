'use client';
import Image from 'next/image'
import styles from './page.module.css'
import {useState} from "react";

function Task({text, selected, onSelect}) {
    let classname;
    if (selected) {
        classname = styles.selected
    } else {
        classname = ""
    }
    return (
        <div onClick={} className={`${styles.task} ${classname}`}>
              <i className={styles.checkbox}></i>
              <label>{text}</label>
        </div>
    )
}

export default function Home() {
    const items=[
        {id: 1, item: "item 1", done: false},
        {id: 2, item: "item 2", done: true}]
    return (
        <main className={styles.main}>
            {items.map(e => {
                return (<Task text={e.item} selected={e.done} />)
            })}
        </main>
    )
}
