export function ThemeFormular({ formInput }) {
  return (
    <>
      <form onSubmit={formInput}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="text"></input>
        {/* <label htmlFor="firstColor">firstColor</label>
        <input id="firstColor" type="color" name="firstColor"></input>
        <label htmlFor="secondColor">secondColor</label>
        <input id="secondColor" type="color" name="secondColor"></input>
        <label htmlFor="thirdColor">thirdColor</label>
        <input id="thirdColor" type="color" name="thirdColor"></input>
        <label htmlFor="fourthColor">fourthColor</label>
        <input id="fourthColor" type="color" name="fourthColor"></input>*/}
        <button type="submit">Hier dücken</button>
      </form>
    </>
  );
}
