import { useRouter } from 'next/router'
import { NextPage } from "next"
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'


const ImagePage: NextPage = () =>{
    const router = useRouter()
    
    const res: any = router.query.res;
    let height = Number(res.split('x')[1])
    let width = Number(res.split('x')[0])

    let scale = 1;

    if (height > 922){
        scale = 922/height;
        height = 922;
        width = width * scale
    }
    return (
    <div className={styles.black}>
        <div
        className={styles.back}
        >
        <Link
        href="/"
        >
            <h1 className={styles.linkWhite}>X</h1>
            
        </Link>
        </div>

        
        <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
        >
            <Image
                src={'/assets/'+router.query.slug}
                height={height}
                width={width}
            ></Image>
        </div>

        <div className={styles.info}>
        <h4 id="name">{router.query.slug}</h4>
        <h5 id="date">{router.query.date}</h5>
        <div className={styles.link}>
        <Link
        href={'/assets/'+router.query.slug}>
            Original image
        </Link>
        </div>

        </div>
    </div>

    )
}


// To not lose query when refresh, Idk why but it works, 
export async function getServerSideProps() {
    return {
      props: {}, // will be passed to the page component as props
    };
}

export default ImagePage