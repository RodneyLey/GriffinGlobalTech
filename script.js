const meetings = [
    {
        month: "JANUARY 2026",
        image: "images/january.jpg",
        edition: "RESET EDITION",
        dressCode: "Dress like your resolutions",
        date: "31st January, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        Program: "https://thhllc-my.sharepoint.com/:b:/g/personal/jerioth_waruru_thejitu_com/IQB4nLFFFHYUT69sy7AEOhoMAUIreYZbTAYEFdweeqH3mmU?e=NgY3Cv"

        /*photos: "https://forms.gle/3km5Sckmta2mMDHo7"*/
    },
    {
        month: "FEBRUARY 2026",
        image: "images/Coming_soon.png",
        edition: "VALENTINE EDITION",
        dressCode: "Dress dinnerwear",
        date: "28th February, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "MARCH 2026",
        image: "images/Coming_soon.png",
        edition: "WOMEN'S MONTH EDITION",
        dressCode: "Purple or African wear",
        date: "31st March, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "APRIL 2026",
        image: "images/Coming_soon.png",
        edition: "EASTER EDITION",
        dressCode: "Dress like Easter",
        date: "30th April, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "MAY 2026",
        image: "images/Coming_soon.png",
        edition: "MAY EDITION",
        dressCode: "Dress like May",
        date: "31st May, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "JUNE 2026",
        image: "images/Coming_soon.png",   
        edition: "JUNE EDITION",
        dressCode: "Dress like June",
        date: "30th June, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "JULY 2026",
        image:  "images/Coming_soon.png",   
        edition: "JULY EDITION",
        dressCode: "Dress like July",
        date: "31st July, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "AUGUST 2026",
        image: "images/Coming_soon.png",
        edition: "AUGUST EDITION",
        dressCode: "Dress like August",
        date: "31st August, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "SEPTEMBER 2026",
        image: "images/Coming_soon.png",
        edition: "SEPTEMBER EDITION",
        dressCode: "Dress like September",
        date: "30th September, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "OCTOBER 2026",
        image: "images/Coming_soon.png",
        edition: "OCTOBER EDITION",
        dressCode: "Dress like October",
        date: "31st October, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "NOVEMBER 2026",
        image: "images/Coming_soon.png",
        edition: "NOVEMBER EDITION",
        dressCode: "Dress like November",
        date: "30th November, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    },
    {
        month: "DECEMBER 2026",
        image: "images/Coming_soon.png",
        edition: "DECEMBER EDITION",
        dressCode: "Dress like December",
        date: "31st December, 2026",
        location: "J4 Atrium",
        time: "2:50 PM – 3:50 PM",
        photos: ""
    }
];

const calendar = document.getElementById("calendar");

meetings.forEach(item => {
    const section = document.createElement("div");
    section.className = "month-section";

    section.innerHTML = `
        <div class="month-title">${item.month}</div>

        <div class="meeting-card">
            <img src="${item.image}" alt="${item.month} poster">

            <div class="details">
                <h3>${item.edition}</h3>
                <p><span>Dress Code:</span> ${item.dressCode}</p>
                <p><span>Date:</span> ${item.date}</p>
                <p><span>Location:</span> ${item.location}</p>
                <p><span>Time:</span> ${item.time}</p>
                ${item.photos ? `<p><span>Photos Link:</span> <a href="${item.photos}" target="_blank">${item.photos}</a></p>` : ""}
                ${item.Program ? `<p><span>Program Link:</span> <a href="${item.Program}" target="_blank">View Program (PDF)</a></p>` : ""}
            </div>
        </div>
    `;

    calendar.appendChild(section);
});
