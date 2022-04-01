import Image from "next/image";
import styles from "../../styles/Entrada.module.css";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";

function VerCurso({ curso }) {
  const { nombre, descripcion, published_at, imagen } = curso;

  return (
    <Layout pagina={nombre}>
      <main className="contenedor">
        <h1 className="heading">{nombre}</h1>
        <article className={styles.entrada}>
          <Image
            src={imagen.url}
            width={800}
            height={600}
            layout="responsive"
            alt={`Imagen blog ${nombre}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{descripcion}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const urlAPI = `${process.env.API_URL}/entrenamientos`;
  const respuesta = await fetch(urlAPI);
  const cursos = await respuesta.json();

  const paths = cursos.map((curso) => ({
    params: { url: curso.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlAPI = `${process.env.API_URL}/entrenamientos?url=${url}`;
  const respuesta = await fetch(urlAPI);
  const curso = await respuesta.json();
  return {
    props: {
      curso: curso[0],
    },
  };
}

export default VerCurso;
