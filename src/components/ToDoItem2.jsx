function ToDoItem2() {
  let name = "Go To College";
  let date = "4/10/2023";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <h2>{name}</h2>
        </div>
        <div class="col-4">
          <h2>{date}</h2>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
export default ToDoItem2;
