import { formatearFecha } from "../helpers";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Entrada.module.css";

function Entrada({ entrada }) {
  const { id, titulo, resumen, imagen, published_at, url } = entrada;
  return (
    <article>
      <Image
        priority="true"
        layout="responsive"
        src={imagen.url}
        alt={`Imagen blog ${titulo}`}
        width={800}
        height={600}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
}

export default Entrada;
