const surveyQuestions = [
    {
        section: "Section 1: Instructional Design and Delivery",
        text: "How does your institution establish and evolve criteria for assessing learning outcomes in micro-credentials?",
        options: [
            "How does your institution establish and evolve criteria for assessing learning outcomes in micro-credentials?",
            "How are learners involved in the design and quality assurance of micro-credentials?",
            "What structures support the definition and adaptation of learning pathways for micro-credentials?",
            "How does your institution ensure the relevance of micro-credentials to current industry and societal needs?",
            "How are teaching and learning approaches developed and refined to support micro-credentials?"
        ]
    },
    {
        section: "Section 1: Instructional Design and Delivery",
        text: "How are learners involved in the design and quality assurance of micro-credentials?",
        options: [
            "Learners have minimal input in the quality assurance and design processes.",
            "Initial steps to involve learners in feedback processes.",
            "Regular inclusion of learner feedback in program evaluations.",
            "Learner feedback significantly shapes program improvements.",
            "Learners are central to ongoing development, with robust mechanisms for their feedback."],
    },
    {
        section: "Section 1: Instructional Design and Delivery",
        text: "What structures support the definition and adaptation of learning pathways for micro-credentials??",
        options: [
            "Learning pathways are unstructured and poorly defined.",
            "Beginning to define structured pathways.",
            "Clear pathways exist, with periodic reviews.",
            "Pathways dynamically adapt to trends and feedback.",
            "Continuous optimization of pathways based on real-time industry and learner feedback."
        ]
    },
    {
        section: "Section 1: Instructional Design and Delivery",
        text: "How does your institution ensure the relevance of micro-credentials to current industry and societal needs?",
        options: [
            "Uncertainty about the alignment with industry demands.",
            "Initial efforts to align learning outcomes with industry requirements.",
            "Established alignment with industry needs, ensuring relevance.",
            "Regular updates and refinements to maintain and enhance relevance.",
            "Dynamic updating of programs based on extensive industry consultations and data analytics."
        ]

    },
    {
        section: "Section 1: Instructional Design and Delivery",
        text: "How are teaching and learning approaches developed and refined to support micro-credentials?",
        options: [
            "Ad hoc and unstructured teaching approaches.",
            "Developing structured teaching methods and materials.",
            "Established teaching practices and materials ensure quality education.",
            "Continuous refinement and innovation in teaching based on feedback.",
            "Teaching methods and materials are state-of-the-art, fully integrated with latest research and industry practices."
        ]
    },
    {
        section: "Section 2: Operational Infrastructure",
        text: "How are administrative structures integrated to support micro-credentials?",
        options: [
            "Significant inconsistencies in administrative processes.",
            "Efforts to standardize and clarify administrative structures.",
            "Clear and standardized administrative structures are periodically reviewed.",
            "Administrative structures are well-integrated within the institution.",
            "Seamless integration with national and European frameworks.",]
    },
    {
        section: "Section 2: Operational Infrastructure",
        text: "How does your institution support micro-credentials through its infrastructure and processes?",
        options: ["Infrastructure and processes are inadequate.",
            "Developing necessary infrastructure and processes.",
            "Established infrastructure supports program delivery.",
            "Infrastructure and processes are well-maintained and streamlined.",
            "Continuous improvement of infrastructure to support innovative practices.",]
    },
    {
        section: "Section 2: Operational Infrastructure",
        text: "How does your institution manage enrollment and participation in micro-credential programs?",
        options: ["No clear strategy for student recruitment.",
            "Developing a recruitment strategy.",
            "Clear and effective recruitment strategy.",
            "Recruitment strategy effectively meets workforce needs.",
            "Recruitment strategy is continuously optimized, ensuring robust participation.",]
    },
    {
        section: "Section 2: Operational Infrastructure",
        text: "How transparent and accessible is the information regarding micro-credential programs?",
        options: ["Limited information availability hampers decision-making.",
            "Efforts to improve information transparency.",
            "Established systems provide clear and accessible information.",
            "Comprehensive information systems support informed decision-making.",
            "Information systems are fully optimized, providing detailed and accessible information to all stakeholders.",
        ]
    },
    {
        section: "Section 3: Page Compliance and Governance",
        text: "How does your institution manage the recognition and accreditation of micro-credentials?",
        options: ["Digital badges or certificates are inconsistent or absent.",
            "Developing a system for issuing digital badges or certificates.",
            "Consistent issuance of digital badges reviewed for educational alignment.",
            "Digital badges are continuously updated to reflect skill demands.",
            "Digital badges and certificates are fully aligned with national and European frameworks and continuously optimized for relevance.",]
    },
    {
        section: "Section 3: Page Compliance and Governance",
        text: "How does your institution adhere to and influence regulatory frameworks for micro-credentials?",
        options: [
            "Regulatory frameworks are inconsistent or poorly defined.",
            "Developing clearer regulations and starting stakeholder discussions.",
            "Comprehensive regulatory frameworks ensure consistency and quality.",
            "Regulatory frameworks allow for adaptability and continuous improvement.",
            "Regulatory practices set best practices standards, highly adaptive and aligned with national and European standards.",]
    },
    {
        section: "Section 3: Page Compliance and Governance",
        text: "How are quality assurance processes implemented and maintained for micro-credentials?",
        options: ["No internal quality assurance processes established.",
            "Developing internal quality assurance processes.",
            "Quality assurance processes are established and periodically reviewed.",
            "Quality assurance processes are well-established and continuously improved.",
            "Highly advanced quality assurance processes ensure continuous improvement and alignment with best practices.",
        ]
    },
    {
        section: "Section 3: Page Compliance and Governance",
        text: "How are micro-credentials integrated into existing qualifications frameworks or systems?",
        options: ["Micro-credentials are not considered within existing frameworks.",
            "Initiatives started to align micro-credentials with national and European frameworks.",
            "Micro-credentials are included and recognized within national frameworks.",
            "Micro-credentials are fully integrated within national systems.",
            "Micro-credentials are seamlessly integrated and self-certified within European frameworks.",
        ]
    },
    {
        section: "Section 4: Educator Qualifications and Competencies",
        text: "How does your institution ensure that educators are qualified to deliver micro-credentials?",
        options: ["Uncertainty regarding educator qualifications and competencies.",
            "Specifying required qualifications and competencies for educators.",
            "Clear criteria and processes for educator qualifications and renewals.",
            "High compliance with established standards among educators.",
            "Continuous refinement of educator qualifications based on insights from registration and renewal processes.",
        ]
    },
    {
        section: "Section 4: Educator Qualifications and Competencies",
        text: "How does your institution provide guidance to students about micro-credential programs?",
        options: ["Limited guidance available for students.",
            "Developing comprehensive guidance services.",
            "Established guidance services are periodically reviewed.",
            "Comprehensive and accessible guidance services support informed decisions.",
            "Guidance services are highly inclusive and continuously improved, providing robust support for students.",
        ]
    }
]

