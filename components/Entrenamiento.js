import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrenamiento.module.css";
function Entrenamiento({ curso }) {
  const { id, nombre, descripcion, imagen, published_at, url } = curso;
  return (
    <article>
      <Image
        priority="true"
        layout="responsive"
        src={imagen.url}
        alt={`Imagen curso ${nombre}`}
        width={800}
        height={600}
      />
      <div className={styles.contenido}>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{descripcion}</p>
        <Link href={`/cursos/${url}`}>
          <a className={styles.enlace}>Ver Curso</a>
        </Link>
      </div>
    </article>
  );
}

export default Entrenamiento;
