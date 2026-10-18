import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { titlesData } from "../utils/data.js";

const params = new URLSearchParams(window.location.search);
const lessonID = params.get("lesson");
const container = document.querySelector(".lesson-content");

marked.setOptions({
    gfm: true,
    breaks: true
});

// Protect mathematical expressions before Markdown parsing.
function protectMath(markdown) {
    const mathBlocks = [];

    function saveMath(type, content) {
        const id = mathBlocks.length;

        mathBlocks.push({
            type,
            content: content.trim()
        });

        return `MATHPLACEHOLDER${id}END`;
    }

    // Display math: $$ ... $$
    markdown = markdown.replace(
        /\$\$([\s\S]*?)\$\$/g,
        (_, content) => saveMath("display", content)
    );

    // Display math: \[ ... \]
    markdown = markdown.replace(
        /\\\[([\s\S]*?)\\\]/g,
        (_, content) => saveMath("display", content)
    );

    // Inline math: \( ... \)
    markdown = markdown.replace(
        /\\\(([\s\S]*?)\\\)/g,
        (_, content) => saveMath("inline", content)
    );

    // Inline math: $ ... $
    markdown = markdown.replace(
        /(?<!\\)\$([^\n$]+?)\$/g,
        (_, content) => saveMath("inline", content)
    );

    return { markdown, mathBlocks };
}

// Restore math expressions after Markdown parsing.
function restoreMath(html, mathBlocks) {
    mathBlocks.forEach((math, index) => {
        const placeholder = `MATHPLACEHOLDER${index}END`;

        const replacement = math.type === "display"
            ? `<div class="math-block">\\[${math.content}\\]</div>`
            : `\\(${math.content}\\)`;

        html = html.replaceAll(placeholder, replacement);
    });

    return html;
}

// Wait until MathJax is ready.
function waitForMathJax(timeout = 10000) {
    return new Promise((resolve, reject) => {
        const started = Date.now();

        const check = () => {
            if (
                window.MathJax &&
                typeof window.MathJax.typesetPromise === "function"
            ) {
                resolve();
                return;
            }

            if (Date.now() - started >= timeout) {
                reject(new Error("MathJax did not load in time."));
                return;
            }

            setTimeout(check, 50);
        };

        check();
    });
}

async function loadLesson() {
    if (!container) {
        console.error('Element ".lesson-content" was not found.');
        return;
    }

    try {
        if (!lessonID) {
            throw new Error("No lesson ID was provided in the URL.");
        }

        const lesson = titlesData.find(
            item => String(item.id) === lessonID
        );

        if (!lesson) {
            throw new Error(`Lesson not found for ID: ${lessonID}`);
        }

        const response = await fetch(lesson.file);

        if (!response.ok) {
            throw new Error(
                `Failed to load lesson file: ${response.status} ${response.statusText}`
            );
        }

        const markdown = await response.text();
        const {
            markdown: protectedMarkdown,
            mathBlocks
        } = protectMath(markdown);

        const parsedHTML = await marked.parse(protectedMarkdown);
        container.innerHTML = restoreMath(parsedHTML, mathBlocks);

        await waitForMathJax();
        await window.MathJax.typesetPromise([container]);

    } catch (error) {
        console.error("Error loading lesson:", error);

        container.innerHTML = `
            <div class="lesson-error">
                <h2>Unable to Load Lesson</h2>
                <p>
                    We couldn't load this lesson. Please check the lesson
                    link, file path, and your internet connection.
                </p>
            </div>
        `;
    }
}

loadLesson();