let currentPage = 0;

function showPage(pageIndex) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        page.style.display = index === pageIndex ? 'block' : 'none';
    });

    document.getElementById('surveyForm').scrollIntoView({
        behavior: "smooth"
    });
    document.getElementById('prevButton').style.opacity = pageIndex === 0 ? '0' : '1';
    document.getElementById('nextButton').style.opacity = pageIndex === pages.length - 1 ? '0' : '1';
    document.getElementById('submitButton').style.display = pageIndex === pages.length - 1 ? 'inline-block' : 'none';
}

function showPreviousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function showNextPage() {
    if (validatePage()) {
        if (currentPage < surveyQuestions.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    } else {
        alert('Please answer all questions before proceeding.');
    }
}

function validatePage() {
    const currentForm = document.querySelectorAll('.page')[currentPage];
    const inputs = currentForm.querySelectorAll('input[type="radio"]');
    const nameSet = new Set();

    inputs.forEach(input => {
        if (input.checked) {
            nameSet.add(input.name);
        }
    });

    const questionsCount = currentForm.querySelectorAll('.question').length;
    return nameSet.size === questionsCount;
}

function handleSubmit() {
    if (!validatePage()) {
        alert('Please answer all questions before proceeding.');
        return;
    }

    const form = document.getElementById('surveyForm');
    const formData = new FormData(form);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    let results = {};
    for (let entry of formData.entries()) {
        const questionIndex = entry[0].split('.')[1] - 1;
        const section = surveyQuestions[questionIndex].section;

        if (!results[section]) {
            results[section] = { score: 0, count: 0 };
        }

        const score = parseInt(entry[1]) + 1;
        results[section].score += score;
        results[section].count += 1;
    }

    let lowestPerformingQuestions = [];
    for (let entry of formData.entries()) {
        const questionScore = parseInt(entry[1]) + 1;
        const questionIndex = entry[0].split('.')[1] - 1;

        const section = surveyQuestions[questionIndex].section;

        const sectionAverageScore = results[section].score / results[section].count
        if (sectionAverageScore <= questionScore) {
            continue
        }
        
        const question = surveyQuestions[questionIndex];
        lowestPerformingQuestions.push(question);
    }

    for (const [sectionInfo, section] of Object.entries(results)) {
        const averageScore = section.score / section.count;

        const resultText = document.createElement('h5');
        resultText.innerText = createScoreText(averageScore, sectionInfo);
        resultDiv.append(resultText);

        const lowestPerformingQuestionsInSection = lowestPerformingQuestions.filter(
            (question) => { return question.section == sectionInfo }
        );

        if (lowestPerformingQuestionsInSection.length == 0) {
            continue
        }
        
        const lowestPerformingQuestionsText = document.createElement('h5');
        lowestPerformingQuestionsText.innerText = `The lowest performing questions for ${sectionInfo} are:`
        resultDiv.appendChild(lowestPerformingQuestionsText);

        const lowPerformingQuestionsList = document.createElement('ol');
        for (let question of lowestPerformingQuestionsInSection) {
            const questionText = document.createElement('li');
            questionText.innerText = question.text;
            lowPerformingQuestionsList.appendChild(questionText);
        }
        resultDiv.appendChild(lowPerformingQuestionsList);
    }
}

function createScoreText(score, sectionInfo) {
    // Interpretation Guidelines
    // 1.0 - 2.0: Foundational Level - Significant improvements needed.
    // 2.1 - 3.0: Emerging Level - Developing but not yet robust.
    // 3.1 - 4.0: Established Level - Adequate but with room for growth.
    // 4.1 - 5.0: Optimized Level - High maturity with best practices in place.
    let resultText = `On the questions about ${sectionInfo}, you scored ${score} and are at the `;
    if (score <= 2.0) {
        return resultText + 'Foundational Level - Significant improvements needed.';
    }
    if (score >= 2.1 && score <= 3.0) {
        return resultText + 'Emerging Level - Developing but not yet robust.';
    }
    if (score >= 3.1 && score <= 4.0) {
        return resultText + 'Established Level - Adequate but with room for growth.';
    }
    if (score >= 4.1) {
        return resultText + 'Optimized Level - High maturity with best practices in place.';
    }
}

function createSurveyForm() {
    const surveyForm = document.getElementById('surveyForm');

    surveyQuestions.forEach((question, questionIndex) => {
        const pageDiv = document.createElement('div');
        pageDiv.id = 'page-' + (questionIndex + 1);
        pageDiv.className = 'page';
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionLabel = document.createElement('h3');
        questionLabel.textContent = question.text;
        questionLabel.id = "question-text";
        questionDiv.appendChild(questionLabel);

        question.options.forEach((option, optionIndex) => {
            const optionId = `q${questionIndex + 1}.${optionIndex + 1}`;

            const optionDiv = document.createElement('div');
            optionDiv.id = "question-options";

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `q.${questionIndex + 1}`;
            optionInput.id = optionId;
            optionInput.value = optionIndex;
            optionInput.required = true; // Make input required
            optionDiv.appendChild(optionInput);

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionLabel.htmlFor = optionId;
            optionDiv.appendChild(optionLabel);

            questionDiv.appendChild(optionDiv);
        });

        pageDiv.appendChild(questionDiv);

        const buttonContainer = document.getElementById('page-control-buttons');
        surveyForm.insertBefore(pageDiv, buttonContainer);
    });

    showPage(currentPage);
}

document.addEventListener('DOMContentLoaded', createSurveyForm);
