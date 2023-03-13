const url = 'https://en.wikipedia.org/w/api/.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

// Boton del  form
formDOM.addEventListener('submit', (e) =>{
  e.preventDefault();
  const value = inputDOM.value;
  if (!value){
    resultsDOM.innerHTML = '<div class="error"> Please enter valid serach term</div>';
    return;
  }
  fetchPage(value);
}
);


const fetchPage = async(searchValue) => {
  resultsDOM.innerHTML = '<div class="loadding"></div>';
  try{
    const response = await fetch('${url}${searchValue}');
    const data = await response.json();
    const results = data.query.search;
    if(resultsDOM.length < 1){
      resultsDOM.innerHTML = '<div class="error">no matching results. Pleas try again</div>';
      return;
    }
    renderResults(results);
  }catch (error){
    resultsDOM.innerHTML = '<div class="error"> there was an error...</div>';
  }
};

const renderResults = (list) => {
  const cardsList = list
  .map((item)=>){
    const {title,snippet,pageid} = item;
    return `<a href=https://en.wikipedia.org/?curid=${pageid} target="_blank">
      <h4>${title}</h4>`
  }
};
