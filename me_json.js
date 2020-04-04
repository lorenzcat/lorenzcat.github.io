me_json = 
{
    home : 
    {
        name : "Lorenzo Catoni",
        img : {
            img : "img/imgprofilo.jpg",
            alt : "This is me"
        },
        desc : "Computer engineering student<br>CTF player"

    }, // /home
    curriculum: 
    [
        {
            title : "Education",
            list : 
            [
                {
                    what : "Bachelor's degree",
                    when : {
                        start: "OCT 18",
                        end: "PRESENT"
                    },
                    where : "PISA (Italy)",
                    href: "",
                    desc : "Bachelor's degree in computer engineering at <a href='http://www.ing.unipi.it/en/'>University of Pisa</a>"
                            
                },
                {
                    what : "Diploma",
                    when : {
                        start: "SEP 13",
                        end: "JUL 18"
                    },
                    where : "VITERBO (Italy)",
                    href: "",
                    desc : "High school diploma at scientific high school <a href='https://www.liceopaoloruffiniviterbo.edu.it/'>Paolo Ruffini</a><br>Thesis on \"Nikola Testa and The War of the Currents\" with a final score of 100/100",
                    oldest : true
                            
                }
            ]
        }, // /Education
        {
            title : "What i have been doing recently",
            list :
            [
                /*{
                    what : "CyberChallenge.IT 2020",
                    when : {
                        start: "MAR 20",
                        end: "PRESENT"
                    },
                    where : "PISA (Italy)",
                    href: "https://cyberchallenge.it/",
                    desc : "Tutor for the cc20"
                            
                },*/
                {
                    what : "ITASEC20",
                    when : {
                        start: "4 SEP 20"
                    },
                    where : "ANCONA (Italy)",
                    href: "https://itasec.it/",
                    desc : "Gave a talk with Nicola Vella and Marco Gaglianese at Capture.IT (a workshop @ itasec) on our experince at CyberChallenge.IT 2019 and in capture the flag competitions in general, plus gave some tips aimed at beginners intrested in CTFs"
                            
                },
                {
                    what : "CyberChallenge.IT 2019",
                    when : {
                        start: "MAR 19",
                        end : "JUL 19"
                    },
                    where : "PISA (Italy)",
                    href: "https://cyberchallenge.it/halloffame/2019",
                    desc : "Partecipated at the 2019 edition of the CyberChallenge.IT project, that included lectures and exercises on cybersecurity topics such as reverse engineering, binary exploitation, cryptography, web security and others.<br>I qualified as one of the four memebers of the team for the University of Pisa and partecipated at the national competition held in Chiavari (Italy). Out team placed third (out of 18 teams)",
                    oldest : true
                            
                }
            ]
        } // /What i have been doing recently
    ], // /Currculum
    contacts: 
    [
        {
            href : "https://github.com/lorenzcat",
            img : {
                img: "data:image/png;base64,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",
                alt: "Github"
            },
            uname : "lorenzcat",
            easteregg : "yeeeee you chose me click me click me!!"
        },
        {
            href : "https://t.me/lorenzcat",
            img : {
                img: "data:image/png;base64,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",
                alt: "Telegram"
            },
            uname : "lorenzcat",
            easteregg : "noo click me i am better plizz!!!"
        },
        {
            href : "javascript:void(0)",
            img : {
                img: "data:image/png;base64,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",
                alt: "Email"
            },
            uname : "coming soon...",
            easteregg : "no need to click here :)"
        }
    ], // /Contacts
    footer: 
    [
        "Website: Lorenzo Catoni"
    ] // /footer
}