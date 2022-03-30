import Layout from "../components/Layout";
import Listado from "../components/Listado";
function Tienda({ guitarras }) {
  return (
    <Layout pagina="Tienda Virtual">
      <div className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <Listado guitarras={guitarras} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();
  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
