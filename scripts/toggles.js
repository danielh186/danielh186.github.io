export function generateToggle(
    checkboxID,
    label,
    defaultState,
    colors = ({
        color = "pink",
        uncheckedBackground = "gray-200",
        darkUncheckedBackground = "gray-700",
        focusRing = "rose-300",
        darkFocusRing = "rose-800",
        checkedBackground = "rose-600",
        darkCheckedBackground = "rose-600",
    } = {})
) {
    return `
    <label class="inline-flex items-center me-5 cursor-pointer">
        <input type="checkbox" id="${checkboxID}" checked="${defaultState}" value="" class="sr-only peer" checked />
        <div
          class="relative w-11 h-6 bg-${colors.uncheckedBackground} dark:bg-${colors.darkUncheckedBackground} rounded-full peer peer-focus:ring-4 peer-focus:ring-${colors.focusRing} dark:peer-focus:ring-${colors.darkFocusRing} \
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] \
          after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-${colors.checkedBackground} dark:peer-checked:bg-${colors.darkCheckedBackground}"
        ></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">${label}</span>
    </label>
    `;
}

function initializeToggleListeners() {
    Object.keys(toggleColors).forEach(category => {
        const checkbox = document.getElementById(`${category}-toggle`);
        console.log(checkbox)
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                const timelineEntries = document.querySelectorAll(`.timelineEntry-${category}`);
                const show = checkbox.checked;
                console.log(timelineEntries)
                timelineEntries.forEach(entry => {
                    entry.classList.toggle('hidden', !show);
                });
            });
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initializeToggleListeners();          // set up toggle behavior
});

export const toggleColors = {
    education: {
        color: "rose",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "rose-300",
        darkFocusRing: "rose-800",
        checkedBackground: "rose-600",
        darkCheckedBackground: "rose-600",
    },
    research: {
        color: "green",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "emerald-300",
        darkFocusRing: "emerald-800",
        checkedBackground: "emerald-600",
        darkCheckedBackground: "emerald-600",
    },
    career: {
        color: "cyan",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "cyan-300",
        darkFocusRing: "cyan-800",
        checkedBackground: "cyan-600",
        darkCheckedBackground: "cyan-600",
    },
    projects: {
        color: "indigo",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "indigo-300",
        darkFocusRing: "indigo-800",
        checkedBackground: "indigo-600",
        darkCheckedBackground: "indigo-600",
    },
    achievements: {
        color: "fuchsia",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "fuchsia-300",
        darkFocusRing: "fuchsia-800",
        checkedBackground: "fuchsia-600",
        darkCheckedBackground: "fuchsia-600",
    },
    extra1: {
        color: "orange",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "orange-300",
        darkFocusRing: "orange-800",
        checkedBackground: "orange-500",
        darkCheckedBackground: "orange-500",
    },
    extra2: {
        color: "violet",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "violet-300",
        darkFocusRing: "violet-800",
        checkedBackground: "violet-600",
        darkCheckedBackground: "violet-600",
    },
    extra3: {
        color: "pink",
        uncheckedBackground: "gray-200",
        darkUncheckedBackground: "gray-700",
        focusRing: "pink-300",
        darkFocusRing: "pink-800",
        checkedBackground: "pink-600",
        darkCheckedBackground: "pink-600",
    },
};
