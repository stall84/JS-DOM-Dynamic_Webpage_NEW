//*****************************************************************************************************************************************************************************************************************
//*************************** 2nd attempt at dynamic-website using methods Alex showed us during class 2/25. ******************************************************************************************************
//*************************** Will use bootstrap CDN to make styling easier and functions to wrap *****************************************************************************************************************
//*************************** the different portions of the web page **********************************************************************************************************************************************
//*****************************************************************************************************************************************************************************************************************


// grab the only container hard-coded in the html to start work inside the document
const mainContainer = document.getElementById('container');
//mainContainer.classList.add('container','row');

// attach the function that will create the header to the mainContainer div
mainContainer.appendChild(createHeader());

mainContainer.appendChild(heroMaker());

mainContainer.appendChild(postMaker());

// In this method we will be wrapping everything in functions to make them available immediately and for usability later on if needed
// Also instead of separating building parts of the code and then appending parts of the code. We will simply code things out 
// as they would linearly arise on the page

function createHeader() {

    // create the container div for the 'header' section
    const headerContainer = document.createElement('div');
    // add boostrap styling classes to our headerContainer div
    headerContainer.classList.add('row', 'align-items-center', 'mt-4');
    // add inline styling to headerContainer
    headerContainer.style.color = 'white';
    headerContainer.style.backgroundColor = '#57a9f7';
    headerContainer.style.padding = '2em';
    headerContainer.style.margin = '2.1em';
    //headerContainer.style.margin = '1em';
    

    

    // nav title 
    const pageTitle = document.createElement('h1');
    // using innerText method instead of createTextNode
    pageTitle.innerText = "HighOnCoding";
    pageTitle.style.fontSize = "3.1em";
    headerContainer.appendChild(pageTitle);

    // nav links 
    const linksList = document.createElement('div');
    linksList.style.fontSize = "1.35em";
    const homeLink = document.createElement('a');
    const catsLink = document.createElement('a');
    // create inner HTML with anchor tag and placheholder link. override default styling colors for links
    homeLink.innerHTML = '<a style="color:white"href="#Home">Home</a>';
    // various stylings to try and separate the two link elements, and remove default link styling (underline/blue) using relative elements for speed
    homeLink.style.marginLeft = '4em';
    catsLink.innerHTML = '<a style="color:white"href="#Cats">Categories</a>';
    catsLink.style.marginLeft = '3em';
    linksList.appendChild(homeLink);
    linksList.appendChild(catsLink);
    headerContainer.appendChild(linksList);

    return headerContainer;
};

// Create the (static/no parameters) function that will make the hero-section of the page. This won't be changeable like the review/posts will be below

function heroMaker() {
    // create container div for the hero content
    const heroContainer = document.createElement('div');
    // add bootstrap classes to hero container just created
    heroContainer.classList.add('container', 'row', 'm-auto');
    heroContainer.style.backgroundColor = '#dddee0';
    const heroH1 = document.createElement('h1');
    const heroPara = document.createElement('p');
    // add text content and specific (inline) stylings to the elements created
    heroH1.innerText = 'Curse of the Current Reviews';
    heroH1.style.color = '#53585e';
    heroH1.style.padding = '.2em';
    heroPara.innerText = 'When you buy an application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews';
    heroPara.style.marginTop = '.5em';
    heroPara.style.paddingLeft = '.4em';
    
    heroContainer.appendChild(heroH1);
    heroContainer.appendChild(heroPara);

    return heroContainer;
}



// We will create a single function that can/will be used to make the posts section(s), since they will all use the same 
// formats and stylings, just different content added.

function postMaker(title, body, amtComments, amtLikes) {

    // like before create overarching div/container
    const postContainer = document.createElement('div');
    // bootstrap style it by adding classes
    postContainer.classList.add('container','row','m-2');
    // create the post title element
    const postTitle = document.createElement('h2');
    // space reserved for styling post title
    // point the postTitle to the title parameter given by user as input
    postTitle.innerText = title;
    // append the title to the post container
    postContainer.appendChild(postTitle);
    
    // create main body of post/review
    const postBody = document.createElement('p');
    // space reserved to style paragraph
    // point postBody to parameter input for the actual text of post
    postBody.innerText = body;
    // append body portion to the main post container
    postContainer.appendChild(postBody);

    // create comments/likes 'bar' div
    const feedbackBar = document.createElement('div');
    feedbackBar.classList.add('row');
    // space reserved for styling comments bar
    // create comments span
    const comments = document.createElement('span');
    //styling for comments
    // Using inner HTML method we pull in the parameter of comments then use string concat with word 'comments'
    comments.innerHTML = amtComments + ' comments';
    // attach to feedback bar
    feedbackBar.appendChild(comments);
    const likes = document.createElement('span');
    likes.innerHTML = amtLikes + ' likes';
    feedbackBar.appendChild(likes);
    postContainer.appendChild(feedbackBar);

    return postContainer





}