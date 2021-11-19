document.addEventListener("DOMContentLoaded", () => {
    let slideNumber = 0;

    document.querySelector("#back-btn").addEventListener("click", back);
    document.querySelector("#next-btn").addEventListener("click", next);

    const btnsContainer = document.querySelector("#btns-container");

    const card = document.querySelector("#card");
    const text = document.querySelector("#text");

    const barA = document.querySelector("#bar-a");
    const barB = document.querySelector("#bar-b");
    const barC = document.querySelector("#bar-c");

    function back() {
        if (slideNumber > 0) {
            slideNumber--;
            changeTo(slideNumber);
        }
    }

    function next() {
        slideNumber++;
        changeTo(slideNumber);
    }

    function reset() {
        slideNumber = 0;
        changeTo(slideNumber);
    }

    function changeTo(slideNumber) {
        console.log(slideNumber);
        if (slideNumber === 0) {
            floatRightExit(text);
            setTimeout(() => {
                floatLeftEntrance(text);
                text.innerHTML = `
                    <p>
                        <strong>The one with the most votes wins.</strong>
                    </p>
                    <p>
                        Still don’t get it? Follow along!
                    </p>
                `;

                barA.innerHTML = `A`;
                barB.innerHTML = `
                    <p>B</p>
                    <p class="text-xl">(winner)</p>
                `;
                barC.innerHTML = `C`;
            
            }, 500);

            floatDownExit(card);
        
        } else if (slideNumber === 1) {
            floatRightExit(text);
            setTimeout(() => {
                floatLeftEntrance(text);
                text.innerHTML = `
                    <p>
                        Let’s consider this scenario. In the town of Jimmyville, an election was held with the following results:
                        <strong>party A got 1,200 votes, party B got 1,600 votes,</strong> and <strong>party C got 600 votes.</strong>
                    </p>
                    <p>
                        <strong>Party A wins because it has more votes than every other party.</strong>
                    </p>
                `;

                barA.innerHTML = `
                <p>A</p>
                <p class="text-xl">\\((1,200 \\text{ votes})\\)</p>
                `;
                barB.innerHTML = `
                <p>B</p>
                <p class="text-xl">\\((1,600 \\text{ votes})\\)</p>
                `;
                barC.innerHTML = `
                <p>C</p>
                <p class="text-xl">\\((600 \\text{ votes})\\)</p>
                `;

            }, 500);

            floatDownExit(card);
            setTimeout(() => {
                floatUpEntrance(card);
                card.innerHTML = `
                    <p>\\(1,600 > 1,200 > 600\\)</p>
                `;
                MathJax.typeset();
            }, 500);

        } else if (slideNumber === 2) {
            floatRightExit(text);
            setTimeout(() => {
                resetBtns(btnsContainer);
                document.querySelector("#back-btn").addEventListener("click", back);
                document.querySelector("#next-btn").addEventListener("click", next);

                floatLeftEntrance(text);
                text.innerHTML = `
                    <p>
                        Another way of <strong>finding the winner</strong> according to this system is to <strong>use the mathematical formula
                        on the left</strong>.
                    </p>
                    <p>
                        We’re kinda running out of ways to teach you this concept and we apologize.
                    </p>
                `;
                
                barA.innerHTML = `A`;
                barB.innerHTML = `B`;
                barC.innerHTML = `C`;

            }, 500);

            card.style.opacity = "0";
            card.style.transform = "translateY(1rem)";
            setTimeout(() => {
                card.style.opacity = "100";
                card.style.transform = "translateY(0)";
                card.innerHTML = `
                    <p>\\(\\text{let } C = \\text{ set of candidates}\\)</p>
                    <p>\\(\\text{let } V = \\text{ set of votes each candidates got}\\)</p>
                    <p>\\(\\text{let } f =  \\{(x, y): C \\xrightarrow[\\text{onto}]{1-1} V | x \\in C \\land y \\in V; y = \\text{number of votes } x \\text{ got}\\}\\)</p>
                    <p>\\(\\therefore \\text{winner } = \\max(f(n)); n \\in C \\)</p>
                `;
                MathJax.typeset();
            }, 500);

        } else if (slideNumber === 3) {
            floatDownExit(card);
            floatRightExit(text);
            setTimeout(() => {
                setBtnsToEnd(btnsContainer, "first-past-the-post");
                document.querySelector("#back-btn").addEventListener("click", back);

                floatLeftEntrance(text);
                text.innerHTML = `
                    <p>
                        Alright, alright. If you really don’t get this then just lay your eyes on the diagram on the left.
                    </p>
                    <p>
                        The bar labelled <strong>B is bigger than the other bars</strong>. That means more voters like party B than any
                        other party. Thus, <strong>party B wins</strong>.
                    </p>
                `;

                barA.innerHTML = `
                    <p>A</p>
                    <p class="text-xl">(smaller)</p>
                `;
                barB.innerHTML = `
                    <p>B</p>
                    <p class="text-xl">(bigger)</p>
                `;
                barC.innerHTML = `
                    <p>C</p>
                    <p class="text-xl">(smaller)</p>
                `;

            }, 500);
        }
    }
})