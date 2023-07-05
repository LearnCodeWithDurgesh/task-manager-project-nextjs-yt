async function takeTime() {
  await new Promise((resvole) => {
    setTimeout(resvole, 3000);
  });
}

export default async function About() {
  await takeTime();
  // throw new Error("this is manual error");
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
