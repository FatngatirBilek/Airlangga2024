import React from "react";
import styles from "../foto.module.css";
import Image from "next/image";
import Paslon1 from "/public/images/paslon1.png";
import Paslon2 from "/public/images/paslon2.png";
import Paslon3 from "/public/images/paslon3.png";

const Foto = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card__container}>
        <article className={styles.card__article}>
          <Image src={Paslon1} alt="image" className={styles.card__img} />

          <div className={styles.card__data}>
            <span className="card__description">PASLON 1</span>
            <h2 className={styles.card__title}>Mukhlis Rizalul</h2>
            <h2 className={styles.card__title}>Askana</h2>
          </div>
        </article>

        <article className={styles.card__article}>
          <Image src={Paslon2} alt="image" className={styles.card__img} />

          <div className={styles.card__data}>
            <span className={styles.card__description}>PASLON 2</span>
            <h2 className={styles.card__title}>Alifah</h2>
            <h2 className={styles.card__title}>Brigita Embun</h2>
          </div>
        </article>

        <article className={styles.card__article}>
          <Image src={Paslon3} alt="image" className={styles.card__img} />

          <div className={styles.card__data}>
            <span className={styles.card__description}>PASLON 3</span>
            <h2 className={styles.card__title}>Brigita Nayla</h2>
            <h2 className={styles.card__title}>Alisha Najwa</h2>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Foto;
