import { generateToggle, toggleColors } from './toggles.js';
import { generateTimelineIcon, generateTimelineYearMarker, timelineIconColors, diagonalImageCard } from './timeline.js';

// ########## Menu Bar ##########
// Toggle mobile menu
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu-2');

toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
});


// ########## About Me ##########
// Toggle dark mode based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// Add hover effect to skill tags
const skillTags = document.querySelectorAll('.bg-indigo-100');
skillTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.classList.remove('bg-indigo-100', 'text-indigo-800');
        tag.classList.add('bg-blue-900', 'text-white');
    });
    tag.addEventListener('mouseout', () => {
        tag.classList.remove('bg-blue-900', 'text-white');
        tag.classList.add('bg-indigo-100', 'text-indigo-800');
    });
});


// Generate timeline toggles:
const toggleContainer = document.getElementById("timeline-toggle-container");
toggleContainer.innerHTML += generateToggle("education-toggle", "Education", "true", toggleColors.education);
toggleContainer.innerHTML += generateToggle("education-toggle", "Career", "true", toggleColors.career);
toggleContainer.innerHTML += generateToggle("education-toggle", "Research", "true", toggleColors.research);
toggleContainer.innerHTML += generateToggle("education-toggle", "Projects", "true", toggleColors.projects);
toggleContainer.innerHTML += generateToggle("education-toggle", "Archievements", "true", toggleColors.archievements);

const timelineEntrys = [
    generateTimelineYearMarker("2025"),
    diagonalImageCard(
        "right",
        "research",
        "Attacking X-Wing",
        "Side-Channel Attacks on Post-Quantum Cryptography",
        "00/00/0000",
        "Work in Progress",
        ["Research Paper", "Crypto", "SCA", "Power Analysis"],
        "https://placehold.co/600x400",
        "Project",
        ""
    ),
    diagonalImageCard(
        "right",
        "research",
        "Attacking Mayo",
        "Side-Channel Attacks on Post-Quantum Cryptography",
        "00/00/0000",
        "Work in Progress",
        ["Research Paper", "Crypto", "SCA", "Power Analysis"],
        "https://placehold.co/600x400",
        "Project",
        ""
    ),
    diagonalImageCard(
        "right",
        "research",
        "Smarthome Forensics",
        "<a href='https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/forschung/fiendish'>FIENDISH Research Project</a>",
        "00/00/0000",
        `Developing methods, techniques, and tools to extract relevant information from smart home devices for forensic purposes. - Funded by the Innovation Management Cybersecurity in the Hessian Ministry of the Interior, Security and Homeland Security.`,
        [],
        "https://placehold.co/600x400",
        "Project",
        ""
    ),
    diagonalImageCard(
        "right",
        "projects",
        "Smart Desk",
        "Master Project",
        "09/02/2025",
        "Integrating a height adjustable desk into. Combined with posture tracking.",
        [],
        "https://i.pravatar.cc/300",
        "Project",
        "myLink"
    ),
    diagonalImageCard(
        "right",
        "research",
        "Open-Source ASIC Design",
        "Master Project",
        "03/04/2025",
        "Open-source 6502 CPU, fully implemented in Verilog, designed to work seamlessly with the <a href='https://github.com/The-OpenROAD-Project/OpenROAD'>OpenROAD</a> toolchain. The design is tailored for use with the IHP SG13G2 PDK, providing a complete open-source solution from RTL to GDSII without any reliance on proprietary software. <br> Submitted to the <a href='https://github.com/IHP-GmbH/TO_Apr2025/pull/18/commits/2e6ce9eeb553f94730d55fecf57614ce7eae580a'>April 2025 SG13G2 Tapeout</a>.<br>Finished silicon will hopefully be received by the end of 2025.",
        [],
        "img/6502-asic.png",
        "Project",
        "https://github.com/danielh186/6502-Tapeout"
    ),
    diagonalImageCard(
        "left",
        "career",
        "Academic Researcher",
        "<a href='https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/profil'>Hochschule RheinMain</a>",
        "01/04/2024 -<br>now",
        "Starting my new position as scientific researcher, working mainly on the FIENDISH research project...",
        [],
        "img/hsrm-logo.jpg",
        "Project",
        ""
    ),
    generateTimelineYearMarker("2024"),
    diagonalImageCard(
        "left",
        "education",
        "Bachelor Thesis - Computer Science",
        "<a href='https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/profil'>Hochschule RheinMain</a>, <a href='https://www.phytec.eu/en/startseite/'>PHYTEC Messtechnik</a>",
        "01/10/2021 -<br>15/10/2024",
        "<p>Development of a production workstation for computer assisted focus calibration of embedded cameras.",
        [],
        "https://i.pravatar.cc/300",
        "Project",
        ""
    ),
    diagonalImageCard(
        "left",
        "career",
        "Research Assistant",
        "<a href='https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/profil'>Hochschule RheinMain</a>",
        "01/10/2024 -<br>31/03/2025",
        "Starting my new position as scientific researcher, working mainly on the FIENDISH research project...",
        ["sdfa", "asdf", "asdf"],
        "https://i.pravatar.cc/300",
        "Project",
        "myLink"
    ),
    diagonalImageCard(
        "right",
        "projects",
        "LED Pyramid",
        "Project Subtitle",
        "08/06/2023",
        "Duis autem vel eum iriure dolor in hendrerituer",
        ["sdfa", "asdf", "asdf"],
        "https://i.pravatar.cc/300",
        "Project",
        "myLink"
    ),
    diagonalImageCard(
        "right",
        "projects",
        "High Speed 3D-Printer",
        "Project Subtitle",
        "08/06/2023",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla",
        ["sdfa", "asdf", "asdf"],
        "https://i.pravatar.cc/300",
        "Project",
        "myLink"
    ),

    generateTimelineYearMarker("2023"),
    diagonalImageCard(
        "right",
        "research",
        "Simple Power Analysis on UOV",
        "Side-Channel Attacks on Post-Quantum Cryptography",
        "08/06/2023",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer",
        ["sdfa", "asdf", "asdf"],
        "https://i.pravatar.cc/300",
        "Project",
        "myLink"
    ),
    generateTimelineYearMarker("2021"),
    diagonalImageCard(
        "left",
        "career",
        "Software Developer",
        "<a href='https://www.phytec.eu/en/startseite/'>PHYTEC Messtechnik</a>",
        "01/10/2021 -<br>31/01/2025",
        "",
        [],
        "https://i.pravatar.cc/300",
        "",
        ""
    ),
    diagonalImageCard(
        "left",
        "education",
        "High School Diploma",
        "Frauenlob Gymnasium, Mainz",
        "02/07/2021",
        "",
        [],
        "https://i.pravatar.cc/300",
        "",
        ""
    ),

    generateTimelineYearMarker("2020"),
    diagonalImageCard(
        "right",
        "projects",
        "CNC 2.0",
        "Project Subtitle",
        "08/06/2023",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer",
        ["sdfa", "asdf", "asdf"],
        "https://i.pravatar.cc/300",
        "Project",
        "myLink"
    ),
    diagonalImageCard(
        "right",
        "projects",
        "3D-Printed CNC Router",
        "Project Subtitle",
        "08/06/2023",
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla",
        ["sdfa", "asdf", "asdf"],
        "https://i.pravatar.cc/300",
        "Project",
        "myLink"
    ),
]



// Generate timeline icons:
const timelineContainer = document.getElementById("timeline-container");
timelineEntrys.forEach(element => {
    timelineContainer.innerHTML += element
});