(() => {
    const reviews = [
        {
            quote: "Best fencing materials in Kenya. Great customer service and the delivery was on time.",
            name: "James Mwangi"
        },
        {
            quote: "Ordered water tanks and received them the next day. Genuine Kentank.",
            name: "Floyd"
        },
        {
            quote: "Excellent quality galvanized wire and unbeatable prices. I'm a repeat customer now.",
            name: "Peter Otieno"
        },
        {
            quote: "The fencing supplies were easy to order and arrived ready for our project.",
            name: "Faith Wanjiru"
        },
        {
            quote: "Found the wire sizes I needed and got clear information before ordering.",
            name: "Daniel Kamau"
        },
        {
            quote: "The team helped me choose the right chain link for my boundary.",
            name: "Grace Njeri"
        },
        {
            quote: "My order was handled smoothly, from the first enquiry through delivery.",
            name: "Brian Kiptoo"
        },
        {
            quote: "Good selection of fencing products for a farm project.",
            name: "Mary Achieng"
        },
        {
            quote: "I appreciated the quick response and straightforward ordering process.",
            name: "David Mutua"
        },
        {
            quote: "The binding wire worked well for our reinforcement work.",
            name: "Lucy Wambui"
        },
        {
            quote: "Helpful service when I was comparing water tank options.",
            name: "Samuel Cheruiyot"
        },
        {
            quote: "The barbed wire order arrived in good condition.",
            name: "Esther Atieno"
        },
        {
            quote: "Clear communication made arranging delivery simple.",
            name: "Joseph Mwende"
        },
        {
            quote: "I found the construction supplies I needed in one place.",
            name: "Anne Wairimu"
        },
        {
            quote: "The team answered my questions about the different fencing options.",
            name: "Michael Ouma"
        },
        {
            quote: "Ordering supplies for our site was simple and convenient.",
            name: "Janet Chebet"
        },
        {
            quote: "The chain link fencing suited the job we had planned.",
            name: "Peter Maina"
        },
        {
            quote: "Quick help with my quote request and product questions.",
            name: "Ruth Naliaka"
        },
        {
            quote: "I was able to get the wire and accessories needed for the farm.",
            name: "Kevin Barasa"
        },
        {
            quote: "A straightforward experience buying materials for our renovation.",
            name: "Mercy Nyambura"
        },
        {
            quote: "The product information helped me plan my order with confidence.",
            name: "Patrick Karanja"
        },
        {
            quote: "Convenient service for getting fencing materials delivered.",
            name: "Diana Jepkosgei"
        }
    ];
    const popup = document.createElement("aside");
    popup.className = "review-popup";
    popup.setAttribute("aria-label", "Customer review");
    popup.setAttribute("role", "status");
    popup.setAttribute("aria-live", "polite");

    const heading = document.createElement("div");
    heading.className = "review-popup-heading";
    heading.textContent = "Customer review";

    const quote = document.createElement("p");
    quote.className = "review-popup-quote";

    const author = document.createElement("div");
    author.className = "review-popup-author";
    const name = document.createElement("span");
    const role = document.createElement("span");
    role.textContent = "Verified customer";
    author.append(name, document.createTextNode(" · "), role);

    const close = document.createElement("button");
    close.className = "review-popup-close";
    close.type = "button";
    close.setAttribute("aria-label", "Dismiss review");
    close.textContent = "×";

    popup.append(heading, quote, author, close);
    document.body.append(popup);

    let reviewIndex = 0;
    let hideTimer;

    function showNextReview() {
        const review = reviews[reviewIndex];
        reviewIndex = (reviewIndex + 1) % reviews.length;
        quote.textContent = `“${review.quote}”`;
        name.textContent = review.name;
        popup.hidden = false;
        requestAnimationFrame(() => popup.classList.add("is-visible"));
        hideTimer = window.setTimeout(() => {
            popup.classList.remove("is-visible");
            window.setTimeout(() => {
                popup.hidden = true;
                window.setTimeout(showNextReview, 10000);
            }, 240);
        }, 6500);
    }

    close.addEventListener("click", () => {
        window.clearTimeout(hideTimer);
        popup.classList.remove("is-visible");
        window.setTimeout(() => {
            popup.hidden = true;
            window.setTimeout(showNextReview, 10000);
        }, 240);
    });

    window.setTimeout(showNextReview, 2500);
})();
