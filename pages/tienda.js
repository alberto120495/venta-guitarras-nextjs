import Layout from "../components/Layout";

function Tienda({ guitarras }) {
  console.log(guitarras);
  return (
    <Layout pagina="Tienda Virtual">
      <div className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();
  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
