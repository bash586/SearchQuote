document.addEventListener('DOMContentLoaded',()=>{
// add Quotes to the page //
    const quotesList = document.getElementById('quotes-list');
    
    function addNewQuote(quoteObject){
        const curQuote = quoteObject.quote;
        const newItem = document.createElement('li');
        newItem.className = 'quote';
        newItem.id = `quote${quoteObject.id}`;
        newItem.textContent = curQuote;
        quotesList.append(newItem);
    }

    fetch("https://dummyjson.com/quotes")
    .then(response => response.json())
    .then(data => {

        const allQuotes = data.quotes;

        allQuotes.forEach((quoteObject)=>{addNewQuote(quoteObject)});

    })
    .catch(error => console.error(error));
// filter quotes  //
    const search_btn = document.getElementById('search-btn');
    const search_input = document.getElementById('search-input');
    
    function filterQuotes(target){
        const quoteElements = document.querySelectorAll('.quote');
        quoteElements.forEach((quoteItem)=>{
            let quoteContent = quoteItem.textContent;
            let isWanted = quoteContent.includes(target);
            quoteItem.style.display = (isWanted)? 'block' : 'none' ;
        })
    }
    
    search_btn.onclick = () =>{
        let searchTarget = search_input.value;
        filterQuotes(searchTarget);
    }
})