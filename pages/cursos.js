import Layout from "../components/Layout";
import ListadoCursos from "../components/ListadoCursos";

function Cursos({ cursos }) {
  return (
    <Layout pagina="Cursos">
      <main className="contenedor">
        <ListadoCursos cursos={cursos} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/entrenamientos`;
  const respuesta = await fetch(url);
  const cursos = await respuesta.json();
  return {
    props: {
      cursos,
    },
  };
}

export default Cursos;
