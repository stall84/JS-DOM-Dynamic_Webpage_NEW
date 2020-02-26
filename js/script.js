//*****************************************************************************************************************************************************************************************************************
//*************************** 2nd attempt at dynamic-website using methods Alex showed us during class 2/25. ******************************************************************************************************
//*************************** Will use bootstrap CDN to make styling easier and functions to wrap *****************************************************************************************************************
//*************************** the different portions of the web page **********************************************************************************************************************************************
//*****************************************************************************************************************************************************************************************************************


// grab the only container hard-coded in the html to start work inside the document
const mainContainer = document.getElementById('container');

// attach the function that will create the header to the mainContainer div
mainContainer.appendChild(createHeader());

// In this method we will be wrapping everything in functions to make them available immediately and for usability later on if needed

function createHeader() {

    // create the container div for the 'header' section
    const headerContainer = document.createElement('div');
    // add boostrap styling classes to our headerContainer div
    headerContainer.classList.add('row', 'align-items-center', 'mt-4');
    // add inline styling to headerContainer
    headerContainer.style.color = 'white';
    headerContainer.style.backgroundColor = '#57a9f7';
    headerContainer.style.padding = '2em';
    headerContainer.style.margin = '2em';
    

    

    // nav title 
    const pageTitle = document.createElement('h1');
    pageTitle.innerText = "HighOnCoding";
    headerContainer.appendChild(pageTitle);

    // nav links 
    const linksList = document.createElement('div');
    const homeLink = document.createElement('a');
    const catsLink = document.createElement('a');
    //homeLink.innerText = 'Home';
    homeLink.innerHTML = '<a href="#Home">Home</a>';
    homeLink.style.margin = '2em';
    catsLink.innerText = 'Categories';
    linksList.appendChild(homeLink);
    linksList.appendChild(catsLink);
    headerContainer.appendChild(linksList);

    return headerContainer;
};