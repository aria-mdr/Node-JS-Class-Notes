// create a teacher card element, append it to the teacher row
const renderTeacher = (teacher) => {
    // create teacher element 
    const teacherCol = createTeacherCard(teacher)
    // append
    addTeacherElementToRow(teacherCol)
}

const addTeacherElementToRow = (teacherCol) => {
    const teacherRow = document.getElementById('teacher-row')
    teacherRow.appendChild(teacherCol)
}

// create a teacher element
const createTeacherCard = (teacher) => {
    // create col => <div class='col mb-3'></div>
    const col = document.createElement('div')
    col.className = 'col mb-3 col-md-4'
    // create card => <div class='card'></div>
    const card = document.createElement('div')
    card.className = 'card'
    // create img tag => <img src='./teacher.jpeg' alt='teacher image' class='card-image' />
    const image = document.createElement('img')
    image.src = teacher.profilePicUrl
    image.className = 'card-img-top'
    image.alt = 'Teacher Image'
    // create card body
    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    // create title
    const title = document.createElement('h5')
    title.className = 'card-title'
    title.innerHTML = teacher.topic

    // create card text
    const cardText = document.createElement('p')
    cardText.className = 'card-text'
    cardText.innerHTML = teacher.desc
    // create list group
    const listGroup = document.createElement('ul')
    listGroup.className = 'list-group list-group-flush'

    // create li
    const rateLi = document.createElement('li')
    rateLi.className = 'list-group-item'
    rateLi.innerHTML = `Rate: ${teacher.rate} ${teacher.rateUnit}`
    const locationLi = document.createElement('li')
    locationLi.className = 'list-group-item'
    locationLi.innerHTML = `Location: ${teacher.location}`

    // create secound card body
    const secoundCardBody = document.createElement('div')
    secoundCardBody.className = 'card-body'

    // create link
    const contactLink = document.createElement('a')
    contactLink.className = 'card-link'
    contactLink.innerHTML = 'Contact'
    contactLink.href = '#'
    const bookLink = document.createElement('a')
    bookLink.className = 'card-link'
    bookLink.href = '#'
    bookLink.innerHTML = 'Book a session'

    
    // add image to card, then add card to col
    listGroup.appendChild(rateLi)
    listGroup.appendChild(locationLi)
    secoundCardBody.appendChild(contactLink)
    secoundCardBody.appendChild(bookLink)
    cardBody.appendChild(title)
    cardBody.appendChild(cardText)
    card.appendChild(image)
    card.appendChild(cardBody)
    card.appendChild(listGroup)
    card.appendChild(secoundCardBody)
    col.appendChild(card)

    return col
}



const generateStudentCardHTML = (student) => {
    return `                  
    <div class="col-md-3">
        <div class="card text-center">
            <div class="card-header">
                ${student.name}
            </div>
            <div class="card-body">
            <h5 class="card-title">${student.field}</h5>
            <p class="card-text">${student.desc}</p>
            <a href="#" class="btn btn-primary">Connect</a>
            </div>
            <div class="card-footer text-muted">
            Joined on ${student.joindedDate.toLocaleString()}
            </div>
        </div>
    </div>
`
}

// make a call to server to get data
// data is in json, so parse it to JS object
const fetchRequest = await fetch('http://localhost:3000/teachers')

fetchRequest.then((res) => {
    const response = res.json();
    response.then((resData) => {
        const teachers = resData
        console.log(teachers)
        for (let i =0; i < teachers.length; i++) {
            renderTeacher(teachers[i])
        }
    })
})

const fetchStudents = async () => {
    const studentsData = await fetch('http://localhost:3000/students')``
    const students = await studentsData.json()
    students.map((student) => {
        document.getElementById('student-row').insertAdjacentHTML('beforeEnd', generateStudentCardHTML(student))
    })
}

fetchStudents();
