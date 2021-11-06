document.addEventListener("DOMContentLoaded", () => {
    let slideNumber = 0;

    let nextBtn = document.querySelector("#next-btn");

    let barA = document.querySelector("#bar-a");
    let barB = document.querySelector("#bar-b");
    let barBTop = document.querySelector("#bar-b-top");
    let barBBorder = document.querySelector("#bar-b-border");
    let barB1 = document.querySelector("#bar-b1");
    let barD = document.querySelector("#bar-d");

    let text = document.querySelector("#text");

    nextBtn.addEventListener("click", next);

    function back() {
        slideNumber--;
        changeTo(slideNumber);
    }

    function next() {
        slideNumber++;
        changeTo(slideNumber);
    }

    function reset() {
        slideNumber = 1;
        changeTo(slideNumber);
    }

    function changeTo(slideNumber) {
        text.style.opacity = "0";
        text.style.transform = "translateX(2rem)";

        setTimeout(() => {
            text.style.opacity = null;
            text.style.transform = "translateX(0)";

            if (slideNumber === 0) {
                // Change header
                let header = document.querySelector("#header");
                header.innerHTML = '<h1 class="text-4xl xl:text-5xl font-black">Our elections are broken.</h1><h2 class="text-4xl \
                xl:text-5xl font-black">Let’s fix that.</h2>';
                header.style.textAlign = null;

                // Change buttons
                let btnsContainer = document.querySelector("#btns-container");
                btnsContainer.innerHTML = '<button class="btn btn-secondary text-lg xl:text-xl" id="next-btn" autofocus>See why</button>\
                <a class="btn btn-primary text-lg xl:text-xl" href="/explore">See how</a>';
                btnsContainer.style.justifyContent = "flex-start";

                // Set event listeners for the new buttons
                document.querySelector("#next-btn").addEventListener("click", next);

                // Change paragraph
                text.innerHTML = '<p>Have you ever felt like nothing ever happens anymore in your government?</p><p>It might be because the way we vote for people is systematically flawed.</p><div class="flex flex-row items-center"><span class="link" tabindex="0">How?</span></div>';
                text.style.paddingLeft = null;

                // Reset bars
                barA.style.height = null;
                barB.style.height = null;
                barBTop.style.height = null;
                barBTop.style.opacity = null;
                barB1.style.height = null;

                // Reset bar texts
                barA.innerHTML = "";
                barA.style.padding = null;
                barA.style.textAlign = null;
                barB.innerHTML = "";
                barB.style.padding = null;
                barB.style.textAlign = null;
                barB1.style.opacity = null;

            } else if (slideNumber === 1) {
                let header = document.querySelector("#header")

                // Change buttons
                header.innerHTML = '<h1 class="text-4xl xl:text-5xl font-black">The current system and the spoiler effect</h1>'
                let newBtns = '<button class="btn btn-primary text-xl xl:text-2xl" id="back-btn">Back</button>\
            <button class="btn btn-secondary text-xl xl:text-2xl" id="next-btn">Next</button>'
                let btnsContainer = document.querySelector("#btns-container");
                if (btnsContainer.innerHTML !== newBtns) {
                    header.style.textAlign = "right";
                    btnsContainer.innerHTML = newBtns;
                    btnsContainer.style.justifyContent = "flex-end";
                }

                // Set event listeners for the new buttons
                nextBtn = document.querySelector("#next-btn").addEventListener("click", next);
                document.querySelector("#back-btn").addEventListener("click", back);

                // Change paragraph
                text.innerHTML = '<p><strong>This might get complicated, so please read carefully.</strong> Thanks!</p><hr><p>Let’s say \
                    we hold an election, wherein the party with the <strong>most votes win</strong>. That’s called “First Past The \
                    Post” (FPTP). </p><p>As a voter, you really like party B and just absolutely hate party A. You always vote for \
                    party B</p><p>By this system, <strong>party B is the winning party</strong>, to your delight.</p>';
                text.style.paddingLeft = "0";

                // Animate bars
                barA.style.height = "28rem";
                barB.style.height = "32rem";
                barBTop.style.height = "0";
                barBTop.style.opacity = "0";
                barBBorder.classList.remove("ring");
                barBBorder.classList.remove("ring-offset-2");
                barBBorder.classList.remove("ring-blue-500");
                barB1.style.height = "0";
                barB1.style.opacity = "0";
                barB1.innerHTML = "";
                setTimeout(() => {
                    barB1.classList.add("from-tertiary");
                    barB1.classList.remove("from-tertiary-light");
                }, 500);

                // Give bars text
                barA.innerHTML = "A";
                barA.style.padding = "1rem";
                barA.style.textAlign = "center";
                barB.innerHTML = "B";
                barB.style.padding = "1rem";
                barB.style.textAlign = "center";
                barB1.innerHTML = null;
                barB1.style.padding = null;
                barB1.style.textAlign = null;

            } else if (slideNumber === 2) {
                // Change paragraph
                text.innerHTML = "<p>Now consider this scenario: a part of party B decided to split out and form their own party: party \
                    B1.</p><p>You discovered that <strong>you like party B1 way more than party B, as with a lot of other party B \
                    voters. </strong></p><p>You decided, along with some former party B voters, to <strong>vote for party B1</strong> \
                    instead.</p>";
                text.style.paddingLeft = null;

                // Animate bars
                barA.style.height = null;
                barB.style.height = "32rem";
                barBTop.style.height = "0";
                barBTop.style.opacity = "0";
                barBBorder.style.top = "0";
                barBBorder.style.left = "21rem";
                barBBorder.classList.add("ring");
                barBBorder.classList.add("ring-offset-2");
                barBBorder.classList.add("ring-blue-500");
                barB1.style.height = null;
                barB1.style.opacity = null;
                barB1.classList.add("from-tertiary-light");
                barB1.classList.remove("from-tertiary");
                setTimeout(() => {
                    barB1.innerHTML = "B1";
                    barB1.style.padding = "1rem";
                    barB1.style.textAlign = "center";
                }, 200);

            } else if (slideNumber === 3) {
                // Change paragraph
                text.innerHTML = "<p>Since party B1 is formed by former party B supporters, <strong>party B loses its voters to party B1\
                    </strong>. The votes split.</p><p>The current system means <strong>party A wins</strong>, despite the fact that \
                    there are more people that do not support party A.</p><p>Seeing this, you <strong>will never vote for a new party \
                    again, because you don’t want party A to win</strong>, despite how much you might like the new one.</p>";

                // Animate bars
                barB.style.height = null;
                barB1.style.height = null;
                barBTop.style.height = null;
                barBTop.style.opacity = null;
                barBBorder.style.top = "24rem";
                barBBorder.style.left = "36rem";
                barD.style.height = null;
                barD.innerHTML = "";
                barD.style.padding = null;
                barD.style.textAlign = null;
                setTimeout(() => {
                    barB1.style.opacity = "0";
                }, 500);
                setTimeout(() => {
                    barB1.classList.add("from-tertiary");
                    barB1.classList.remove("from-tertiary-light");
                    barB1.style.opacity = null;
                    barBBorder.classList.remove("ring");
                    barBBorder.classList.remove("ring-offset-2");
                    barBBorder.classList.remove("ring-blue-500");
                }, 750);

                // Change bar texts
                barB1.innerHTML = "B1";

            } else if (slideNumber === 4) {
                // Change paragraph
                text.innerHTML = "<p>Because a new party like party B1 could never win under this system, <strong>only the 2 big \
                    parties are taken seriously in real life</strong>, and only they can actually do things.</p><p>That’s why changes \
                    and new ideas never happen; <strong>only the long-established parties are heard but not the new parties with new \
                    ideas</strong>.</p>";

                // Animate bars
                barA.style.height = "28rem";
                barB.style.height = "32rem";
                barBTop.style.height = "0";
                barBTop.style.opacity = "0";
                barB1.style.height = "8rem";
                barD.style.height = "6rem";

                // Change text
                barB1.innerHTML = "C";
                setTimeout(() => {
                    barD.innerHTML = "D";
                    barD.style.padding = "1rem";
                    barD.style.textAlign = "center";
                }, 200);
            
            } else if (slideNumber === 5) {
                // Change header
                let header = document.querySelector("#header");
                header.innerHTML = '<h1 class="text-4xl xl:text-5xl font-black">Our elections are broken.</h1><h2 class="text-4xl \
                    xl:text-5xl font-black">Let’s fix that.</h2>';
                header.style.textAlign = null;

                // Change buttons
                let btnsContainer = document.querySelector("#btns-container");
                btnsContainer.innerHTML = '<button class="btn btn-secondary text-lg xl:text-xl" id="reset-btn" autofocus>Play again\
                    </button><a class="btn btn-primary text-lg xl:text-xl" href="/explore">Explore</a>';
                btnsContainer.style.justifyContent = "flex-start";

                // Set event listeners for the new buttons
                document.querySelector("#reset-btn").addEventListener("click", reset);

                // Change paragraph
                text.innerHTML = '<p>But do not lose hope! There are other voting systems that attempt to solve issues like this one.\
                    </p><div class="flex flex-row items-center"><a href="/explore" class="link" tabindex="0">Explore other voting \
                    systems</a></div>';
                text.style.paddingLeft = null;

                // Reset bars
                barA.style.height = null;
                barB.style.height = null;
                barBTop.style.height = null;
                barBTop.style.opacity = null;
                barB1.style.height = null;
                barB1.style.opacity = null;
                barD.style.height = null;
                barD.style.opacity = null;

                // Reset bar texts
                barA.innerHTML = "";
                barA.style.padding = null;
                barA.style.textAlign = null;
                barB.innerHTML = "";
                barB.style.padding = null;
                barB.style.textAlign = null;
                barB1.innerHTML = "";
                barB1.style.padding = null;
                barB1.style.textAlign = null;
                barD.innerHTML = "";
                barD.style.padding = null;
                barD.style.textAlign = null;

            } else {
                slideNumber = 0;
                changeTo(slideNumber);
            }

        }, 500);
    }
});