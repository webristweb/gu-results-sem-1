// Sample student database - MCA 1st Semester
const studentDatabase = {
    "GUOLPG240335": { name: "AKHILESH KUMAR SHARMA", fatherName: "MR. SHARMA" },
    "GUOLPG240341": { name: "DEEPAK KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG240343": { name: "AKASH KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250284": { name: "VISHAL MAURYA", fatherName: "MR. MAURYA" },
    "GUOLPG250319": { name: "SURLAY RAO", fatherName: "MR. RAO" },
    "GUOLPG250320": { name: "KIRTI KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250327": { name: "AMAN KUMAR HALDAR", fatherName: "MR. HALDAR" },
    "GUOLPG250332": { name: "BHASKAR DAS", fatherName: "MR. DAS" },
    "GUOLPG250351": { name: "OMPAL", fatherName: "MR. OMPAL" },
    "GUOLPG250361": { name: "RAVI KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250363": { name: "NEHA BHADURI", fatherName: "MR. BHADURI" },
    "GUOLPG250370": { name: "PRATIK RAJ", fatherName: "MR. RAJ" },
    "GUOLPG250373": { name: "AKARSH TYAGI", fatherName: "MR. TYAGI" },
    "GUOLPG250403": { name: "MUSKAN VERMA", fatherName: "MR. VERMA" },
    "GUOLPG250408": { name: "SABA KHAN", fatherName: "MR. KHAN" },
    "GUOLPG250419": { name: "ANUPAM JAIN", fatherName: "MR. JAIN" },
    "GUOLPG250438": { name: "AYUSH", fatherName: "MR. AYUSH" },
    "GUOLPG250461": { name: "ZAMANAT ABBAS", fatherName: "MR. ABBAS" },
    "GUOLPG250463": { name: "ANMOL KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250464": { name: "NISHANT TYAGI", fatherName: "MR. TYAGI" },
    "GUOLPG250467": { name: "YUVRAJ DIXIT", fatherName: "MR. DIXIT" },
    "GUOLPG250484": { name: "TANISHA GOYAL", fatherName: "MR. GOYAL" },
    "GUOLPG250513": { name: "VEDANTI GAUTAM", fatherName: "MR. GAUTAM" },
    "GUOLPG250550": { name: "PUSHKAR TIWARI", fatherName: "MR. TIWARI" },
    "GUOLPG250558": { name: "PARUL SAHU", fatherName: "MR. SAHU" },
    "GUOLPG250610": { name: "HIMANSHU KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250641": { name: "SAURAV KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250674": { name: "SEVANA ADITYA KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250695": { name: "SHABAL PRATAP SINGH", fatherName: "MR. SINGH" },
    "GUOLPG250711": { name: "DEVANSH AGARWAL", fatherName: "MR. AGARWAL" },
    "GUOLPG250718": { name: "VIVEK CHOUDHARY", fatherName: "MR. CHOUDHARY" },
    "GUOLPG250726": { name: "SHIVAM", fatherName: "MR. SHIVAM" },
    "GUOLPG250729": { name: "SUNNY KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250733": { name: "VIRAG MISHRA", fatherName: "MR. MISHRA" },
    "GUOLPG250750": { name: "VIMALESH KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250773": { name: "ASHISH SINHA", fatherName: "MR. SINHA" },
    "GUOLPG250784": { name: "SACHIN KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG250833": { name: "MANSI KUMARI", fatherName: "MR. KUMARI" },
    "GUOLPG250938": { name: "RISHABH KUMAR MISHRA", fatherName: "MR. MISHRA" },
    "GUOLPG250953": { name: "ROBIN KUMAR SINGH", fatherName: "MR. SINGH" },
    "GUOLPG250982": { name: "SHIZA SULTAN", fatherName: "MR. SULTAN" },
    "GUOLPG251052": { name: "RAHUL GODIWAL", fatherName: "MR. GODIWAL" },
    "GUOLPG251230": { name: "AMIT KUMAR GANGWAR", fatherName: "MR. GANGWAR" },
    "GUOLPG251354": { name: "NIKESH DUBEY", fatherName: "MR. DUBEY" },
    "GUOLPG251360": { name: "SURABH KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG251361": { name: "ABHISHEK RAJ", fatherName: "MR. RAJ" },
    "GUOLPG251421": { name: "MAHFOOZ SARFRAZ", fatherName: "MR. SARFRAZ" },
    "GUOLPG251446": { name: "ASTHA SHARMA", fatherName: "MR. SHARMA" },
    "GUOLPG251500": { name: "SIDDHARTH DWIVEDI", fatherName: "MR. DWIVEDI" },
    "GUOLPG251511": { name: "NIHAL AHMAD", fatherName: "MR. AHMAD" },
    "GUOLPG251517": { name: "SATYAM KUMAR SINGH", fatherName: "MR. SINGH" },
    "GUOLPG251566": { name: "AYUSH ANAND", fatherName: "MR. ANAND" },
    "GUOLPG251576": { name: "RAMAN CHAUDHARY", fatherName: "MR. CHAUDHARY" },
    "GUOLPG251577": { name: "RIYA CHAUDHARY", fatherName: "MR. CHAUDHARY" },
    "GUOLPG251583": { name: "PRACHI SHARMA", fatherName: "MR. SHARMA" },
    "GUOLPG251595": { name: "ANVITHA M THANTRY", fatherName: "MR. THANTRY" },
    "GUOLPG251604": { name: "NITANSHU CHAWLA", fatherName: "MR. CHAWLA" },
    "GUOLPG251607": { name: "DEVANSHU", fatherName: "MR. DEVANSHU" },
    "GUOLPG251608": { name: "SARANSH KASHYAP", fatherName: "MR. KASHYAP" },
    "GUOLPG251673": { name: "KAJAL KUMARI", fatherName: "MR. KUMARI" },
    "GUOLPG251688": { name: "NEERAJ KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG251714": { name: "ANANT AGARWAL", fatherName: "MR. AGARWAL" },
    "GUOLPG251817": { name: "HARIOM TIWARI", fatherName: "MR. TIWARI" },
    "GUOLPG251822": { name: "HARSHIT MAURYA", fatherName: "MR. MAURYA" },
    "GUOLPG251849": { name: "NIDHI BAWARI", fatherName: "MR. BAWARI" },
    "GUOLPG251858": { name: "BABLOO KUMAR GARG", fatherName: "MR. GARG" },
    "GUOLPG251881": { name: "PRASHANT KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG251884": { name: "KAPIL SINGH RAGHAV", fatherName: "MR. RAGHAV" },
    "GUOLPG251889": { name: "GAURAV SHUKLA", fatherName: "MR. SHUKLA" },
    "GUOLPG251899": { name: "IMRAN ALI", fatherName: "MR. ALI" },
    "GUOLPG251928": { name: "AMAN KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG251933": { name: "HARSHIT KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG251943": { name: "GARIMA RAO", fatherName: "MR. RAO" },
    "GUOLPG251953": { name: "ANKIT SINGH", fatherName: "MR. SINGH" },
    "GUOLPG251964": { name: "SAURABH TANDON", fatherName: "MR. TANDON" },
    "GUOLPG251975": { name: "SALONI", fatherName: "MR. SALONI" },
    "GUOLPG252118": { name: "MANISH KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252149": { name: "ASHISH KUMAR JHA", fatherName: "MR. JHA" },
    "GUOLPG252163": { name: "VISHAL KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252282": { name: "SHUBHAM RAI", fatherName: "MR. RAI" },
    "GUOLPG252291": { name: "SHIVANGI PATHAK", fatherName: "MR. PATHAK" },
    "GUOLPG252293": { name: "ARYAN MISHRA", fatherName: "MR. MISHRA" },
    "GUOLPG252300": { name: "VISHAL TYAGI", fatherName: "MR. TYAGI" },
    "GUOLPG252323": { name: "ANKIT BHARDWAJ", fatherName: "MR. BHARDWAJ" },
    "GUOLPG252327": { name: "NEHA KUMARI", fatherName: "MR. KUMARI" },
    "GUOLPG252346": { name: "SHAMMI KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252369": { name: "YANA PATHAK", fatherName: "MR. PATHAK" },
    "GUOLPG252395": { name: "RAM PANDEY", fatherName: "MR. PANDEY" },
    "GUOLPG252423": { name: "SUMIT RASTOGI", fatherName: "MR. RASTOGI" },
    "GUOLPG252442": { name: "RAVI KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252444": { name: "NEHA SHARMA", fatherName: "MR. SHARMA" },
    "GUOLPG252454": { name: "RAHUL SINGH", fatherName: "MR. SINGH" },
    "GUOLPG252457": { name: "BHASKAR NAMAN RAI", fatherName: "MR. RAI" },
    "GUOLPG252460": { name: "KRISHNA SHARMA", fatherName: "MR. SHARMA" },
    "GUOLPG252465": { name: "SANA KHAN", fatherName: "MR. KHAN" },
    "GUOLPG252471": { name: "RAVI KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252473": { name: "PRABHAT KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252481": { name: "ANKUR MISHRA", fatherName: "MR. MISHRA" },
    "GUOLPG252501": { name: "RAJNISH KUMAR TIWARY", fatherName: "MR. TIWARY" },
    "GUOLPG252516": { name: "HARPREET KAUR", fatherName: "MR. KAUR" },
    "GUOLPG252538": { name: "NIPUN SHARMA", fatherName: "MR. SHARMA" },
    "GUOLPG252566": { name: "ROHIT KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252567": { name: "HARSH NAGAR", fatherName: "MR. NAGAR" },
    "GUOLPG252575": { name: "RAJAT KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252579": { name: "AYUSH BABUTA", fatherName: "MR. BABUTA" },
    "GUOLPG252580": { name: "ADESH CHANDRA", fatherName: "MR. CHANDRA" },
    "GUOLPG252590": { name: "MOHIT KUMAR PAL", fatherName: "MR. PAL" },
    "GUOLPG252615": { name: "MANVENDRA PRATAP SINGH", fatherName: "MR. SINGH" },
    "GUOLPG252617": { name: "PRAGYA PARASHAR", fatherName: "MR. PARASHAR" },
    "GUOLPG252672": { name: "SNEHA BHATIA", fatherName: "MR. BHATIA" },
    "GUOLPG252686": { name: "SANJANA CHAUDHARY", fatherName: "MR. CHAUDHARY" },
    "GUOLPG252703": { name: "BALWANT SINGH", fatherName: "MR. SINGH" },
    "GUOLPG252751": { name: "VIVEK KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252752": { name: "SACHIN SIMAAR", fatherName: "MR. SIMAAR" },
    "GUOLPG252763": { name: "LALITA VERMA", fatherName: "MR. VERMA" },
    "GUOLPG252764": { name: "ASHISH KR ANAND", fatherName: "MR. ANAND" },
    "GUOLPG252779": { name: "ASHISH KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252782": { name: "KUSH KUMAR SHARMA", fatherName: "MR. SHARMA" },
    "GUOLPG252808": { name: "SAHIL", fatherName: "MR. SAHIL" },
    "GUOLPG252829": { name: "DEV GUPTA", fatherName: "MR. GUPTA" },
    "GUOLPG252841": { name: "AMAN KUMAR", fatherName: "MR. KUMAR" },
    "GUOLPG252846": { name: "AMAN SONI", fatherName: "MR. SONI" }
};

// Course structure
const courseStructure = [
    { code: "E1PA101T", name: "Computational Mathematics and Statistics", credits: 3.00 },
    { code: "E1PA103B", name: "Problem Solving and Computer Programming", credits: 4.00 },
    { code: "E1PA104B", name: "Database Management System", credits: 4.00 },
    { code: "E1PA105B", name: "Introduction to IT [Bridge Course]", credits: 4.00 },
    { code: "E1PA107T", name: "Digital Computer Organization", credits: 3.00 },
    { code: "O1PA102L", name: "English Proficiency and Aptitude Building", credits: 2.00 }
];

const gradePoints = { 'A+': 9, 'A': 8, 'B+': 7, 'B': 6 };
let generatedResults = {};

// Clear old results with 'O' grade
if (localStorage.getItem('studentResults')) {
    const oldResults = JSON.parse(localStorage.getItem('studentResults'));
    // Check if old results have 'O' grade, if yes clear it
    const firstKey = Object.keys(oldResults)[0];
    if (firstKey && oldResults[firstKey][0] && oldResults[firstKey][0].grade === 'O') {
        localStorage.removeItem('studentResults');
        generatedResults = {};
    } else {
        generatedResults = oldResults;
    }
} else {
    generatedResults = {};
}

function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function generateGrades(rollNo) {
    if (generatedResults[rollNo]) {
        return generatedResults[rollNo];
    }
    
    let seed = 0;
    for (let i = 0; i < rollNo.length; i++) {
        seed += rollNo.charCodeAt(i) * (i + 1);
    }
    
    const subjects = [];
    courseStructure.forEach((course, index) => {
        const randomValue = seededRandom(seed + index * 100);
        let grade;
        
        // Professional grade distribution (no O grade)
        if (randomValue < 0.35) {
            grade = 'A+';  // 35% chance
        } else if (randomValue < 0.70) {
            grade = 'A';   // 35% chance
        } else if (randomValue < 0.90) {
            grade = 'B+';  // 20% chance
        } else {
            grade = 'B';   // 10% chance
        }
        
        subjects.push({
            code: course.code,
            name: course.name,
            credits: course.credits,
            grade: grade,
            gradePoints: gradePoints[grade],
            status: "PASS"
        });
    });
    
    generatedResults[rollNo] = subjects;
    localStorage.setItem('studentResults', JSON.stringify(generatedResults));
    return subjects;
}

function checkResult() {
    const rollNo = document.getElementById('rollNo').value.trim().toUpperCase();
    
    if (!rollNo) {
        alert('Please enter your roll number!');
        return;
    }
    
    const student = studentDatabase[rollNo];
    
    if (!student) {
        alert('Invalid Roll Number! Please check and try again.');
        return;
    }
    
    const subjects = generateGrades(rollNo);
    displayResult(rollNo, { ...student, subjects });
}

function displayResult(rollNo, student) {
    document.getElementById('searchSection').style.display = 'none';
    document.getElementById('cardHeader').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    
    // Show floating print button
    document.getElementById('floatingPrintBtn').classList.add('show');
    
    document.getElementById('displayRoll').textContent = rollNo;
    document.getElementById('studentName').textContent = student.name;
    
    const today = new Date();
    const dateStr = today.getDate().toString().padStart(2, '0') + '/' + 
                    (today.getMonth() + 1).toString().padStart(2, '0') + '/' + 
                    today.getFullYear();
    document.getElementById('resultDate').textContent = dateStr;
    
    const tableBody = document.getElementById('courseTableBody');
    tableBody.innerHTML = '';
    
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    student.subjects.forEach((subject) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subject.code}</td>
            <td>${subject.name}</td>
            <td>${subject.credits.toFixed(2)}</td>
            <td>${subject.credits.toFixed(2)}</td>
            <td>${subject.grade}</td>
        `;
        tableBody.appendChild(row);
        totalCredits += subject.credits;
        totalGradePoints += subject.credits * subject.gradePoints;
    });
    
    const sgpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById('totalRegistered').textContent = totalCredits.toFixed(2);
    document.getElementById('earnedPoints').textContent = totalGradePoints.toFixed(0);
    document.getElementById('sgpaValue').textContent = sgpa;
    
    // CGPA calculation (same as SGPA for 1st semester)
    document.getElementById('cumulativeCredits').textContent = totalCredits.toFixed(2);
    document.getElementById('cumulativePoints').textContent = totalGradePoints.toFixed(0);
    document.getElementById('cgpaValue').textContent = sgpa;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fun popup after 10 seconds
    setTimeout(() => {
        alert('🎉 Congratulations! You passed with flying colors! Keep up the great work! 🎓✨\n\nJust for fun purpose, Not take to heart 😄');
    }, 10000);
}

function goBack() {
    document.getElementById('searchSection').style.display = 'block';
    document.getElementById('cardHeader').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('rollNo').value = '';
    
    // Hide floating print button
    document.getElementById('floatingPrintBtn').classList.remove('show');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function printResult() {
    // Get student name for filename
    const studentName = document.getElementById('studentName').textContent;
    const rollNo = document.getElementById('displayRoll').textContent;
    
    // Set document title for PDF filename
    const originalTitle = document.title;
    document.title = `Result_${rollNo}_${studentName.replace(/\s+/g, '_')}`;
    
    // Trigger print dialog
    window.print();
    
    // Restore original title after a short delay
    setTimeout(() => {
        document.title = originalTitle;
    }, 1000);
}

document.getElementById('rollNo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkResult();
    }
});

// Hamburger Menu Toggle
function toggleMenu() {
    console.log('Toggle menu clicked');
    const nav = document.getElementById('mainNav');
    const hamburger = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('menuOverlay');
    
    console.log('Nav element:', nav);
    console.log('Hamburger element:', hamburger);
    console.log('Overlay element:', overlay);
    
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    
    console.log('Nav has active class:', nav.classList.contains('active'));
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.getElementById('mainNav');
        const hamburger = document.getElementById('hamburgerBtn');
        const overlay = document.getElementById('menuOverlay');
        
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});
