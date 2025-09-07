function App() {
  return (
    <div>
      <center class="todo-container">
        <h1>To Do App </h1>
      </center>
      <div class="row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter To Do here"
            class="entry"
          ></input>
        </div>
        <div class="col-4">
          <input type="date" class="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            ADD
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <h2>Buy Milk</h2>
        </div>
        <div class="col-4">
          <h2>4/10/2023</h2>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  );
}
export default App;
