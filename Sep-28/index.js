const teachers = [
    {
        profilePicUrl: './teacher.jpeg',
        topic: 'JavaScript Tutor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        rate: 75,
        rateUnit: 'CAD/hr',
        location: 'Toronto'
    },
    {
        profilePicUrl: './teacher-2.jpeg',
        topic: 'math Tutor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        rate: 89,
        rateUnit: 'CAD/hr',
        location: 'Edmonton'
    },
    {
        profilePicUrl: './teacher-3.jpeg',
        topic: 'Physics Tutor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        rate: 7,
        rateUnit: 'CAD/hr',
        location: 'Winnipeg'
    },
    {
        profilePicUrl: './teacher.jpeg',
        topic: 'Computer Tutor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        rate: 5,
        rateUnit: 'USD/hr',
        location: 'New York'
    },
    {
        profilePicUrl: './teacher-2.jpeg',
        topic: 'English Tutor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        rate: 1000,
        rateUnit: 'Montly',
        location: 'Toronto'
    },
    {
        profilePicUrl: './teacher-3.jpeg',
        topic: 'Spelling Tutor',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        rate: 7500000000,
        rateUnit: 'USD/hr',
        location: 'Chicago'
    }
]



// create a teacher card element, append it to the teacher row
const renderTeacher = (teacher) => {
    // create teacher element 
    const teacherCol = createTeacherCard(teacher)
    // append
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

for (let i =0; i < teachers.length; i++) {
    renderTeacher(teachers[i])
}

// create a branch from the notes (optional) if you dont want to, copy and paste the code

// re-create the logic for students based on the teacher logic