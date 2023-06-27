export default function Home() {
  return (
    <>
      <form action="/api/redirect-with-redirect-function" method="post">
        <p>Redirect with next redirect function</p>
        <button type="submit">Redirect</button>
      </form>
      <form action="/api/redirect-with-nextresponse" method="post">
        <p>Redirect with next response</p>
        <button type="submit">Redirect</button>
      </form>
      <form action="/api/old-redirect" method="post">
        <p>Redirect with old route handlers</p>
        <button type="submit">Redirect</button>
      </form>
    </>
  );
}
