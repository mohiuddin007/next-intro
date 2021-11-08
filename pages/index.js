import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list || Home</title>
    </Head>
    <div>
    
         <h1 className={styles.title}>Home page</h1>
         <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat aliquam quo odit, voluptate, asperiores beatae ad fugit omnis accusamus harum ipsam ea cum a repellendus iure suscipit sunt? Fugit ipsum esse neque assumenda omnis, aspernatur iure eligendi, explicabo animi eius delectus similique maxime expedita libero cum quaerat, et nam?</p>
         <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat aliquam quo odit, voluptate, asperiores beatae ad fugit omnis accusamus harum ipsam ea cum a repellendus iure suscipit sunt? Fugit ipsum esse neque assumenda omnis, aspernatur iure eligendi, explicabo animi eius delectus similique maxime expedita libero cum quaerat, et nam?</p>
         <Link href="/ninjas">
           <a className={styles.btn}>See Ninja Listing</a>  
         </Link>
      
    </div>
    </>
  )
}
