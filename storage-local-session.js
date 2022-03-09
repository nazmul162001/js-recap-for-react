const addToLocalStorage = () => {
  // get input id 
  const idInput = document.getElementById('storage-id');
  const id = idInput.value;
  // get input value
  const valueInput = document.getElementById('storage-value');
  const value = valueInput.value;

  // set id & value to local storage 
  // also check conditio for empty input
  if(id && value){
      localStorage.setItem(id, value);
  }

  // empty input 
  idInput.value = '';
  valueInput.value = '';

} 

// all file added to pdf