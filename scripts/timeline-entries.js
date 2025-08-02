
import { generateTimelineYearMarker, diagonalImageCard } from './timeline.js';

export const timelineEntries = [
    generateTimelineYearMarker("2025"),
        diagonalImageCard(
        "right",
        "research",
        "EM Fault Injection on UOV",
        "",
        "xx/xx/2025",
        "Work in Progress",
        [],
        "media/uov-fi-2.jpg",
        "Project",
        null, // no link
        [
            {
                image_src: "media/uov-fi-2.jpg",
                image_alt: "",
                title: "",
                description: ""
            },
        ]
    ),
    diagonalImageCard(
        "right",
        "projects",
        "LCSC import utility for Inventree",
        "Weekend Sideproject",
        "02/08/2025",
        "Coming Soon",
        [],
        "media/inventree-import.png",
        "",
        null, // no link
    ),
    // diagonalImageCard(
    //     "right",
    //     "research",
    //     "Attacking X-Wing",
    //     "Side-Channel Attacks on Post-Quantum Cryptography",
    //     "00/00/0000",
    //     "Work in Progress",
    //     ["Research Paper", "Crypto", "SCA", "Power Analysis"],
    //     "https://placehold.co/600x400",
    //     "Project",
    //     ""
    // ),

    // diagonalImageCard(
    //     "right",
    //     "research",
    //     "Smarthome Forensics",
    //     "<a href='https://www.hs-rm.de/design-informatik-medien/forschung/forschungsprojekte/fiendish'>FIENDISH Research Project</a>",
    //     "00/00/0000",
    //     `Developing methods, techniques, and tools to extract relevant information from smart home devices for forensic purposes. - Funded by the Innovation Management Cybersecurity in the Hessian Ministry of the Interior, Security and Homeland Security.`,
    //     [],
    //     "https://placehold.co/600x400",
    //     "Project",
    //     ""
    // ),
    diagonalImageCard(
        "right",
        "projects",
        "Linak motorized desk controller",
        "University Project",
        "11/08/2025",
        "Enhancing an electric height-adjustable desk with a smart controller. Integrating presence detection, posture tracking and smart home connectivity. The goal is to enable automated desk adjustments through Apple Home and provide real-time posture feedback.",
        [],
        "media/elevateme-controller.jpg",
        "Project",
        null, // no link
        [
            {
                image_src: "media/elevateme-controller.jpg",
                image_alt: "",
                title: "",
                description: ""
            },
        ]
    ),
    diagonalImageCard(
        "right",
        "research",
        "Open-Source ASIC Design",
        "6502 Retro CPU",
        "03/04/2025",
        "Open-source 6502 CPU, fully implemented in Verilog, designed to work seamlessly with the <a href='https://github.com/The-OpenROAD-Project/OpenROAD'>OpenROAD</a> toolchain. The design is tailored for use with the IHP SG13G2 PDK, providing a complete open-source solution from RTL to GDSII without any reliance on proprietary software. <br> Submitted to the <a href='https://github.com/IHP-GmbH/TO_Apr2025/pull/18/commits/2e6ce9eeb553f94730d55fecf57614ce7eae580a'>April 2025 SG13G2 Tapeout</a>.<br>Finished silicon will hopefully be received by the end of 2025.",
        [],
        "media/6502-asic.png",
        "Project",
        "https://github.com/danielh186/6502-Tapeout"
    ),
    diagonalImageCard(
        "left",
        "career",
        "Academic Researcher",
        "<a href='https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/profil'>Hochschule RheinMain</a>",
        "01/04/2025",
        // "01/04/2024 -<br>now",
        "",
        // "Starting my new position as scientific researcher, working mainly on the FIENDISH research project...",
        [],
        "media/hsrm-logo.jpg",
        "Project",
        ""
    ),

    generateTimelineYearMarker("2024"),

    diagonalImageCard(
        "left",
        "education",
        "Bachelor's Degree - Computer Science",
        "<a href='https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/profil'>Hochschule RheinMain</a>, <a href='https://www.phytec.eu/en/startseite/'>PHYTEC Messtechnik GmbH</a>",
        // "01/10/2021 -<br>15/10/2024",
        "15/10/2024",
        "<p>Thesis: Development of a production workstation for computer assisted focus calibration of embedded cameras.",
        [],
        "media/bachelor-graduation.jpg",
        "Project",
        ""
    ),
    diagonalImageCard(
        "left",
        "career",
        "Research Assistant",
        "<a href='https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/profil'>Hochschule RheinMain</a>",
        "01/10/2024",
        // "01/10/2024 -<br>31/03/2025",
        "",
        // "Starting my new position as scientific researcher, working mainly on the FIENDISH research project.",
        [],
        "media/hsrm-logo.jpg",
        "Project",
        ""
    ),

    generateTimelineYearMarker("2023"),

    diagonalImageCard(
        "right",
        "projects",
        "LED Pyramid",
        "1168 controllable LEDs - ultimate glow",
        "08/06/2023",
        "Eight 1.5m long tubes equipped with WS2812B LED strips. Modular design allowing easy toolless disassembly for transport. ",
        [],
        "media/led-pyramid/pyramid_1.jpg",
        "Project",
        null,
        [
            {
                image_src: "media/led-pyramid/pyramid_1.jpg",
                image_alt: "",
                title: "",
                description: ""
            },
            {
                image_src: "media/led-pyramid/pyramid_2.jpg",
                image_alt: "",
                title: "",
                description: ""
            },
            {
                image_src: "media/led-pyramid/power-supply.jpg",
                image_alt: "",
                title: "Power Supply (5V, 80A) and ESP32-C6 controller",
                description: ""
            },
        ]
    ),
    // diagonalImageCard(
    //     "right",
    //     "research",
    //     "Simple Power Analysis on UOV",
    //     "Side-Channel Attacks on Post-Quantum Cryptography",
    //     "08/06/2023",
    //     "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer",
    //     ["sdfa", "asdf", "asdf"],
    //     "",
    //     "Project",
    //     ""
    // ),

    generateTimelineYearMarker("2022"),

    diagonalImageCard(
        "right",
        "projects",
        "High Speed 3D-Printer",
        "Built before Bambu Lab existed",
        "21/12/2022",
        "Inspired by the VzBot-235 printer.",
        [],
        "media/high-speed-printer/done-2.jpg",
        "Project",
        null,
        [
            {
                image_src: "media/high-speed-printer/done-2.jpg",
                image_alt: "",
                title: "",
                description: ""
            },
            {
                image_src: "media/high-speed-printer/done.jpg",
                image_alt: "",
                title: "",
                description: ""
            },
            {
                image_src: "media/high-speed-printer/construction.jpg",
                image_alt: "",
                title: "Machine under construction",
                description: "Cleaning up will be fun"
            },
            {
                image_src: "media/high-speed-printer/printhead-weight.jpg",
                image_alt: "",
                title: "24 g custom CNC-machined ultralight printhead",
                description: "Building for maximal acceleration and speed"
            },
        ]
    ),
    diagonalImageCard(
        "right",
        "projects",
        "CNC 2.0",
        "More capable CNC machine with a budget of 500€",
        "01/02/2022",
        "Using cast aluminum plates, linear rails and ballscrews for a more rigid machine that is capable of machining metals.",
        [],
        "media/cnc-2_0/fresh-wasteboard.jpg",
        "Project",
        null,  // No link
        [
            {
                image_src: "media/cnc-2_0/fresh-wasteboard.jpg",
                image_alt: "",
                title: "",
                description: ""
            },
            {
                image_src: "media/cnc-2_0/cnc-with-controller.jpg",
                image_alt: "",
                title: "Finished CNC with controller and software running",
                description: "Running Linux-CNC on an old computer driving the stepper motor drivers through a LPT printer port."
            },
            {
                image_src: "media/cnc-2_0/building.jpg",
                image_alt: "",
                title: "Machine under construction",
                description: ""
            },
            {
                image_src: "media/cnc-2_0/printhead-done.jpg",
                image_alt: "",
                title: "Application: Ultralight printhead machined from aluminum",
                description: "Custom designed and machined from aluminum for a DIY high speed Core-XY 3D-printer. Coming in at only 24 grams (including screws)"
            }
        ]
    ),

    generateTimelineYearMarker("2021"),

    diagonalImageCard(
        "left",
        "career",
        "Embedded Software Developer",
        "<a href='https://www.phytec.eu/en/startseite/'>PHYTEC Messtechnik</a>",
        "01/10/2021 -<br>31/01/2025",
        "",
        ["Embedded C", "Embedded Linux", "Yocto", "U-Boot", "Qt", "Computer Vision"],
        "media/phytec-logo.png",
        "PHYTEC company logo",
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
        "media/frauenlob-logo.png",
        "Frauenlob Gymnasium Logo",
        ""
    ),

    generateTimelineYearMarker("2020"),

    diagonalImageCard(
        "right",
        "projects",
        "3D-Printed CNC Router",
        "Project Subtitle",
        "06/09/2020",
        "A DIY CNC machine built as cheap as possible from 3D-printed parts. Inspired by Nikodem Bartenik's \"Dremel CNC\" but fully modelled and built from scratch.<br>This was my first project using the  3D-printer I convinced my dad to buy when I was 15 years old. While the machine did not produce the best results, building it tought me a lot of valuable lessons.",
        [],
        "media/printed-cnc/cnc-3dp.jpg",
        "Project",
        null,  // No link
        [
            // TODO add image of CAD
            {
                image_src: "media/printed-cnc/cnc-3dp.jpg",
                image_alt: "",
                title: "As cheap as possible!",
                description: "Using 3D printed parts, 12mm linear guides and Nema17 stepper motors. The spindle is an old Dremel clone that I managed to save from the trash."
            },
            {
                image_src: "media/printed-cnc/cnc-cutting.jpg",
                image_alt: "CNC Machine milling an old kitchen cutting board",
                title: "It works!",
                description: "Machining prototype parts for a 6 axis robot arm from an old kitchen cutting board.<br>(The Dremel clone broke down and I had to upgrade to a 500W spindle)"
            },
        ]
    ),
]

