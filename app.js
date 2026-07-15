fetch("config.json")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("jobsheets");

        data.jobsheets.forEach(js => {

            if (!js.show) return;

            const card = document.createElement("div");
            card.className = "card";

            let buttons = "";

            js.files.forEach(file => {
                buttons += `
                    <a class="btn"
                       href="${file.file}"
                       target="_blank">
                       ${file.label}
                    </a>
                `;
            });

            card.innerHTML = `
                <h2>${js.title}</h2>
                <p>${js.description}</p>
                <div class="buttons">
                    ${buttons}
                </div>
            `;

            container.appendChild(card);

        });

    });
