import styles from './brand.module.scss'
import Image from 'next/image'
import logo from './logo.svg'

const Brand = (props) => {
    return <>
        <Image className={styles.brandLogo} src={logo} alt="WordPress Logo" width={props.brandWidth} height={props.brandHeight} />{' '}
        <h1 className={styles.brandName}>React Bootstrap</h1>
        <h2 className={styles.brandSlogan}>React Bootstrap</h2>
    </>;
};

export default Brand;
