document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Logic ---
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMobile = document.getElementById('nav-mobile');
    const mobileLinks = navMobile.querySelectorAll('a');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMobile.classList.remove('hidden');
        });
    }
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMobile.classList.add('hidden');
        });
    }
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.add('hidden');
        });
    });
    // --- END Mobile Menu Logic ---


    // --- 2. Scroll-Spy Logic (for Pill Nav) ---
    // Added #skills to the query
    const sections = document.querySelectorAll('#home, #about, #experience, #skills, #projects, #testimonials, #contactme');
    const navMenuLinks = document.querySelectorAll('#nav-menu a[data-scroll-nav]');

    const activateNav = (sectionId) => {
        navMenuLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('data-scroll-nav') === sectionId) {
                link.classList.add('active-nav');
            }
        });
    };

    const onScroll = () => {
        let currentSection = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.id;
            }
        });
        activateNav(currentSection);
    };

    window.addEventListener('scroll', onScroll);
    activateNav('home');
    // --- END Scroll-Spy Logic ---


    // --- 3. DYNAMIC SKILLS SECTION ---
    const skillsData = [
        "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "REACT JS",
        "NODE JS", "EXPRESS JS", "MONGODB", "SQLITE", "PYTHON", "C", "C ++",
        "JAVA", "AI / ML", "IOT", "CYBER SECURITY", "HOSTING", "AWS", "FIGMA",
        "UI/UX", "GIT"
    ];

    const skillContainer = document.getElementById('skill-list-container');
    if (skillContainer) {
        skillsData.forEach(skillName => {
            const skillPill = document.createElement('p');
            skillPill.className = 'skill-pill w-fit pl-4 pr-4 pt-2 pb-2 m-2 text-lg font-semibold rounded-lg border border-gray-700 text-gray-300';
            const skillText = document.createElement('span');
            skillText.className = 'scroll-text';
            skillText.textContent = skillName;
            skillPill.appendChild(skillText);
            skillContainer.appendChild(skillPill);
        });
    }

    // --- 4. DYNAMIC EXPERIENCE TIMELINE (NEW DESIGN) ---

    // --- New SVG Icons (for Experience) ---
    // Cleaned up duplicated path
    const buildingIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v.5a.5.5 0 001 0V4h6v.5a.5.5 0 001 0V4h.5a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H14v-.5a.5.5 0 00-1 0v.5H7v-.5a.5.5 0 00-1 0v.5H5.5a.5.5 0 01-.5-.5V4.5a.5.5 0 01.5-.5H6zm4.5 9a.5.5 0 00-.5.5v.5a.5.5 0 001 0v-.5a.5.5 0 00-.5-.5zM10 12a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
        </svg>`;
    const calendarIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>`;

    // --- UPDATED Experience Data (with skills) ---
    const experienceData = [
        {
            date: "2024 - Present",
            title: "Full Stack Developer (Freelance)",
            company: "Lexi Crew Enterprise",
            description: "Built and maintained full-stack web applications for clients, handling end-to-end development including frontend (React), backend (Node), and database (MongoDB and Dynamodb) ",
            skills: ["HTML", "CSS", "Tailwind CSS", "TypeScript", "JavaScript", "Motion Design", "React js", "Node js", ""]
        },

    ];

    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        // Clear old content
        timelineContainer.innerHTML = '';

        // Add the vertical line
        const timelineLine = document.createElement('div');
        // Adjusted line position to match the new dot
        timelineLine.className = 'absolute left-2 top-2 h-full w-0.5 bg-gray-700';
        timelineContainer.appendChild(timelineLine);

        // Render new timeline items
        experienceData.forEach(item => {
            const itemDiv = document.createElement('div');
            // Added pl-8 to make room for the dot
            itemDiv.className = 'relative mb-10 pl-8';

            const dot = document.createElement('div');
            // New hollow dot (like image)
            dot.className = 'absolute left-[-1px] top-2 w-6 h-6 rounded-full border-2 border-gray-700 bg-black z-10';
            itemDiv.appendChild(dot);

            // Create content (no card background)
            const contentDiv = document.createElement('div');

            // Generate Skills HTML
            let skillsHtml = '';
            if (item.skills && item.skills.length > 0) {
                skillsHtml = '<div class="flex flex-wrap gap-2 mt-4">';
                // Use the new CSS class .exp-skill-pill
                skillsHtml += item.skills.map(skill => `<span class="exp-skill-pill">${skill}</span>`).join('');
                skillsHtml += '</div>';
            }

            // Set the full inner HTML for the content
            contentDiv.innerHTML = `
                <div class="flex items-center gap-x-2 text-lg font-bold text-white">${buildingIcon} ${item.company}</div>
                <h3 class="text-2xl font-bold text-white mt-1">${item.title}</h3>
                <div class="flex items-center gap-x-2 text-sm text-gray-500 mt-2">${calendarIcon} ${item.date}</div>
                <p class="text-base text-gray-400 mt-4">${item.description}</p>
                ${skillsHtml}
            `;

            itemDiv.appendChild(contentDiv);
            timelineContainer.appendChild(itemDiv);
        });
    }

    // --- 5. DYNAMIC TESTIMONIALS (Placeholder) ---
    const testimonialContainer = document.getElementById('testimonial-container');
    if (testimonialContainer) {
        const testCard = document.createElement('div');
        testCard.className = 'p-5  rounded-lg shadow-lg';
        // Fixed broken HTML (removed extra </span>)
        testCard.innerHTML = `
            <p class="text-xl text-gray-300 italic">"Sanjay is a highly skilled developer who delivered our project on time and exceeded our expectations. His problem-solving ability is top-notch."</p>
            <h4 class="text-lg font-bold text-orange-500 mt-4">- Jane Doe, CEO of Tech Solutions</h4>
        `;
        // UNCOMMENTED this line to make the testimonial appear
        testimonialContainer.appendChild(testCard);
    }

    // --- 6. DYNAMIC PROJECTS SECTION ---
    const projectsData = [
        {
            title: "M15 Notes",
            imageUrl: "./images/project_four.png",
            description: "M15 Notes is a MERN stack application inspired by Google Keep, offering users an intuitive platform for creating and managing notes...",
            liveLink: "https://m15notes.sanjayrushee.live/"
        },
        {
            title: "Nxt Trendz",
            imageUrl: "./images/project_one.png",
            description: "Nxt Trendz is an online shopping e-commerce website that features responsive design, product listings, search functionality...",
            liveLink: "https://sanjaynxtrend.ccbp.tech/",
            githubLink: "https://github.com/sanjayrushee/NXT-Trendz"

        },
        {
            title: "Jobby",
            imageUrl: "./images/project_two.png",
            description: "Jobby is a job-finding app that features a user-friendly interface, job listings, search functionality, and application tracking...",
            liveLink: "https://jobbysr.ccbp.tech/",
            githubLink: "https://github.com/sanjayrushee/Jobby"
        },
        {
            title: "Double Marker Test Prediction",
            imageUrl: "./images/project_three.png",
            description: "This project develops a user-friendly system for predicting Double Marker test outcomes using React.js and Flask..."
        }
    ];

    const projectContainer = document.getElementById('project-list-container');

    const globeIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
        </svg>
    `;
    const githubIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4-4.42-3.58-8-8-8"/>
        </svg>
    `;

    if (projectContainer) {
        projectsData.forEach(project => {
            let linksHtml = '';
            if (project.liveLink) {
                linksHtml += `<a href="${project.liveLink}" target="_blank" class="m-2 text-gray-300 hover:text-orange-500">${globeIcon}</a>`;
            }
            if (project.githubLink) {
                linksHtml += `<a href="${project.githubLink}" target="_blank" class="m-2 text-gray-300 hover:text-orange-500">${githubIcon}</a>`;
            }

            const card = document.createElement('div');
            // --- UPDATED Card Classes ---
            card.className = 'card md:flex  rounded-lg overflow-hidden shadow-lg';
            card.innerHTML = `
                <img src="${project.imageUrl}" class="w-full h-56 object-cover md:w-96" alt="${project.title} preview">
                
                <div class="p-6 md:pl-8">
                    <h1 class="text-b text-3xl mt-3 pl-2 font-bold">${project.title}</h1>
                    <p class="text-xl text-gray-400 ml-2 mt-2 mr-2">${project.description}</p>
                    <div class="flex pt-3">
                        ${linksHtml}
                    </div>
                </div>
            `;
            projectContainer.appendChild(card);
        });
    }

    // --- 7. Scroll-Triggered Animations (FIX) ---
    // This code finds all elements with the class 'animate-fade-in-up'
    // and adds the 'is-visible' class when they scroll into view.

    const animatedElements = document.querySelectorAll('.animate-fade-in-up');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When the element is in the viewport
                if (entry.isIntersecting) {
                    // Add the 'is-visible' class
                    entry.target.classList.add('is-visible');
                    // Stop watching this element so it only animates once
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Tell the observer to watch each of our animated elements
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    // --- END Scroll-Triggered Animations ---

});