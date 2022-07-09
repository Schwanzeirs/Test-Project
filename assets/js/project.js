let projects = []

function addProject(event) {
    event.preventDefault()

    let name = document.getElementById("input-project-name").value
    let start = document.getElementById("input-start-date").value
    let end = document.getElementById("input-end-date").value
    let description = document.getElementById("description").value
    let image = document.getElementById("input-project-image");
    var box1 = document.getElementById("library1");
    var box2 = document.getElementById("library2");
    var box3 = document.getElementById("library3");
    var box4 = document.getElementById("library4");

    var img = URL.createObjectURL(image.files[0])

    if(box1.checked == true){
        document.write("<br /><br /><img src='assets/images/nodejs.png'>");
    }
    else if(box2.checked == true){
        document.write("<br /><br /><img src='assets/images/nodejs.png'>");
    }
    else if(box3.checked == true){
        document.write("<br /><br /><img src='assets/images/nodejs.png'>");
    }
    else if (box4.checked == true){
        document.write("<br /><br /><img src='assets/images/nodejs.png'>");
    }

    let project = {
        name,
        start,
        end,
        description,
        img,
        box1,
        box2,
        box3,
        box4
    }

    projects.push(project)
    renderProjects()
}



function renderProjects() {
    console.log(projects);

    let containerProjects = document.getElementById("contents")

    for (let i = 0; i< projects.length; i++) {
        containerProjects.innerHTML += `
        <div class="card">
        <div class="project-list-item">
        <div class="project-content">
            <h1>
                <a href="project-detail.html" target="_blank">${projects[i].name}</a>
            </h1>
            <div class="project-image">
                <img src="${projects[i].img}" alt="" style="width: 400px; padding: 5px;">
            </div>
            <span style="font-size: 15px; color: grey;">1 hour ago</span>
            <div class="detail-project-content">
                Project Start on "${projects[i].start}"<br>
                Project End on "${projects[i].end}"
            </div>
            <p>
                ${projects[i].description}
            </p>
                ${projects[i].box1}
                ${projects[i].box2}
                ${projects[i].box3}
                ${projects[i].box4}
            <div style="text-align: right;">
                <div class="btn-group">
                    <button class="btn-edit">Edit Project</button>
                    <button class="btn-delete">Delete Project</button>
                </div>
            </div>
        </div>
    </div>
</div>
        `
    }
}
