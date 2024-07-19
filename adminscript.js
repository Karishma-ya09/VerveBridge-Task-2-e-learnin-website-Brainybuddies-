// Function to show/hide sections based on button clicks
function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('admin-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Function to add a new course
function addCourse() {
    var courseTitle = document.getElementById('courseTitle').value;
    var courseMaterials = document.getElementById('courseMaterials').value; // You can handle file upload logic here

    // Validate input
    if (courseTitle === '') {
        alert('Please enter a course title.');
        return false;
    }

    // Add course to list
    var courseList = document.getElementById('courseList');
    var li = document.createElement('li');
    li.textContent = courseTitle;
    courseList.appendChild(li);

    // Clear form fields
    document.getElementById('courseTitle').value = '';
    document.getElementById('courseMaterials').value = '';

    // Show success message (optional)
    alert('Course added successfully.');

    return false; // Prevent form submission
}

// Function to add a new student
function addStudent() {
    var studentName = document.getElementById('studentName').value;
    var studentEmail = document.getElementById('studentEmail').value;
    var studentPhone = document.getElementById('studentPhone').value;
    var studentClass = document.getElementById('studentClass').value;

    // Validate input
    if (studentName === '' || studentEmail === '' || studentPhone === '' || studentClass === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Add student to list
    var studentList = document.getElementById('studentList');
    var li = document.createElement('li');
    li.textContent = studentName + ' - ' + studentEmail + ' - ' + studentPhone + ' - ' + studentClass;
    studentList.appendChild(li);

    // Clear form fields
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    document.getElementById('studentPhone').value = '';
    document.getElementById('studentClass').value = '';

    // Show success message (optional)
    alert('Student added successfully.');

    return false; // Prevent form submission
}

// Function to add a new exam question
function addExamQuestion() {
    var examQuestion = document.getElementById('examQuestion').value;

    // Validate input
    if (examQuestion === '') {
        alert('Please enter a question.');
        return false;
    }

    // Add question to list
    var examQuestionList = document.getElementById('examQuestionList');
    var li = document.createElement('li');
    li.textContent = examQuestion;
    examQuestionList.appendChild(li);

    // Clear form field
    document.getElementById('examQuestion').value = '';

    // Show success message (optional)
    alert('Exam question added successfully.');

    return false; // Prevent form submission
}
