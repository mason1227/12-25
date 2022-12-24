

import data from "./taiwan.json" assert{type: "json"};
const search = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');



const searchCompany = async searchText =>{
    
    let matches = data["工作表1"].filter(data => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return data["代號"].match(regex) || data["公司"].match(regex);
    });
    if(searchText.length === 0){
        matches = [];
    }
    
    outputHtml(matches);
};
const outputHtml = results => {

    
    console.log(results.length);
    if(results.length <= 10){
        const content = results
            .map((item) => {
        return `<ul>${item["公司"]}</ul>`;
    })
    .join('');
    searchWrapper.classList.add('show');
    //searchWrapper.classList.add("list-items");
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
       
    }
    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }
}
search.addEventListener('keyup', () => searchCompany(search.value));


