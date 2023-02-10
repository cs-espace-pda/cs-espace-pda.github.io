var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// Array for each reference card of innerHTML code (as String)
var saveInnerHTMLReferenceCards = null

// Array for each reference card of domains associated (as array)
var saveDomainsReferenceCards = null

// Array for each program of innerHTML code (as String)
var saveInnerHTMLPrograms = null

/**
 * saveInitialState
 *   Make a save of :
 *      HTML content for each reference card => saveInnerHTMLReferenceCards
 *      Domains associated for each reference card => saveDomainsReferencesCards
 */
var saveInitialState = function() {
    // Get all div reference card in page
    var divsInPage = $(".card-common")

    saveInnerHTMLReferenceCards = []
    // Save all innerHTML in order to retreive them when display
    for (var i=0;i<divsInPage.length;i++) {
        saveInnerHTMLReferenceCards.push(divsInPage[i].innerHTML)
    }

    var domainsInPage = $(".card-common").children("input")
    saveDomainsReferenceCards = []
    for (var i=0;i<domainsInPage.length;i++) {
        saveDomainsReferenceCards[i] = domainsInPage[i].value.split(",").map(element => element.trim())
    }

    // save all h3 programs
    var programsInPage = $(".program")
    saveInnerHTMLPrograms = []
    for (var i=0;i<programsInPage.length;i++) {
        saveInnerHTMLPrograms.push(programsInPage[i].innerHTML)
    }
}

/**
 * Apply a filter with domain selected
 * @param {*} select DOM Objet for select box
 * 
 * The principle of this function for hiding/showing reference cards is :
 * - hide / show the div of the reference card
 * - remove / restore the HTML content of the div of the reference card (needed because just hide div do not remove blank spaces in the list)
 */
var filterDomains = function(select) {
    var searchDomain = select.value
    
    // First filter : on programs
    var programsInPage = $(".program")
    // For each program in page (identified by class program)
    for (var i=0;i<programsInPage.length;i++) {
        var div = programsInPage[i]
        // Get list of domains associated to all references of program
        var domains = div.attributes[0].value.split(",")
        if ((searchDomain == "*") || (domains.includes(searchDomain))) {
            // Restore the html content of div if domain found in program's references
            div.innerHTML = saveInnerHTMLPrograms[i]
        } else {
            // Else remove html content
            div.innerHTML = ""
        }
    }

    // Get all div reference card in page
    var divsInPage = $(".card-common")

    // For each reference card in page
    for (var i=0;i<divsInPage.length;i++) {
        var div = divsInPage[i]
        // If domain filtered is present in the saved array or filtered domains is *
        if ( (saveDomainsReferenceCards[i].includes(searchDomain)) || (searchDomain == "*") ){
            // Show the div of the reference card and restore HTML
            divsInPage[i].innerHTML = saveInnerHTMLReferenceCards[i]
            div.parentElement.style.display = "block"
        } else {
            // Hide the div of the reference card and remove HTML
            div.parentElement.style.display = "none"
            divsInPage[i].innerHTML = ""
        }
    }
 
    // Update the toc
    $( "#toc" ).empty()
    Toc.init({
        $scope: $("h2,h3"),
        $nav: $("#toc")
      });
}