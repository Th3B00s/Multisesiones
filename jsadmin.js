document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");
    const contentDiv = document.getElementById("content");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const page = link.getAttribute("data-page");

            if (page) {
                fetch(page)
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(err => {
                        contentDiv.innerHTML = `<p>Error al cargar la página: ${err.message}</p>`;
                    });
            }
        });
    });
});
