gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let topMenu = $(`
        <p class="topnav">
            <a class="logobox" target="_blank" href="https://softuni.org?utm_source=FreeProgrammingBooks&utm_medium=logo&utm_campaign=Java"><img class="logo" src="/assets/softuni-global-logo.svg" alt="logo"></a>
            <a target="_blank" href="https://learn.softuni.org?utm_source=FreeProgrammingBooks&utm_medium=header&utm_campaign=JavaBook">Learn Programming</a>
            <a target="_blank" href="https://www.youtube.com/c/CodeWithNakov">YouTube Channel</a>
            <a target="_blank" href="https://introprogramming.info">Nakov's Books</a>
        </p>
    `);
    doc.prepend(topMenu);
});
