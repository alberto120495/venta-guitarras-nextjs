import { useRouter } from "next/router";

function EntradaBlog() {
  const router = useRouter();

  console.log(router.query.id);
  return (
    <div>
      <h1>Entrada blog</h1>
    </div>
  );
}

export default EntradaBlog;
