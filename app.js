SubmitEvent.addEventListener('click', (event) {
    event.preventDefault();
    let titlec=title.value
    let descc=desc.value
    localStorage.setItem('todo', JSON.stringify([titlec, descc] ));
    console.log(event);
    title.innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `
});

