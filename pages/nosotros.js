import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";
function Nosotros() {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            layout="responsive"
            width={600}
            height={450}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit officia, consectetur fuga nobis eligendi sed velit
              repellat possimus laudantium molestiae quaerat doloribus
              cupiditate doloremque qui amet quo, architecto odio nemo?
              Reiciendis veritatis exercitationem temporibus deserunt velit ipsa
              laudantium similique rerum fugiat cupiditate sed eaque adipisci,
              perferendis voluptas sint eius ullam. Aspernatur explicabo aliquam
              nulla, dolores totam repellendus sapiente rem libero!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit officia, consectetur fuga nobis eligendi sed velit
              repellat possimus laudantium molestiae quaerat doloribus
              cupiditate doloremque qui amet quo, architecto odio nemo?
              Reiciendis veritatis exercitationem temporibus deserunt velit ipsa
              laudantium similique rerum fugiat cupiditate sed eaque adipisci,
              perferendis voluptas sint eius ullam. Aspernatur explicabo aliquam
              nulla, dolores totam repellendus sapiente rem libero!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Nosotros;
