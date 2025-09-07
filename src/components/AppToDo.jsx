function AppToDo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter To Do here"
            class="entry my-input"
          ></input>
        </div>
        <div class="col-4">
          <input type="date" class="date my-input"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success my-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppToDo;
