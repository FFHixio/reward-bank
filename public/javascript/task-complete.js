async function taskCompleteHandler(event) {
  event.preventDefault();

  const task_id = parseInt(event.target.getAttribute('task_id'));

    fetch(`/api/task-history`, {
      method: 'POST',
      body: JSON.stringify({
        task_id: task_id
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response =>{
      if (response.ok) {
        alert("Task is now pending!");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

document.querySelectorAll('.complete-task-btn').forEach(btn => btn.addEventListener('click', taskCompleteHandler));