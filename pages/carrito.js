import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import Image from "next/image";

function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => {
      return total + producto.cantidad * producto.precio;
    }, 0);
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout pagina="Carrito de compras" carrito={carrito}>
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={480}
                      src={producto.imagen}
                      alt={`Imagen ${producto.nombre}`}
                    />
                  </div>

                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>

                      <select
                        name=""
                        id=""
                        value={producto.cantidad}
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: e.target.value,
                            id: producto.id,
                          })
                        }
                        className={styles.select}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $ <span> {producto.precio}</span>{" "}
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: ${" "}
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    className={styles.eliminar}
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>
          <h3>Resumen del pedido</h3>

          {total > 0 ? (
            <>
              <p>Resumen del Pedido</p>
              <p>Total a pagar: ${total}</p>
            </>
          ) : (
            <h3>No hay pedidos en el carrito</h3>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Carrito;
